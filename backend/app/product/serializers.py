from rest_framework import serializers
from .models import tb_product, tb_product_image, tb_product_category
from django.db.models import Avg


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = tb_product_category
        fields = "__all__"


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = tb_product_image
        fields = ["image"]

    def get_image(self, obj):
        request = self.context.get("request")
        if request:
            return request.build_absolute_uri(obj.image.url)
        return obj.image.url


class ProductSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    rating = serializers.SerializerMethodField()
    total_reviews = serializers.SerializerMethodField()

    class Meta:
        model = tb_product
        fields = [
            "id",
            "name",
            "price",
            "description",
            "category",
            "images",
            "rating",
            "total_reviews",
        ]
        depth = 1

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["category"] = instance.category.name

        return representation

    def get_images(self, obj):
        images = ProductImageSerializer(
            obj.images.all(), many=True, context=self.context
        ).data
        return [image["image"] for image in images[0:2]]

    def get_rating(self, obj):
        reviews = obj.reviews.all()
        if reviews.exists():
            return int(reviews.aggregate(Avg("rating"))["rating__avg"])
        return 0

    def get_total_reviews(self, obj):
        return obj.reviews.count()
