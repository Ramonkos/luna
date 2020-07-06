from django.urls import path
from users.views import *

urlpatterns = [
    path('me/', RetrieveUpdateUserProfileView.as_view()),
    path('list/', ListAllUsersView.as_view()),
    path('<int:user_id>/', ListSearchUserView.as_view()),
]
