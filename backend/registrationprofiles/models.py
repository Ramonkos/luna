from random import random

from django.db import models
from django.conf import settings


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class RegistrationProfile(models.Model):
    user = models.OneToOneField(
        to=settings.settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='registration_profile',
        blank=True,
        null=True
    )

    email = models.EmailField(
        unique=True
    )

    code = models.CharField(
        help_text='Random code user for registration and password reset',
        max_length=15,
        default=code_generator
    )

    created = models.DateTimeField(
        auto_now_add=True
    )

    updated = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return f'Registration Profile {self.pk}: for Email - {self.email}'
