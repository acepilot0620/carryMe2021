from django.shortcuts import redirect
from requests.sessions import Request
from accounts.models import CustomUser
from django.contrib.auth import login
from django.conf import settings
from rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google import views as google_view
from allauth.socialaccount.providers.kakao import views as kakao_view
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.http import JsonResponse
import requests

BASE_URL = 'http://localhost:8000/'
GOOGLE_CALLBACK_URI = BASE_URL + 'accounts/google/callback/'
KAKAO_CALLBACK_URI = BASE_URL + 'accounts/kakao/callback/'

class GooGleException(Exception):
    pass

def google_login(request):
    """
    Code Request
    """
    scope = "https://www.googleapis.com/auth/userinfo.email"
    client_id = getattr(settings, "SOCIAL_AUTH_GOOGLE_CLIENT_ID")
    return redirect(f"https://accounts.google.com/o/oauth2/v2/auth?client_id={client_id}&response_type=code&redirect_uri={GOOGLE_CALLBACK_URI}&scope={scope}")
    
def google_callback(request):
    try:
        client_id = getattr(settings, "SOCIAL_AUTH_GOOGLE_CLIENT_ID")
        client_secret = getattr(settings, "SOCIAL_AUTH_GOOGLE_SECRET")
        code = request.GET.get('code')
        """
        Access Token Request
        """
        token_request = requests.post(f"https://oauth2.googleapis.com/token?client_id={client_id}&client_secret={client_secret}&code={code}&grant_type=authorization_code&redirect_uri={GOOGLE_CALLBACK_URI}")
        token_request_json = token_request.json()
        error = token_request_json.get("error")
        if error is not None:
            return GooGleException()
        access_token = token_request_json.get('access_token')
        """
        Login Request
        """
        data= {'access_token' : access_token, 'code' : code}
        print(data)
        accept = requests.post(f"{BASE_URL}accounts/google/login/finish/", data=data)
        accept_json = accept.json()
        error = accept_json.get("error")
        if error is not None:
            return GooGleException()
        return JsonResponse(accept_json)
    except GooGleException:
        return redirect('/error')
class GoogleLogin(SocialLoginView):
    adapter_class = google_view.GoogleOAuth2Adapter
    callback_url = GOOGLE_CALLBACK_URI
    client_class = OAuth2Client

class KaKaoException(Exception):
    pass
def kakao_login(request):
    rest_api_key = getattr(settings, 'KAKAO_REST_API_KEY')
    return redirect(
        f"https://kauth.kakao.com/oauth/authorize?client_id={rest_api_key}&redirect_uri={KAKAO_CALLBACK_URI}&response_type=code"
    )
def kakao_callback(request):
    try:
        rest_api_key =  getattr(settings, 'KAKAO_REST_API_KEY')
        redirect_uri = KAKAO_CALLBACK_URI       
        code = request.GET.get("code")
        token_request = requests.get(f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={rest_api_key}&redirect_uri={redirect_uri}&code={code}")
        token_request_json = token_request.json()
        error = token_request_json.get("error")
        if error is not None:
            raise KaKaoException()
        access_token = token_request_json.get("access_token")
        # profile_request = requests.get("https://kapi.kakao.com/v2/user/me", headers={"Authorization" : f"Bearer {access_token}"})
        # profile_json = profile_request.json()
        # kakao_account = profile_json.get('kakao_account')
        # profile = kakao_account.get("profile")
        # nickname = profile.get("nickname")
        data = {'access_token' : access_token, 'code' : code}
        accept = requests.post(
            f"{BASE_URL}accounts/kakao/login/finish/", data=data
        )
        accept_json = accept.json()
        error = accept_json.get("error")
        if error is not None:
            raise KaKaoException()
        return JsonResponse(accept_json)
    except KaKaoException:
        return redirect('/error')
    
class KakaoLogin(SocialLoginView):
    adapter_class = kakao_view.KakaoOAuth2Adapter
    client_class = OAuth2Client
    callback_url = KAKAO_CALLBACK_URI
