from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView


class CreateReviewView(CreateAPIView):
    pass


class ListReviewCommentsView(ListAPIView):
    pass


class ListUserReviewsView(ListAPIView):
    pass


class RetrieveUpdateDestroyReviewView(RetrieveUpdateDestroyAPIView):
    pass


class ToggleLikeReviewView(GenericAPIView):
    pass


class ListUserLikedReviewsView(ListAPIView):
    pass


class ListUserCommentsView(ListAPIView):
    pass
