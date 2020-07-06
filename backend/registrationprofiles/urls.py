from django.urls import path
from registrationprofiles.views import *

urlpatterns = [
    path('registration/', CreateNewUnvalidatedUserView.as_view()),
    path('registration/validate/', ValidateNewUserView.as_view()),
    path('password-reset/', CreatePasswordResetRequestView.as_view()),
    path('password-reset/validate/', ValidatePasswordResetRequestView.as_view()),
]
