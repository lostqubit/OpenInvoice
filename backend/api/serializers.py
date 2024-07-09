from rest_framework import serializers
from .models import Source, Product, Customer


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
