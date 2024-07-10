from rest_framework import serializers
from .models import Source, Product, Customer, Order, OrderItem


class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Source
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        exclude = ["source"]

    def create(self, validated_data):
        return Product.objects.create(**validated_data, source=self.context["source"])


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        exclude = ["order"]
        extra_kwargs = {"updated": {"read_only": True},
                        "created": {"read_only": True}}


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ["id", "customer", "status", "handling_fee",
                  "tax", "updated", "created", "items"]
        extra_kwargs = {"updated": {"read_only": True},
                        "created": {"read_only": True}}

    def create(self, validated_data):
        items_data = validated_data.pop("items")
        order = Order.objects.create(**validated_data)
        for item_data in items_data:
            OrderItem.objects.create(**item_data, order=order)
        return order

    def update(self, instance, validated_data):
        items_data = validated_data.pop('items')
        instance = super().update(instance, validated_data)

        instance.items.all().delete()
        for item_data in items_data:
            OrderItem.objects.create(**item_data, order=instance)

        return instance
