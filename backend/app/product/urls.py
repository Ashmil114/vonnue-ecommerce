from django.urls import path
from .views import ping, Products, Categories


urlpatterns = [
    path("ping", ping.as_view()),
    path("", Products.as_view()),
    path("categories", Categories.as_view()),
]
