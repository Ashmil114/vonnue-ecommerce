
        
import scrapy

class EcomspiderSpider(scrapy.Spider):
    name = "ecomspider"
    allowed_domains = ["www.luluhypermarket.in"]
    start_urls = ["https://www.luluhypermarket.in/grocery/category/bakery-and-breads?sortedBy=low_to_high_price"]

    def parse(self, response):
        products = response.css('.product-card')
        data = {}
        # data =[]

        for item in products:
            product_name = item.css('a::text').get()
            image_url = item.css('img::attr(src)').get()

            product_data = {
                product_name.strip() if product_name else 'N/A':"https://www.luluhypermarket.in"+image_url if image_url else 'N/A'
            }
            # data.append(product_name)
            data.update(product_data)

        # Print the collected data
        print("-----------------------------------------")
        print(data)
        print("-----------------------------------------")

        # You can also yield the data if needed for further processing
        # for product in data:
        #     yield product

        # Handle pagination if necessary
        # next_page = response.css('.pagination-next a::attr(href)').get()
        # if next_page:
        #     yield response.follow(next_page, self.parse)
