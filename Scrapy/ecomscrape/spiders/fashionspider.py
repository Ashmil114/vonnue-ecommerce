import scrapy


class FashionspiderSpider(scrapy.Spider):
    name = "fashionspider"
    allowed_domains = ["www.nike.com"]
    start_urls = ["https://www.nike.com/in/w/jordan-shoes-37eefzy7ok"]

    def parse(self, response):
        products = response.css('.product-card')

        data = {}

        for item in products:
            product_name = item.css('.product-card__title::text').get()
            image_url = item.css('.product-card__hero-image::attr(data-image-src)').get()

            product_data = {
                product_name.strip() if product_name else 'N/A': image_url if image_url else 'N/A'
            }
            data.update(product_data)
        
        print("================================================================")
        print(data)
        print("================================================================")