from django.db import models
import uuid
from django.contrib.auth.models import User
from django.core.validators import EmailValidator
from django.utils import timezone
from pytz import timezone as pytz_timezone


class tb_customer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="customer", editable=False
    )
    name = models.CharField(max_length=250, null=False, blank=False)
    email = models.EmailField(
        validators=[EmailValidator(message="Enter a valid email address.")],
        blank=True,
        null=True,
    )
    created = models.DateTimeField(auto_now_add=True, null=True)

    class Meta:
        verbose_name = "Customer"
        verbose_name_plural = "Customers"

    def save(self, *args, **kwargs):
        ist = pytz_timezone("Asia/Kolkata")
        self.created = timezone.now().astimezone(ist)
        super(tb_customer, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
