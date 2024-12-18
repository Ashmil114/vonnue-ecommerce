from django.core.management.base import BaseCommand
from app.product.models import tb_product_category
import os
import requests
from django.core.files import File


class Command(BaseCommand):
    help = "Creates application data"

    def handle(self, *args, **kwargs):

        categories = [
            {
                "name": "Fruits & Vegetables",
                "image": "https://luluindia-prod-assets.s3.ap-south-1.amazonaws.com/pims/grocery/category/Fruits & Vegetables-image-1718719080798.webp",
            },
        ]

        placeholders_dir = "media/placeholders/category"
        os.makedirs(placeholders_dir, exist_ok=True)

        for c in categories:
            image_url = c.get("image")
            if image_url:
                # Download the image
                response = requests.get(image_url)
                if response.status_code == 200:
                    # Save the image to the placeholders directory
                    image_path = os.path.join(
                        placeholders_dir, f"{c.get('name').lower()}.jpg"
                    )
                    with open(image_path, "wb") as f:
                        f.write(response.content)

                    # Create tb_product_category instance with the saved image
                    with open(image_path, "rb") as f:
                        tb_product_category.objects.create(
                            name=c.get("name"),
                            image=File(f, name=f"{c.get('name').lower()}.jpg"),
                        )
                else:
                    self.stdout.write(
                        self.style.WARNING(
                            f"Failed to download image for product: {c.get('name')}"
                        )
                    )
            tb_product_category.objects.create(**c)
