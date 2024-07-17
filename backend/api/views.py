import uuid
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from .models import Source, Product, Customer, Order
from .serializers import SourceSerializer, ProductSerializer, CustomerSerializer, OrderSerializer


class SourceList(APIView):
    def get(self, request):
        sources = Source.objects.all().order_by("-created")
        serializer = SourceSerializer(instance=sources, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SourceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SourceDetail(APIView):
    def get_object(self, s_id):
        try:
            return Source.objects.get(id=s_id)
        except:
            raise Http404

    def get(self, request, s_id):
        source = self.get_object(s_id=s_id)
        serializer = SourceSerializer(instance=source)
        return Response(serializer.data)

    def put(self, request, s_id):
        source = self.get_object(id=s_id)
        serializer = SourceSerializer(instance=source, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, s_id):
        source = self.get_object(id=s_id)
        source.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ProductList(APIView):
    def get_source(self, s_id):
        try:
            return Source.objects.get(id=s_id)
        except:
            raise Http404

    def get(self, request, s_id):
        source = self.get_source(s_id=s_id)
        products = source.product_set.all()
        serializer = ProductSerializer(instance=products, many=True)
        return Response(serializer.data)

    def post(self, request, s_id):
        source = self.get_source(s_id=s_id)
        serializer = ProductSerializer(
            data=request.POST, context={"source": source})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetail(APIView):
    def get_product(self, p_id):
        try:
            return Product.objects.get(id=p_id)
        except:
            raise Http404

    def get(self, request, s_id, p_id):
        product = self.get_product(p_id=p_id)
        serializer = ProductSerializer(instance=product)
        return Response(serializer.data)

    def put(self, request, s_id, p_id):
        product = self.get_product(p_id=p_id)
        serializer = ProductSerializer(instance=product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, s_id, p_id):
        product = self.get_product(p_id=p_id)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CustomerList(APIView):
    def get(self, request):
        customers = Customer.objects.all()
        serializer = CustomerSerializer(instance=customers, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CustomerSerializer(data=request.POST)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomerDetail(APIView):
    def get_customer(self, c_id):
        try:
            return Customer.objects.get(id=c_id)
        except:
            raise Http404

    def get(self, request, c_id):
        customer = self.get_customer(c_id=c_id)
        serializer = CustomerSerializer(instance=customer)
        return Response(serializer.data)

    def put(self, request, c_id):
        customer = self.get_customer(c_id=c_id)
        serialzier = CustomerSerializer(instance=customer, data=request.data)
        if serialzier.is_valid():
            serialzier.save()
            return Response(serialzier.data)
        return Response(serialzier.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderCreate(APIView):
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializer(instance=orders, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderList(APIView):
    def get_order(self, o_id):
        try:
            return Order.objects.get(id=o_id)
        except:
            raise Http404

    def get(self, request, o_id):
        order = self.get_order(o_id=o_id)
        serializer = OrderSerializer(instance=order)
        return Response(serializer.data)

    def put(self, request, o_id):
        order = self.get_order(o_id=o_id)
        serializer = OrderSerializer(instance=order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errros, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, o_id):
        order = self.get_order(o_id=o_id)
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
