from django.db import models

# Create your models here.

class Party(models.Model):
    name = models.CharField(max_length=100)
    pub_date = models.DateTimeField(auto_now=True)
    capacity = models.PositiveSmallIntegerField()
    how_many_now = models.PositiveSmallIntegerField()
     



    def __str__(self):
        return self.name
