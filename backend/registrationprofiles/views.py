from django.contrib.auth import get_user_model
from django.core.mail import EmailMessage
from rest_framework import status
from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework.response import Response
from registrationprofiles.models import RegistrationProfile, code_generator
from registrationprofiles.serializers import RegistrationProfileSerializer
from users.serializers import LimitedUserSerializer, ValidationUserSerializer


class CreateNewUnvalidatedUserView(CreateAPIView):
    """
   post:
   Create a non active user with email info only.
   email required
   """
    permission_classes = []
    serializer_class = RegistrationProfileSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        target_profile = RegistrationProfile.objects.get(email=request.data['email'])
        email = EmailMessage()
        email.subject = 'New User Creation'
        email.body = f'Your validation code is {target_profile.code}'
        email.to = [target_profile.email]
        email.send(fail_silently=False)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ValidateNewUserView(CreateAPIView):
    """
    post:
    Uses a Validation Code, updates username, location, password, and password_repeat, activates the User.
    code, email, username, location, password, password_repeat required
    """
    permission_classes = []
    serializer_class = ValidationUserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        target_profile = RegistrationProfile.objects.all().get(email=request.data['email'])
        User = get_user_model()
        new_user = User.objects.create_user(request.data['username'], request.data['email'],
                                            request.data['password'],
                                            location=request.data['location'])
        self.perform_create(new_user)
        target_profile.user = new_user
        target_profile.save()
        return Response(status=status.HTTP_201_CREATED)


class CreatePasswordResetRequestView(CreateAPIView):
    """
    post:
    Creates a reset password email with validation code sent to the email provided.
    email required
    """
    permission_classes = []
    serializer_class = RegistrationProfileSerializer

    def create(self, request, *args, **kwargs):
        try:
            target_profile = RegistrationProfile.objects.all().get(email=request.data['email'])
            target_profile.code = code_generator()
            target_profile.save()
            email = EmailMessage()
            email.subject = 'Password Reset'
            email.body = f'Your password reset validation code is {target_profile.code}'
            email.to = [target_profile.email]
            email.send(fail_silently=False)
            return Response(status=status.HTTP_202_ACCEPTED)
        except RegistrationProfile.DoesNotExist:
            return Response({"detail": "Your email doesn't match any profile or is invalid."},
                            status=status.HTTP_400_BAD_REQUEST)


class ValidatePasswordResetRequestView(UpdateAPIView):
    """
    patch:
    Updates the password of the User tied to the email address.
    email, code, password, password_repeat required
    """
    permission_classes = []
    serializer_class = LimitedUserSerializer

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        try:
            target_profile = RegistrationProfile.objects.all().get(email=request.data['email'])
            serializer = self.get_serializer(target_profile, data=request.data, partial=partial)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)
            target_profile.user.set_password(request.data['password'])
            target_profile.user.save()
            target_profile.code = code_generator()
            target_profile.save()
            return Response(status=status.HTTP_202_ACCEPTED)
        except RegistrationProfile.DoesNotExist:
            return Response({"detail": "Your email doesn't match any profile or is invalid."},
                            status=status.HTTP_400_BAD_REQUEST)
