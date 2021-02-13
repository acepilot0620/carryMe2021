from django.contrib import admin
from .models import Party

# Register your models here.
@admin.register(Party)

class PartyAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_display = ['name','pub_date','capacity','how_many_now']
    list_display_link = ['name']
