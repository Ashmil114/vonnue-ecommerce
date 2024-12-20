from django.core.management.base import BaseCommand
from app.product.models import tb_product, tb_reviews
from app.customer.models import tb_customer
from django.utils import timezone
import random


class Command(BaseCommand):
    help = "Creates application data"

    def handle(self, *args, **kwargs):
        products = tb_product.objects.all()
        customers = tb_customer.objects.all()
        good_review = [
            "This product is absolutely fantastic. The quality is outstanding and it exceeded all my expectations. I have recommended it to all my friends and family. The value for money is incredible, and the customer service was excellent throughout the entire process.",
            "Excellent quality and fast shipping! I was pleasantly surprised by how quickly my order arrived and the product itself is top-notch. It works exactly as described and I couldn't be happier with my purchase.",
            "Absolutely love it, highly recommend! This product has made a significant difference in my daily routine. It's efficient, reliable, and very easy to use. I will definitely be purchasing more from this brand in the future.",
            "Fantastic value for the price. I was hesitant at first, but this product proved to be worth every penny. The build quality is superb and it performs exceptionally well.",
            "Exceeded my expectations in every way. From the packaging to the product itself, everything was perfect. The attention to detail is remarkable and it shows that the company truly cares about their customers.",
            "Top-notch service and great product. The team was very helpful and responsive, answering all my queries promptly. The product arrived well-packaged and in perfect condition.",
            "Durable, reliable, and worth every penny. I've been using this product for a while now and it still works like new. It's built to last and I couldn't be more satisfied.",
            "I am extremely satisfied with my purchase. The product is of high quality and exactly as described. The seller was also very accommodating and ensured that the item was delivered on time.",
            "High-quality product and great customer service. The product arrived earlier than expected and it was exactly what I needed. The customer service team was also very helpful and responsive.",
            "Would definitely buy again. Very happy! This product has become a staple in my household. It's reliable, easy to use, and the quality is unmatched. I couldn't be happier with my purchase.",
            "Superb build quality and design. The materials used are of high quality and the product feels very sturdy. It's clear that a lot of thought and care went into the design and manufacturing of this item.",
            "Five stars! A game-changer for me. This product has significantly improved my daily routine and I can't imagine living without it now. The performance is excellent and it's very easy to use.",
            "The best purchase I’ve made this year. This product is worth every cent. The quality and performance are outstanding, and it has exceeded all my expectations.",
            "Worth every dollar, highly recommended. This product has been a great addition to my collection. It's high-quality, reliable, and performs exceptionally well.",
            "Impressive performance and reliability. This product has been very reliable and performs exceptionally well. I've had no issues with it and it's been a great investment.",
            "A perfect addition to my collection. This product fits perfectly with my other items and it's exactly what I was looking for. The quality is excellent and it's very well made.",
            "I can’t recommend this enough! This product is amazing and I can't imagine my life without it. The quality and performance are outstanding and it's worth every penny.",
            "Brilliant! Just what I needed. This product is exactly what I was looking for. It's high-quality, reliable, and performs exceptionally well. I couldn't be happier with my purchase.",
            "Outstanding product and support. The product is high-quality and exactly as described. The customer support team was also very helpful and responsive, ensuring that I had a great experience.",
            "Truly a five-star experience. This product is amazing and has exceeded all my expectations. The quality, performance, and customer service are all top-notch. Highly recommended!",
        ]

        bad_review = [
            "This is the worst product I have ever purchased. The quality is terrible and it broke after just one use. I am extremely disappointed and would not recommend this to anyone. Complete waste of money.",
            "Very disappointed, broke after first use. This product is very poorly made and not at all as described. The materials used are cheap and it feels like it will break any moment.",
            "Poor quality, not as described. The product looks nothing like the pictures and the quality is very poor. It feels very flimsy and I don't think it will last long.",
            "Terrible customer service, never buying again. The product arrived damaged and the customer service team was very unhelpful. I had to go through a lot of hassle to get a refund.",
            "Not worth the money at all. This product is very overpriced for the quality you get. It does not work as advertised and I feel like I have been scammed.",
            "Arrived damaged and unusable. The product was poorly packaged and arrived with several broken parts. It is completely unusable and I am very disappointed with this purchase.",
            "Cheaply made, feels like a waste of money. The product is very cheaply made and does not feel durable at all. I regret buying it and would not recommend it to anyone.",
            "Did not meet my expectations at all. I had high hopes for this product based on the reviews, but it did not live up to the hype. The quality is very poor and it does not work as advertised.",
            "Shipping was slow and the product is flawed. It took a very long time for the product to arrive and when it did, it had several flaws. I am not happy with this purchase.",
            "Extremely dissatisfied with this purchase. The product is very low quality and does not work as described. I feel like I have wasted my money.",
            "Terrible experience, stay away. This product is very poorly made and does not work at all. The customer service team was also very unhelpful.",
            "Quality is subpar and disappointing. The product is very cheaply made and does not feel durable at all. I am very disappointed with this purchase.",
            "Regret buying it, total waste. The product is very poorly made and does not work as described. I regret buying it and would not recommend it to anyone.",
            "Not at all what I expected, very poor. The product looks nothing like the pictures and the quality is very poor. It is very flimsy and does not work well.",
            "Would not recommend to anyone. This product is very low quality and does not work as described. I am very disappointed and would not recommend it to anyone.",
            "Broke within days of using it. The product is very poorly made and broke within a few days of using it. I am very disappointed and regret buying it.",
            "Unreliable and poorly made. The product is very unreliable and does not work as advertised. It is very poorly made and I am very disappointed.",
            "Customer service was unhelpful. The product arrived damaged and the customer service team was very unhelpful. I had to go through a lot of hassle to get a refund.",
            "Simply awful, not worth it. The product is very low quality and does not work as described. I feel like I have wasted my money and would not recommend it to anyone.",
            "Big mistake buying this product. This product is very poorly made and does not work as advertised. I regret buying it and would not recommend it to anyone.",
        ]

        for product in products:
            for customer in customers:
                if tb_reviews.objects.filter(
                    product=product, customer=customer
                ).exists():
                    continue
                rate = random.choice([1, 2, 3, 4, 5])
                comment = ""
                if rate > 3:
                    comment = random.choice(good_review)
                else:
                    comment = random.choice(bad_review)
                review_data = {
                    "product": product,
                    "customer": customer,
                    "rating": rate,
                    "review": comment,
                    "created": timezone.now(),
                }

                tb_reviews.objects.create(**review_data)
