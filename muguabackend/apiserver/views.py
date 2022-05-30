from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AssignmentSerializer
from .models import Assignment

# Create your views here.

class AssignmentView(viewsets.ModelViewSet):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()