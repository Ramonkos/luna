from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer
from users.permission import IsOwnerOrReadOnlyRestaurant


class ListAllRestaurantsView(ListAPIView):
    """
    get:
    Returns a list of all Restaurants
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer



class CreateNewRestaurantView(CreateAPIView):
    """
    post:
    Creates a new restaurant with the logged in User as Owner.
    name, category (1 - 12), country, street, city, zip, opening_hours, price_level (1-5) required
    Categories: 1 = Burgers, 2 = Chinese, 3 = Italian, 4 = Japanese, 5 = Mexican, 6 = Thai
    7 = Indian, 8 = Greek, 9 = Swiss, 10 = Pizza, 11 = Vegetarian, 12 = Other
    """
    serializer_class = RestaurantSerializer
    permission_classes = [IsAuthenticated]


    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ListAllRestaurantsInCategoryView(ListAPIView):
    """
    get:
    Returns a list of all Restaurants of a specified category.
    Categories: 1 = Burgers, 2 = Chinese, 3 = Italian, 4 = Japanese, 5 = Mexican, 6 = Thai
    7 = Indian, 8 = Greek, 9 = Swiss, 10 = Pizza, 11 = Vegetarian, 12 = Other
    """
    serializer_class = RestaurantSerializer

    def list(self, request, *args, **kwargs):
        queryset = Restaurant.objects.all().filter(category=kwargs['category_id'])
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ListAllRestaurantsByUserView(ListAPIView):
    """
    get:
    Returns a list of all Restaurants owned by a specified User
    """
    serializer_class = RestaurantSerializer

    def list(self, request, *args, **kwargs):
        User = get_user_model()
        target_user = User.objects.get(id=kwargs['user_id'])
        queryset = Restaurant.objects.all().filter(owner=target_user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class RetrieveUpdateDestroyRestaurantView(RetrieveUpdateDestroyAPIView):
    """
    get:
    Retrieve one specified Restaurant

    patch:
    Update one specified Restaurant

    delete:
    Destroy one specified Restaurant
    """
    queryset = Restaurant
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'id'
    http_method_names = ['get', 'patch', 'delete']
    permission_classes = [
        IsOwnerOrReadOnlyRestaurant,
    ]
