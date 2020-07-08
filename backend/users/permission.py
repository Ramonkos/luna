from rest_framework import permissions


class IsOwnerOrReadOnlyRestaurant(permissions.BasePermission):
    """
    Permission class for Restaurant: RestaurantOwner is able to Patch and Delete Restaurant
    """

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.owner == request.user


class IsOwnerOrReadOnlyCommentsReviews(permissions.BasePermission):
    """
    Permission class for Comments and Reviews
    """

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.author == request.user


class IsOwnerOrReadOnlyUser(permissions.BasePermission):
    """
    Permission class for UserApp
    """

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.user == request.user
