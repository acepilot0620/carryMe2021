from rest_framework import serializers
from .models import CustomUser

class SignUpSerializer(serializers.ModelField):
    class Meta:
        model = CustomUser
        fields = ['__all__']
