from django.urls import path
from .views import registerView, loginView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path("signup", registerView.as_view()),
    path("login", loginView.as_view()),
    path("token/refresh", TokenRefreshView.as_view(), name="token_refresh"),
]
