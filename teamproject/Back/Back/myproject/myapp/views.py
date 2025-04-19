from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ItemSerializer

class ItemList(APIView):
    def get(self, request):
        items = [
            {"id": 1, "name": "Item 1", "description": "Description 1"},
            {"id": 2, "name": "Item 2", "description": "Description 2"},
        ]
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        print("=== RAW DATA ===")
        print(request.data)  # Postman에서 받은 데이터 확인
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            print("=== VALID DATA ===")
            print(serializer.data)
            return Response({"message": "POST received", "data": serializer.data})
        print("=== ERRORS ===")
        print(serializer.errors)
        return Response(serializer.errors, status=400)