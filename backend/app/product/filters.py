from django_filters import rest_framework as filters
from .models import tb_product

from fuzzywuzzy import fuzz


class ProductFilter(filters.FilterSet):
    search = filters.CharFilter(method="filter_by_all_fields")
    category = filters.CharFilter(field_name="category__name", lookup_expr="icontains")

    class Meta:
        model = tb_product
        fields = [
            "search",
            "category",
        ]

    def filter_by_all_fields(self, queryset, name, value):
        results = []
        for product in queryset:
            if (
                fuzz.partial_ratio(value, product.name) >= 70
                or fuzz.partial_ratio(value, str(product.price)) >= 70
            ):
                results.append(product.id)
        return queryset.filter(id__in=results)
