from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.conf import settings

from restaurants.models import Restaurant


class Review(models.Model):
    text_content = models.TextField()

    rating = models.IntegerField(
        default=0,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )

    created = models.DateTimeField(
        auto_now_add=True
    )

    updated = models.DateTimeField(
        auto_now=True
    )

    author = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name='user_reviews',
        null=True,
    )

    restaurant_review_about = models.ForeignKey(
        to=Restaurant,
        on_delete=models.CASCADE,
        related_name='restaurant_reviews'
    )

    users_who_liked = models.ManyToManyField(
        to=settings.AUTH_USER_MODEL,
        related_name='liked_reviews',
        blank=True,
        null=True,
    )

    def __str__(self):
        return f'Review {self.pk}: User - {self.author} about Restaurant - {self.restaurant_review_about}'
