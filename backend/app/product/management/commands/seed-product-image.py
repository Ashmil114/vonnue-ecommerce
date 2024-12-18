import os
import requests
from django.core.management.base import BaseCommand
from app.product.models import tb_product, tb_product_category, tb_product_image
from django.core.files import File


class Command(BaseCommand):
    help = "Creates application data"

    def handle(self, *args, **kwargs):
        category = tb_product_category.objects.filter(name="Baking material").first()
        if not category:
            self.stdout.write(self.style.ERROR("Category 'Baking materia' not found."))
            return

        products = tb_product.objects.filter(category=category)

        # Directory to save the downloaded images
        placeholders_dir = "media/placeholders/Baking"
        os.makedirs(placeholders_dir, exist_ok=True)

        # Dictionary of sample image URLs based on product names
        sample_images = {}

        for product in products:
            image_url = sample_images.get(product.name)
            if image_url:
                # Download the image
                response = requests.get(image_url)
                if response.status_code == 200:
                    # Save the image to the placeholders directory
                    image_path = os.path.join(
                        placeholders_dir, f"{product.name.lower()}.jpg"
                    )
                    with open(image_path, "wb") as f:
                        f.write(response.content)

                    # Create tb_product_image instance with the saved image
                    with open(image_path, "rb") as f:
                        tb_product_image.objects.create(
                            product=product,
                            image=File(f, name=f"{product.name.lower()}.jpg"),
                        )
                else:
                    self.stdout.write(
                        self.style.WARNING(
                            f"Failed to download image for product: {product.name}"
                        )
                    )
            else:
                self.stdout.write(
                    self.style.WARNING(f"No sample image for product: {product.name}")
                )

        self.stdout.write(self.style.SUCCESS("Product images added successfully."))
