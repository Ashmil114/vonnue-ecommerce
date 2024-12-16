from django.contrib import admin
from .models import tb_product_category, tb_product, tb_product_image, tb_reviews

admin.site.register(tb_product_category)
admin.site.register(tb_product)
admin.site.register(tb_product_image)
admin.site.register(tb_reviews)
