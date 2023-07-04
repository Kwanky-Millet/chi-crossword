from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Crossword
from .serializers import *

@api_view(['GET', 'POST', 'DELETE'])
def crossword_list(request):
    if request.method == 'GET':
        data = Crossword.objects.all()

        serializer = CrosswordSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CrosswordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        Crossword.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT', 'DELETE'])
def crossword_detail(request, pk):
    try:
        crossword = Crossword.objects.get(pk=pk)
    except Crossword.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = CrosswordSerializer(crossword, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Crossword.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)