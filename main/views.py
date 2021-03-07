from django.shortcuts import render
from .serializers import PartySerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from .models import Party
# Create your views here.


class PartyViewSet(ModelViewSet):
    queryset = Party.objects.all()
    serializer_class = PartySerializer
    

