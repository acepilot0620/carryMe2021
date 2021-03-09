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

    password = models.CharField('비밀번호',max_length=128)
    nickname = models.CharField(verbose_name="닉네임", max_length=50,unique=True)
    school = models.CharField(verbose_name="학교 이름", max_length=50)
    game = models.ForeignKey(User_Game, verbose_name="게임", on_delete=models.CASCADE)
    email = models.EmailField(verbose_name="이메일")
    age = models.PositiveSmallIntegerField()
    sex = models.CharField(verbose_name="성별",max_length=20)

    def __str__(self):
        return self.nickname
    
    
    
