from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer


class ListAllRestaurantsView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class CreateNewRestaurantView(CreateAPIView):
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ListAllRestaurantsInCategoryView(ListAPIView):
    pass


class ListAllRestaurantsByUserView(ListAPIView):
    pass


class RetrieveUpdateDestroyRestaurantView(RetrieveUpdateDestroyAPIView):
    pass
