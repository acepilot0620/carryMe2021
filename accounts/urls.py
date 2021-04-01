from django.urls import path, include
from . import views


urlpatterns = [
    # google 소셜 로그인
    path('google/login/', views.google_login, name='google_login'),
    path('google/callback/', views.google_callback,name='google_callback'),
    path('accounts/google/login/finish/', views.GoogleLogin.as_view(), name='google_login_todjango'),
    # 카카오 소셜 로그인
    path('accounts/kakao/login/', views.kakao_login, name='kakao_login'),
    path('accounts/kakao/callback/', views.kakao_callback, name='kakao_callback'),
    path('accounts/kakao/login/finish/', views.KakaoLogin.as_view(), name='kakao_login_todjango'),
]