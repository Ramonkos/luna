from rest_framework import serializers
from comments.models import Comment
from users.serializers import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(
        required=False,
        read_only=True,
    )

    amount_of_likes = serializers.SerializerMethodField()

    def get_amount_of_likes(self, obj):
        return len(obj.users_who_likes.all())

    logged_in_user_is_comment_author = serializers.SerializerMethodField()

    def get_logged_in_user_is_comment_author(self, obj):
        return self.context['request'].user == obj.author

    class Meta:
        model = Comment
        fields = ['id', 'text_content', 'restaurant_review', 'author', 'created', 'amount_of_likes',
                  'logged_in_user_is_comment_author']
