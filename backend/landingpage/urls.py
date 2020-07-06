from django.urls import path
from landingpage.views import *

urlpatterns = [
    path('category/list/', ListRestaurantCategoriesView.as_view()),
    path('search/', SearchRestaurantsReviewsUsersView.as_view()),
    path('home/', ListTopFourRestaurantsView.as_view()),
]
