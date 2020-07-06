from django.urls import path
from reviews.views import *

urlpatterns = [
    path('new/<int:restaurant_id>/', CreateReviewView.as_view()),
    path('restaurant/<int:restaurant_id>/', ListReviewCommentsView.as_view()),
    path('user/<int:user_id>/', ListUserReviewsView.as_view()),
    path('', RetrieveUpdateDestroyReviewView.as_view()),
    path('like/<int:review_id>/', ToggleLikeReviewView.as_view()),
    path('likes/', ListUserLikedReviewsView.as_view()),
    path('comments/', ListUserCommentsView.as_view()),
]
