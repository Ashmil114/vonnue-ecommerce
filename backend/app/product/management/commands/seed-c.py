from django.core.management.base import BaseCommand
from app.product.models import tb_product_category


class Command(BaseCommand):
    help = "Creates application data"

    def handle(self, *args, **kwargs):

        categories = [
            {"name": "Baking material", "image": "placeholders/category.png"},
            {"name": "Fruits", "image": "placeholders/category.png"},
            {"name": "Vegetables", "image": "placeholders/category.png"},
            {"name": "Dairy Products", "image": "placeholders/category.png"},
            {"name": "Meat & Poultry", "image": "placeholders/category.png"},
            {"name": "Seafood", "image": "placeholders/category.png"},
            {"name": "Snacks & Beverages", "image": "placeholders/category.png"},
            {"name": "Cereals & Grains", "image": "placeholders/category.png"},
            {"name": "Spices & Condiments", "image": "placeholders/category.png"},
            {"name": "Frozen Foods", "image": "placeholders/category.png"},
            {"name": "Beverages", "image": "placeholders/category.png"},
        ]

        for c in categories:
            tb_product_category.objects.create(**c)
