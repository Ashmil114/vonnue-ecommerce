from rest_framework import serializers
from .models import tb_product, tb_product_image, tb_product_category, tb_reviews
from django.db.models import Avg, Count
from collections import defaultdict


class CategorySerializer(serializers.ModelSerializer):
    count = serializers.SerializerMethodField()

    class Meta:
        model = tb_product_category
        fields = ["id", "name", "image", "count"]

    def get_count(self, obj):
        return obj.products.count()


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = tb_product_image
        fields = ["image"]

    def get_image(self, obj):
        request = self.context.get("request")
        if request:
            return request.build_absolute_uri(obj.image.url)
        return obj.image.url


class ProductsSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    rating = serializers.SerializerMethodField()
    total_reviews = serializers.SerializerMethodField()

    class Meta:
        model = tb_product
        fields = [
            "id",
            "name",
            "price",
            "mrp",
            "seller",
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


# Product Deatail Section


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = tb_reviews
        fields = [
            "id",
            "rating",
            "review",
            "created",
            "customer",
        ]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        created = instance.created
        if created:
            representation["created"] = created.strftime("%b %d %Y")
        representation["customer"] = (
            instance.customer.name if instance.customer else None
        )
        return representation


class UserReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = tb_reviews
        fields = [
            "id",
            "rating",
            "review",
        ]


class ProductSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    rating = serializers.SerializerMethodField()
    total_reviews = serializers.SerializerMethodField()
    rating_set = serializers.SerializerMethodField()
    reviews = ReviewSerializer(many=True)
    is_reviewed = serializers.SerializerMethodField()

    class Meta:
        model = tb_product
        fields = [
            "id",
            "name",
            "rating",
            "total_reviews",
            "images",
            "price",
            "mrp",
            "description",
            "category",
            "seller",
            "reviews",
            "rating_set",
            "is_reviewed",
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
        return [image["image"] for image in images]

    def get_rating(self, obj):
        reviews = obj.reviews.all()
        if reviews.exists():
            return reviews.aggregate(Avg("rating"))["rating__avg"]
        return 0

    # def get_rating_set(self, obj):
    #     reviews = obj.reviews.all()
    #     r = [
    #         {"rating": 1, "count": 1},
    #         {"rating": 2, "count": 1},
    #         {"rating": 3, "count": 1},
    #         {"rating": 4, "count": 1},
    #         {"rating": 5, "count": 1},
    #     ]
    #     if reviews.exists():
    #         return reviews.values("rating").annotate(count=Count("rating"))
    #     return r

    def get_rating_set(self, obj):
        reviews = obj.reviews.all()
        rating_counts = defaultdict(
            lambda: 0,
            {
                r["rating"]: r["count"]
                for r in reviews.values("rating").annotate(count=Count("rating"))
            },
        )

        r = [
            {"rating": 1, "count": rating_counts[1]},
            {"rating": 2, "count": rating_counts[2]},
            {"rating": 3, "count": rating_counts[3]},
            {"rating": 4, "count": rating_counts[4]},
            {"rating": 5, "count": rating_counts[5]},
        ]

        return r

    def get_is_reviewed(self, obj):
        customer = self.context.get("request").user.customer
        if customer and obj.reviews.filter(customer=customer).exists():
            review = obj.reviews.filter(customer=customer).first()
            return UserReviewSerializer(review).data
            # return True
        return False

    def get_total_reviews(self, obj):
        return obj.reviews.count()


# Reviews


class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = tb_reviews
        fields = ["id"]
