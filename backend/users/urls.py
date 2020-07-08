from django.urls import path
from users.views import *

urlpatterns = [
    path('me/', RetrieveUpdateUserProfileView.as_view()),
    path('list/', ListSearchAllUsersView.as_view()),
    path('<int:user_id>/', RetrieveSpecificUserView.as_view()),
]
