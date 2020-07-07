from rest_framework import serializers
from restaurants.models import Restaurant


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['category']
