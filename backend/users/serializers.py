from django.contrib.auth import get_user_model
from rest_framework import serializers

from registrationprofiles.models import RegistrationProfile

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    amount_of_comments = serializers.SerializerMethodField()

    def get_amount_of_comments(self, obj):
        return len(obj.user_comments.all())

    amount_of_comments_liked = serializers.SerializerMethodField()

    def get_amount_of_comments_liked(self, obj):
        return len(obj.liked_comments.all())

    amount_of_reviews = serializers.SerializerMethodField()

    def get_amount_of_reviews(self, obj):
        return len(obj.user_reviews.all())

    amount_of_liked_reviews = serializers.SerializerMethodField()

    def get_amount_of_liked_reviews(self, obj):
        return len(obj.liked_reviews.all())

    amount_of_user_restaurants = serializers.SerializerMethodField()

    def get_amount_of_user_restaurants(self, obj):
        return len(obj.user_restaurants.all())

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'location', 'phone', 'things_user_loves', 'description', 'avatar',
                  'banner', 'amount_of_comments', 'amount_of_comments_liked', 'amount_of_reviews',
                  'amount_of_liked_reviews', 'amount_of_user_restaurants']
        extra_kwargs = {
            'email': {'read_only': True},
        }


class ValidationUserSerializer(UserSerializer):
    password_repeat = serializers.CharField(
        min_length=4,
        write_only=True,
        required=True,
        style={'input_type': 'password'}
    )

    code = serializers.CharField(
        write_only=True,
        required=True,
    )

    class Meta:
        model = User
        fields = ['code', 'email', 'username', 'location', 'password', 'password_repeat']

    def validate(self, data):
        try:
            target_profile = RegistrationProfile.objects.get(email=data.get('email'))
        except RegistrationProfile.DoesNotExist:
            raise serializers.ValidationError({"detail": "Your email doesn't match any profile or is invalid."})
        if data.get('code') != target_profile.code:
            raise serializers.ValidationError({"detail": "Your Validation Code is incorrect"})
        if data.get('password') != data.get('password_repeat'):
            raise serializers.ValidationError({"detail": "Password and Password Repeat do not match"})
        if not len(data.get('location')):
            raise serializers.ValidationError({"detail": "Location cannot be blank"})
        if not len(data.get('username')):
            raise serializers.ValidationError({"detail": "Username cannot be blank"})
        return data


class LimitedUserSerializer(serializers.ModelSerializer):
    password_repeat = serializers.CharField(
        min_length=4,
        write_only=True,
        required=True,
        style={'input_type': 'password'}
    )

    code = serializers.CharField(
        write_only=True,
        required=True,
    )

    email = serializers.CharField(
        write_only=True,
        required=True,
    )

    class Meta:
        model = User
        fields = ['email', 'code', 'password', 'password_repeat']

    def validate(self, data):
        target_profile = RegistrationProfile.objects.get(email=data.get('email'))
        if data.get('code') != target_profile.code:
            raise serializers.ValidationError({"detail": "Your Validation Code is incorrect"})
        if data.get('password') != data.get('password_repeat'):
            raise serializers.ValidationError({"detail": "Password and Password Repeat do not match"})
        return data
