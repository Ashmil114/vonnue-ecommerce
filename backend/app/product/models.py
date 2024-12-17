from django.db import models
import uuid
from utils.storage import OverwriteStorage
from utils.webp import convert_image_to_webp
import os
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from app.customer.models import tb_customer
from django.core.validators import MinValueValidator, MaxValueValidator


# Image Paths
def category_image_path(instance, filename):
    _, extension = os.path.splitext(filename)
    return f"product/category/{instance.id}{extension}"


def product_image_path(instance, filename):
    _, extension = os.path.splitext(filename)
    return f"product/{instance.product.name}/{instance.id}{extension}"


# Models
class tb_product_category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=250, null=False, blank=False)
    image = models.ImageField(
        upload_to=category_image_path,
        storage=OverwriteStorage(),
        blank=False,
        null=False,
    )

    class Meta:
        verbose_name = "Product Category"
        verbose_name_plural = "Product Categories"

    def delete(self, *args, **kwargs):
        self.image.delete(save=False)
        super().delete(*args, **kwargs)

    def __str__(self):
        return self.name


class tb_product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=250, null=False, blank=False)
    category = models.ForeignKey(
        tb_product_category, on_delete=models.CASCADE, related_name="products"
    )
    seller = models.CharField(max_length=250, null=False, blank=False)
    price = models.DecimalField(
        max_digits=10, decimal_places=2, null=False, blank=False
    )
    mrp = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    description = models.TextField(blank=False, null=False)

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"

    def __str__(self):
        return self.name


class tb_reviews(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(
        tb_product, on_delete=models.CASCADE, related_name="reviews"
    )
    customer = models.ForeignKey(
        tb_customer, on_delete=models.DO_NOTHING, related_name="reviews"
    )
    rating = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)], null=False, blank=False
    )
    review = models.TextField(null=False, blank=False)
    created = models.DateTimeField(auto_now_add=True, null=True)

    class Meta:
        verbose_name = "Review"
        verbose_name_plural = "Reviews"
        unique_together = ("product", "customer")

    def __str__(self):
        return f"{self.product.name}"


class tb_product_image(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(
        tb_product, on_delete=models.CASCADE, related_name="images"
    )
    image = models.ImageField(
        upload_to=product_image_path,
        storage=OverwriteStorage(),
        blank=False,
        null=False,
    )

    class Meta:
        verbose_name = "Product Image"
        verbose_name_plural = "Product Images"

    def __str__(self):
        return self.product.name


# Signals
@receiver(post_delete, sender=tb_product_category)
def delete_product_category_image_file(sender, instance, **kwargs):
    if instance.image:
        instance.image.delete(save=False)


@receiver(pre_save, sender=tb_product_category)
def do(sender, instance, **kwargs):
    convert_image_to_webp(sender, instance, **kwargs)


@receiver(post_delete, sender=tb_product_image)
def delete_product_image_file(sender, instance, **kwargs):
    if instance.image:
        instance.image.delete(save=False)


@receiver(pre_save, sender=tb_product_image)
def do_product_image(sender, instance, **kwargs):
    convert_image_to_webp(sender, instance, **kwargs)
