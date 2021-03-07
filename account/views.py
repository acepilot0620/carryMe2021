from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from .serializers import SignUpSerializer
from .models import Account
# Create your views here.

class SignUpView(CreateAPIView):
    model = Account()
    serializer_class = SignUpSerializer
    permission_classes = [
        AllowAny, 
    ]
