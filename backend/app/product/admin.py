from django.contrib import admin
from .models import tb_product_category, tb_product, tb_product_image, tb_reviews


class CategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "image")
    list_editable = ("image",)


class ProductAdmin(admin.ModelAdmin):
    list_editable = ("category",)
    list_display = ("name", "category")


admin.site.register(tb_product_category, CategoryAdmin)
admin.site.register(tb_product, ProductAdmin)
admin.site.register(tb_product_image)
admin.site.register(tb_reviews)
