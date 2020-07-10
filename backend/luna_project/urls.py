from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    # API Documentation Generation
    path('backend/api/docs/', include_docs_urls(title='Sagittarius Luna Backend API', public=True, permission_classes=[])),
    # Registration / Password Management
    path('backend/api/auth/', include('registrationprofiles.urls')),
    # Search / Top 4 Restaurant / Categories Management
    path('backend/api/', include('landingpage.urls')),
    # Restaurant Management
    path('backend/api/restaurants/', include('restaurants.urls')),
    # Review Management
    path('backend/api/reviews/', include('reviews.urls')),
    # Comment Management
    path('backend/api/comment/', include('comments.urls')),
    # User Management
    path('backend/api/users/', include('users.urls')),
    # Token Management
    path('backend/api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/api/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
