from django.urls import path
from .views import ping, Products, Product, Categories, Reviews, Review


urlpatterns = [
    path("ping", ping.as_view()),
    path("", Products.as_view()),
    path("<pk>", Product.as_view()),
    path("categories", Categories.as_view()),
    path("reviews/", Reviews.as_view()),
    path("reviews/<pk>", Review.as_view()),
]
