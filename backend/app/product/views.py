from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import tb_product, tb_product_category
from .serializers import ProductSerializer, CategorySerializer


class ping(APIView):
    def get(self, request):
        return Response({"message": "pong"}, status=status.HTTP_200_OK)


class Products(generics.ListAPIView):
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
