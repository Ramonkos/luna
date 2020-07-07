from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from landingpage.filters import DynamicSearchFilter
from landingpage.serializers import CategorySerializer
from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer
from reviews.models import Review
from reviews.serializers import ReviewSerializer
from users.serializers import UserSerializer


class ListRestaurantCategoriesView(ListAPIView):
    """
    get:
    Returns all active and distinct Restaurant categories
    """
    serializer_class = CategorySerializer
    queryset = Restaurant.objects.distinct('category').all()


class SearchRestaurantsReviewsUsersView(ListAPIView):
    """
    get:
    Searches either restaurants, users, or reviews (case sensitive) by supplying one as " search_location " in the
    params. Supply " search " as your target search and " search_fields " as your target field to search.
    """
    filter_backends = (DynamicSearchFilter,)

    def get_queryset(self):
        if self.request.query_params['search_location'] == 'restaurants':
            return Restaurant.objects.all()
        elif self.request.query_params['search_location'] == 'reviews':
            return Review.objects.all()
        else:
            User = get_user_model()
            return User.objects.all()

    def get_serializer_class(self):
        if self.request.query_params['search_location'] == 'restaurants':
            return RestaurantSerializer
        elif self.request.query_params['search_location'] == 'reviews':
            return ReviewSerializer
        else:
            return UserSerializer


class ListTopFourRestaurantsView(ListAPIView):
    """
    get:
    Returns the Top 4 Restaurants sorted by review_average
    """
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        serializer_data = serializer.data
        serializer_data = sorted(serializer_data, key=lambda k: k['review_average'], reverse=True)
        return Response(serializer_data[:4])
