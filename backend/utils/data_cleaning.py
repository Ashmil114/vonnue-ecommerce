# Cleaning Scraping Data for Dummy Products
# import pprint

products = [
    # Scraped Data Structure
    {
        "id": "669f8cec3a14b37d50ac28b2",
        "discount": "15% Off",
        "variants": [{"name": "Pack Sizes", "value": "138g"}],
        "max_qty": 6,
        "sku": "1015903",
        "group_name": "",
        "min_qty": 1,
        "is_express": True,
        "sale_price": "₹51.00",
        "product_slug": "malkist-cheese-crackers-biscuits-138gm",
        "source": "grocery",
        "stock": 48,
        "thumbnail": "https://luluindia-prod-assets.s3.ap-south-1.amazonaws.com/pims/grocery/products/1015903_1.png",
        "brand_name": "MALKIST",
        "unit": "EA",
        "qty": 0,
        "title": "Malkist Cheese Crackers Biscuits 138gm",
        "mrp_price": "₹60.00",
        "product_type": "Veg",
        "is_cart": 0,
        "is_favourite": 0,
        "combinations": [],
        "ratings": 0,
        "warehouse_code": "9010",
        "is_combo": False,
        "highlights": [],
    },
]


clean_data = []
image_data = {}

for item in products:
    image_data[item.get("title", "N/A")] = item.get("thumbnail", "N/A")

for item in products:
    clean_item = {}
    clean_item["name"] = item.get("title", "N/A")
    clean_item["category"] = "category-change"
    clean_item["seller"] = item.get("brand_name", "N/A")
    clean_item["price"] = int(item.get("sale_price", 0)[1:-3])
    clean_item["mrp"] = int(item.get("mrp_price", 0)[1:-3])
    clean_item["description"] = (
        item.get("title", "N/A")
        + " "
        + item.get("variants")[0]["name"]
        + ""
        + item.get("variants")[0]["value"]
    )

    clean_data.append(clean_item)
print("================================================================")
print(clean_data)
# print(image_data)
print("================================================================")

# print("\nImage Data:")
# pprint.pprint(image_data)
