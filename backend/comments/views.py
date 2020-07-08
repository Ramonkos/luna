from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from rest_framework.response import Response
from comments.models import Comment
from comments.serializers import CommentSerializer
from reviews.models import Review


class ListUsersCommentsView(ListAPIView):
    """
    get:
    Returns a list of all comments from a specified User.
    """
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'user_id'
    User = get_user_model()
    queryset = User

    def list(self, request, *args, **kwargs):
        comments = self.get_object().user_comments.all().order_by('-created')
        serializer = self.get_serializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CreateCommentView(CreateAPIView):
    """
    post:
    Create a new Comment on a specified Review.
    text_content required
    """
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'review_id'
    queryset = Review

    def create(self, request, *args, **kwargs):
        review = self.get_object()
        comment = Comment.objects.create(text_content=request.data['text_content'], restaurant_review=review,
                                         author=request.user)
        serializer = self.get_serializer(comment)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class DestroyCommentView(DestroyAPIView):
    """
    delete:
    Delete a specified Comment.
    """
    serializer_class = CommentSerializer
    queryset = Comment
    lookup_url_kwarg = 'review_id'
