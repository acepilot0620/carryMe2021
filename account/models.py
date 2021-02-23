from django.db import models
from django.contrib.auth.models import User
from game.models import User_Game

# Create your models here.

class Account(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    nickname = models.CharField(verbose_name="닉네임", max_length=50,unique=True)
    school = models.CharField(verbose_name="학교 이름", max_length=50)
    game = models.ForeignKey(User_Game, verbose_name="게임", on_delete=models.CASCADE)
    email = models.EmailField(verbose_name="이메일")
    age = models.PositiveSmallIntegerField()
    sex = models.CharField(verbose_name="성별",max_length=20)
    
    
