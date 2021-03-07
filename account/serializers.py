from rest_framework import serializers
from .models import Account

class SignUpSerializer(serializers.ModelField):
    class Meta:
        model = Account
        fields = ['__all__']
