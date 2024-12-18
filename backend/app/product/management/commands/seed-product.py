from django.core.management.base import BaseCommand
from app.product.models import tb_product, tb_product_category


class Command(BaseCommand):
    help = "Creates application data"

    def handle(self, *args, **kwargs):
        category = tb_product_category.objects.filter(name="Baking material")
        category = category.first()

        products = []

        for c in products:
            tb_product.objects.create(**c)
