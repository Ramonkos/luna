from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework import filters
from users.serializers import UserSerializer


class RetrieveUpdateUserProfileView(RetrieveUpdateAPIView):
    """
    get:
    Returns the logged in User's profile

    patch:
    Update the logged in User's Profile
    """
    User = get_user_model()
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get', 'patch']

    def retrieve(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.request.user)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        serializer = self.get_serializer(self.request.user, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)


class ListSearchAllUsersView(ListAPIView):
    """
    get:
    Returns all users profiles or Searches for a specific User
    """
    User = get_user_model()
    queryset = User.objects.all()
    serializer_class = UserSerializer
    search_fields = ['username', 'first_name', 'last_name', 'location']
    filter_backends = (filters.SearchFilter,)


class RetrieveSpecificUserView(RetrieveAPIView):
    """
    get:
    Returns a specific User profile
    """
    User = get_user_model()
    queryset = User
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'


