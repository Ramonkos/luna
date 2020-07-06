from django.urls import path
from restaurants.views import *


urlpatterns = [
    path('all/', ListAllRestaurantsView.as_view()),
    path('new/', CreateNewRestaurantView.as_view()),
    path('category/<int:category_id>/', ListAllRestaurantsInCategoryView.as_view()),
    path('user/<int:user_id>/', ListAllRestaurantsByUserView.as_view()),
    path('<int:id>/', RetrieveUpdateDestroyRestaurantView.as_view()),
]
