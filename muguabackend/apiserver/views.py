from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AssignmentSerializer, DiscussionSerializer
from .models import Assignment, Discussion

# Create your views here.

class AssignmentView(viewsets.ModelViewSet):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()

class DiscussionView(viewsets.ModelViewSet):
    serializer_class = DiscussionSerializer
    queryset = Discussion.objects.all()