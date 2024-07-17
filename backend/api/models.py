from django.db import models


class Source(models.Model):
    name = models.CharField(max_length=100)
    commission = models.IntegerField()
    handling_fee = models.IntegerField()
    notional_charge = models.IntegerField()
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    source = models.ForeignKey(Source, on_delete=models.CASCADE)
    unit = models.CharField(max_length=100)
    units_per_qty = models.IntegerField()
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


class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)
    status = models.CharField(max_length=100)
    handling_fee = models.IntegerField()
    tax = models.IntegerField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.customer.name}-{self.id}'


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order, related_name="items", on_delete=models.CASCADE)
    source = models.ForeignKey(Source, on_delete=models.PROTECT)
    product_name = models.CharField(max_length=150)
    units = models.CharField(max_length=100)
    units_per_qty = models.IntegerField()
    quantity = models.IntegerField()
    cost_price = models.IntegerField()
    sell_price = models.IntegerField()
    price_per = models.IntegerField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.order.customer.name}-{self.order.id}:{self.product_name}'
