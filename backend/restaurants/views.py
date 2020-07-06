from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView


class ListAllRestaurantsView(ListAPIView):
    pass


class CreateNewRestaurantView(CreateAPIView):
    pass


class ListAllRestaurantsInCategoryView(ListAPIView):
    pass


class ListAllRestaurantsByUserView(ListAPIView):
    pass


class RetrieveUpdateDestroyRestaurantView(RetrieveUpdateDestroyAPIView):
    pass
