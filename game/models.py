from django.db import models

# Create your models here.

class User_Game(models.Model):
    game_name = models.CharField(verbose_name="게임명",max_length=100)
    game_id = models.CharField(verbose_name="게임내 유저명",max_length=100)
    tier = models.CharField(verbose_name="티어",max_length=100)
    
    def __str__(self):
        return self.game_name
    
