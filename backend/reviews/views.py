from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from restaurants.models import Restaurant
from reviews.models import Review
from reviews.serializers import ReviewSerializer
from users.permission import IsOwnerOrReadOnlyCommentsReviews


class CreateReviewView(CreateAPIView):
    """
    post:
    Create a new Review about a specified Restaurant authored by the logged in User.
    """
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'restaurant_id'
    queryset = Restaurant
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        restaurant = self.get_object()
        review = Review.objects.create(text_content=request.data['text_content'], restaurant_review_about=restaurant,
                                       author=request.user, rating=request.data['rating'])
        serializer = self.get_serializer(review)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ListReviewsView(ListAPIView):
    """
    get:
    Returns a list of all reviews about a specified Restaurant.
    """
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'restaurant_id'
    queryset = Restaurant

    def list(self, request, *args, **kwargs):
        reviews = self.get_object().restaurant_reviews.all().order_by('-created')
        serializer = self.get_serializer(reviews, many=True)
        return Response(serializer.data)


class ListUserReviewsView(ListAPIView):
    """
    get:
    Returns a list of all reviews by a specified User.
    """
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'user_id'
    User = get_user_model()
    queryset = User

    def list(self, request, *args, **kwargs):
        reviews = self.get_object().user_reviews.all().order_by('-created')
        serializer = self.get_serializer(reviews, many=True)
        return Response(serializer.data)


class RetrieveUpdateDestroyReviewView(RetrieveUpdateDestroyAPIView):
    """
    get:
    Retrieve one specified Review.

    patch:
    Update one specified Review.

    delete:
    Destroy one specified Review.
    """
    queryset = Review
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'
    http_method_names = ['get', 'patch', 'delete']
    permission_classes = [IsOwnerOrReadOnlyCommentsReviews]


class ToggleLikeReviewView(CreateAPIView):
    """
    post:
    Toggle liking a specific Review by logged in User.
    """
    queryset = Review
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        target_review = self.get_object()
        if self.request.user in target_review.users_who_liked.all():
            target_review.users_who_liked.remove(self.request.user)
        else:
            target_review.users_who_liked.add(self.request.user)
        toggle_review_data = self.get_serializer(target_review).data
        return Response(toggle_review_data, status=status.HTTP_202_ACCEPTED)


class ListUserLikedReviewsView(ListAPIView):
    """
    get:
    Returns a list of all reviews liked by logged in User.
    """
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        reviews = request.user.liked_reviews.all().order_by('-created')
        serializer = self.get_serializer(reviews, many=True)
        return Response(serializer.data)


class ListUserCommentsView(ListAPIView):
    """
    get:
    Returns a list of all reviews commented on by logged in User.
    """
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        reviews = []
        comments = request.user.user_comments.all()
        for comment in comments:
            reviews.append(comment.restaurant_review)
        serializer = self.get_serializer(reviews, many=True)
        return Response(serializer.data)
