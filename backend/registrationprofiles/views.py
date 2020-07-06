from rest_framework.generics import CreateAPIView, UpdateAPIView


class CreateNewUnvalidatedUserView(CreateAPIView):
    pass


class ValidateNewUserView(UpdateAPIView):
    pass


class CreatePasswordResetRequestView(CreateAPIView):
    pass


class ValidatePasswordResetRequestView(UpdateAPIView):
    pass
