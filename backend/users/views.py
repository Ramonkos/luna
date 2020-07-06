from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateAPIView, ListAPIView
from users.serializers import UserSerializer


class RetrieveUpdateUserProfileView(RetrieveUpdateAPIView):
    pass


class ListAllUsersView(ListAPIView):
    """
    get:
    Returns all users
    """
    User = get_user_model()
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ListSearchUserView(ListAPIView):
    pass
