from django.contrib import admin
from .models import Source, Product, Customer, Order, OrderItem


class SourceAdmin(admin.ModelAdmin):
    readonly_fields = ("id",)


class ProductAdmin(admin.ModelAdmin):
    readonly_fields = ("id",)


class CustomerAdmin(admin.ModelAdmin):
    readonly_fields = ("id",)


class OrderAdmin(admin.ModelAdmin):
    readonly_fields = ("id",)


class OrderItemAdmin(admin.ModelAdmin):
    readonly_fields = ("id",)


admin.site.register(Source, SourceAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Customer, CustomerAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
