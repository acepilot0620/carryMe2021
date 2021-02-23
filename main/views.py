from django.shortcuts import render
from .serializers import PartySerializer
from rest_framework.viewsets import ModelViewSet
from .models import Party
# Create your views here.


class PartyViewSet(ModelViewSet):
    queryset = Party.objects.all()
    serializer_class = PartySerializer
    
