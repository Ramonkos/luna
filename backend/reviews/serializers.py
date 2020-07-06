from rest_framework import serializers

from reviews.models import Review
from users.serializers import UserSerializer


class ReviewSerializer(serializers.ModelSerializer):
    author = UserSerializer(
        required=False,
        read_only=True,
    )

    amount_of_likes = serializers.SerializerMethodField()

    def get_amount_of_likes(self, obj):
        return len(obj.users_who_liked.all())

    amount_of_comments = serializers.SerializerMethodField()

    def get_amount_of_comments(self, obj):
        return len(obj.comments.all())

    logged_in_user_is_review_author = serializers.SerializerMethodField()

    def get_logged_in_user_is_review_author(self, obj):
        return self.context['request'].user == obj.author

    class Meta:
        model = Review
        fields = ['id', 'text_content', 'rating', 'created', 'author', 'comments', 'restaurant_review_is_about',
                  'users_who_liked', 'amount_of_likes', 'amount_of_comments', 'logged_in_user_is_review_author']

