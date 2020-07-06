from rest_framework import serializers
from restaurants.models import Restaurant
from users.serializers import UserSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    owner = UserSerializer(
        required=False,
        read_only=True
    )

    amount_of_reviews = serializers.SerializerMethodField()

    def get_amount_of_reviews(self, obj):
        return len(obj.restaurant_reviews.all())

    logged_in_user_is_restaurant_owner = serializers.SerializerMethodField()

    def get_logged_in_user_is_restaurant_owner(self, obj):
        return self.context['request'].user == obj.owner

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'category', 'country', 'street', 'city', 'zip', 'website', 'phone', 'email',
                  'opening_hours', 'price_level', 'restaurant_image', 'take_reservations', 'delivery', 'take_away',
                  'wifi', 'owner', 'restaurant_reviews', 'logged_in_user_is_restaurant_owner', 'created']
