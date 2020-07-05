from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.conf import settings


class Restaurant(models.Model):
    RESTAURANT_CATEGORY_CHOICES = [
        ('1', 'Burgers'),
        ('2', 'Chinese'),
        ('3', 'Italian'),
        ('4', 'Japanese'),
        ('5', 'Mexican'),
        ('6', 'Thai'),
        ('7', 'Indian'),
        ('8', 'Greek'),
        ('9', 'Swiss'),
        ('10', 'Pizza'),
        ('11', 'Vegetarian'),
        ('12', 'Other')
    ]

    name = models.CharField(
        max_length=200
    )

    category = models.IntegerField(
        choices=RESTAURANT_CATEGORY_CHOICES,
        validators=[MinValueValidator(1), MaxValueValidator(12)],
        default=12
    )

    country = models.CharField(
        max_length=200
    )

    street = models.CharField(
        max_length=200
    )

    city = models.CharField(
        max_lenth=200
    )

    zip = models.CharField(
        max_length=5
    )

    website = models.CharField(
        blank=True,
        max_length=200,
    )

    phone = models.CharField(
        blank=True,
        max_length=12,
    )

    email = models.CharField(
        blank=True,
        max_length=200,
    )

    opening_hours = models.CharField(
        max_length=200,
    )

    price_level = models.IntegerField(
        default=3,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )

    restaurant_image = models.ImageField(
        null=True,
        blank=True
    )

    take_reservations = models.BooleanField(
        default=False
    )

    delivery = models.BooleanField(
        default=False
    )

    take_away = models.BooleanField(
        default=False
    )

    wifi = models.BooleanField(
        default=False
    )

    created = models.DateTimeField(
        auto_now_add=True
    )

    updated = models.DateTimeField(
        auto_now=True
    )

    owner = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name='user_restaurants',
        null=True
    )

    def __str__(self):
        return f'Restaurant {self.pk}: Name - {self.name}'
