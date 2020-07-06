from django.contrib.auth import get_user_model
from rest_framework import serializers

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
