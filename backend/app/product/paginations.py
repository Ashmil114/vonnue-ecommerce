from rest_framework.pagination import CursorPagination
from rest_framework.response import Response
from urllib.parse import urlparse, parse_qs


class CustomPagination(CursorPagination):
    def extract_cursor_value(self, link):
        if link:
            url_parts = urlparse(link)
            query_params = parse_qs(url_parts.query)
            return query_params.get("cursor", [None])[0]
        return None

    def get_paginated_response(self, data):
        return Response(
            {
                "next": self.extract_cursor_value(self.get_next_link()),
                "previous": self.extract_cursor_value(self.get_previous_link()),
                "results": data,
            }
        )


class ReviewPagination(CustomPagination):
    page_size = 1
    page_size_query_param = "page_size"
    max_page_size = 100
    ordering = "id"
