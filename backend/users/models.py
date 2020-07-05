from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField
from django.db import models


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)

    location = models.CharField(
        blank=True,
        max_length=500,
    )

    description = models.TextField(
        blank=True
    )

    phone = models.CharField(
        blank=True,
        max_length=12,
    )

    things_user_loves = ArrayField(
        models.CharField(
            max_length=200),
        default=list,
        blank=True,
    )

    avatar = models.ImageField(
        null=True,
        blank=True,
    )

    banner = models.ImageField(
        null=True,
        blank=True,
    )

    def __str__(self):
        return f'User #{self.id} {self.email}'
