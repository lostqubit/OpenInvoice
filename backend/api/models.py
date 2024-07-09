from django.db import models


class Source(models.Model):
    name = models.CharField(max_length=100)
    commission = models.IntegerField()
    handling_fee = models.IntegerField()
    notional_charge = models.IntegerField()

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    source = models.ForeignKey(Source, on_delete=models.CASCADE)
    unit = models.CharField(max_length=100)
    units_per_case = models.IntegerField()
    price = models.IntegerField()
    price_per_units = models.IntegerField()

    def __str__(self):
        return self.name


class Customer(models.Model):
    alias = models.CharField(max_length=100)
    name = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    pin_code = models.IntegerField(blank=True, null=True)
    id_type = models.CharField(max_length=50)
    id_number = models.CharField(max_length=100, unique=True)
    shipping_partner = models.CharField(max_length=100)

    def __str__(self):
        return self.alias
