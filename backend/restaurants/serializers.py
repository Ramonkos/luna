from rest_framework import serializers
from comments.serializers import CommentSerializer
from restaurants.models import Restaurant
from reviews.models import Review
from users.serializers import UserSerializer


class ReviewForRestaurantSerializer(serializers.ModelSerializer):
    author = UserSerializer(
        required=False,
        read_only=True,
    )

    comments = CommentSerializer(
        required=False,
        read_only=True,
        many=True,
    )

    amount_of_likes = serializers.SerializerMethodField()

    def get_amount_of_likes(self, obj):
        return len(obj.users_who_liked.all())

    amount_of_comments = serializers.SerializerMethodField()

    def get_amount_of_comments(self, obj):
        return len(obj.comments.all())

    logged_in_user_is_review_author = serializers.SerializerMethodField()

    def get_logged_in_user_is_review_author(self, obj):
        return self.context['request'].user == obj.author

    class Meta:
        model = Review
        fields = ['id', 'text_content', 'rating', 'created', 'author', 'comments', 'restaurant_review_about',
                  'users_who_liked', 'amount_of_likes', 'amount_of_comments', 'logged_in_user_is_review_author']


class RestaurantSerializer(serializers.ModelSerializer):

    owner = UserSerializer(
        required=False,
        read_only=True
    )

    restaurant_reviews = ReviewForRestaurantSerializer(
        required=False,
        read_only=True,
        many=True,
    )

    amount_of_reviews = serializers.SerializerMethodField()

    def get_amount_of_reviews(self, obj):
        return len(obj.restaurant_reviews.all())

    logged_in_user_is_restaurant_owner = serializers.SerializerMethodField()

    def get_logged_in_user_is_restaurant_owner(self, obj):
        return self.context['request'].user == obj.owner

    review_average = serializers.SerializerMethodField()

    def get_review_average(self, obj):
        if len(obj.restaurant_reviews.all()):
            total_rating = 0
            for review in obj.restaurant_reviews.all():
                total_rating += review.rating
            return total_rating / len(obj.restaurant_reviews.all())
        return 0

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'category', 'country', 'street', 'city', 'zip', 'website', 'phone', 'email',
                  'opening_hours', 'price_level', 'restaurant_image', 'restaurant_banner', 'take_reservations',
                  'delivery', 'take_away', 'wifi', 'owner', 'restaurant_reviews', 'logged_in_user_is_restaurant_owner',
                  'created','amount_of_reviews', 'review_average']


class CreateRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'category', 'country', 'street', 'city', 'zip', 'website', 'phone', 'email',
                  'opening_hours', 'price_level', 'restaurant_image', 'restaurant_banner', 'owner']
