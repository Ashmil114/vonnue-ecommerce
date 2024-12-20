from django.core.management.base import BaseCommand
from app.product.models import tb_product, tb_product_category


class Command(BaseCommand):
    help = "Creates application data"

    def handle(self, *args, **kwargs):
        # Change Category
        category = tb_product_category.objects.filter(name="Biscuits & Chocolates")
        category = category.first()

        products = [
            # sample
            {
                "name": "Malkist Cheese Crackers Biscuits 138gm",
                "category": category,
                "seller": "MALKIST",
                "price": 51,
                "mrp": 60,
                "description": "Malkist Cheese Crackers Biscuits 138gm Pack Sizes138g",
            },
        ]

        for c in products:
            tb_product.objects.create(**c)
