from django.db import models
from django.conf import settings
from reviews.models import Review


class Comment(models.Model):
    text_content = models.TextField()

    created = models.DateTimeField(
        auto_now_add=True,
    )

    updated = models.DateTimeField(
        auto_now=True,
    )

    author = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name='user_comments',
        null=True,
        blank=True,
    )

    restaurant_review = models.ForeignKey(
        to=Review,
        on_delete=models.CASCADE,
        related_name='comments',
    )

    users_who_likes = models.ManyToManyField(
        to=settings.AUTH_USER_MODEL,
        related_name='liked_comments',
    )

    def __str__(self):
        return f'Comment {self.pk}'
