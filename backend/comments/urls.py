from django.urls import path
from comments.views import *

urlpatterns = [
    path('user/<int:user_id>/', ListUsersCommentsView.as_view()),
    path('new/', CreateCommentView.as_view()),
    path('<int:review_id>/', DestroyCommentView.as_view()),
]