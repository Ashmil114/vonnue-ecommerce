from django.urls import path
from .views import (
    ping,
    Products,
    Product,
    Categories,
    Reviews,
    Review,
    ReviewSet,
    DeleteReview,
)


urlpatterns = [
    path("ping", ping.as_view()),
    path("", Products.as_view()),
    path("product/<pk>", Product.as_view()),
    path("categories/", Categories.as_view()),
    path("reviews/", Reviews.as_view()),
    path("reviewset/<pid>", ReviewSet.as_view()),
    path("reviews/<pk>", Review.as_view()),
    path("reviews/delete/<pk>", DeleteReview.as_view()),
]
