from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import tb_product, tb_product_category, tb_reviews
from .serializers import (
    ProductsSerializer,
    CategorySerializer,
    ProductSerializer,
    ReviewsSerializer,
    ReviewSerializer,
)
from .paginations import ReviewPagination


class ping(APIView):
    def get(self, request):
        return Response({"message": "pong"}, status=status.HTTP_200_OK)


class Products(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = tb_product.objects.all()
    serializer_class = ProductsSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context


class Product(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = tb_product.objects.all()
    serializer_class = ProductSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context


class Categories(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = tb_product_category.objects.all()
    serializer_class = CategorySerializer


# Add Review
class Reviews(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        product_id = request.data.get("product_id")
        rating = request.data.get("rating")
        review = request.data.get("review")

        if not product_id or not rating or not review:
            return Response(
                {"error": "Product ID, Rating and Review are required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        product = tb_product.objects.filter(id=product_id).first()

        if not product:
            return Response(
                {"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND
            )

        if tb_reviews.objects.filter(
            product=product, customer=request.user.customer
        ).exists():
            return Response(
                {"error": "You have already reviewed this product"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        review = tb_reviews.objects.create(
            product=product,
            rating=rating,
            review=review,
            customer=request.user.customer,
        )

        serializer = ReviewsSerializer(review)
        return Response(
            {"message": "Review added", "id": serializer.data["id"]},
            status=status.HTTP_201_CREATED,
        )


class ReviewSet(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = tb_reviews.objects.all()
    serializer_class = ReviewSerializer
    pagination_class = ReviewPagination

    def get_queryset(self):
        product_id = self.kwargs.get("pid")
        return tb_reviews.objects.filter(product_id=product_id)


# Edit review


class Review(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, pk):

        rating = request.data.get("rating")
        review = request.data.get("review")
        review_obj = tb_reviews.objects.filter(
            id=pk, customer=request.user.customer
        ).first()

        if not review_obj:
            return Response(
                {"error": "Review not found"}, status=status.HTTP_404_NOT_FOUND
            )

        if rating:
            review_obj.rating = rating
            review_obj.save()
        if review:
            review_obj.review = review
            review_obj.save()

        serializer = ReviewsSerializer(review_obj)
        return Response(
            {"message": "Review updated", "id": serializer.data["id"]},
            status=status.HTTP_200_OK,
        )
