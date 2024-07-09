from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from .models import Source
from .serializers import SourceSerializer


class SourceList(APIView):
    def get(self, request):
        sources = Source.objects.all()
        serializer = SourceSerializer(instance=sources, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SourceSerializer(data=request.POST)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SourceDetail(APIView):
    def get_object(self, id):
        try:
            return Source.objects.get(id=id)
        except:
            raise Http404

    def get(self, request, id):
        source = self.get_object(id=id)
        serializer = SourceSerializer(instance=source)
        return Response(serializer.data)

    def put(self, request, id):
        source = self.get_object(id=id)
        serializer = SourceSerializer(instance=source, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        source = self.get_object(id=id)
        source.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
