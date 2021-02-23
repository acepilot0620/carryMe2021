from rest_framework.serializers import ModelSerializer
from .models import Party


class PartySerializer(ModelSerializer):
    class Meta:
        model = Party
        fields = '__all__'