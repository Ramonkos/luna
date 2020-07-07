from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.response import Response

from restaurants.models import Restaurant
from reviews.models import Review
from reviews.serializers import ReviewSerializer


class CreateReviewView(CreateAPIView):
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'restaurant_id'
    queryset = Restaurant

    def create(self, request, *args, **kwargs):
        restaurant = self.get_object()
        review = Review.objects.create(text_content=request.data['text_content'], restaurant_review_about=restaurant,
                                       author=request.user, rating=request.data['rating'])
        serializer = self.get_serializer(review)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ListReviewCommentsView(ListAPIView):
    pass


class ListUserReviewsView(ListAPIView):
    pass


class RetrieveUpdateDestroyReviewView(RetrieveUpdateDestroyAPIView):
    pass


class ToggleLikeReviewView(GenericAPIView):
    pass


class ListUserLikedReviewsView(ListAPIView):
    pass


class ListUserCommentsView(ListAPIView):
    pass
