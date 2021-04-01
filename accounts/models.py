from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractUser
from game.models import User_Game

from .managers import CustomUserManager

# Create your models here.

class CustomUser(AbstractUser):

    username = None
    email = models.EmailField(_('이메일'),unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    password = models.CharField('비밀번호',max_length=128,null=True,blank=True)
    nickname = models.CharField(verbose_name="닉네임", max_length=50,unique=True,null=True,blank=True)
    school = models.CharField(verbose_name="학교 이름", max_length=50,null=True,blank=True)
    game = models.ForeignKey(User_Game, verbose_name="게임", on_delete=models.CASCADE,null=True,blank=True)
    age = models.IntegerField(null=True,blank=True)
    sex = models.CharField(verbose_name="성별",max_length=20,null=True,blank=True)

    def __str__(self):
        return self.nickname
    
    
    
