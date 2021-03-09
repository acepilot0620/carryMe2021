from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    #admin
    path('admin/', admin.site.urls),
    path('api-auth/',include('rest_framework.urls')),
    #로그인 관련
    path('accounts/', include('rest_auth.urls')),
    path('accounts/', include('allauth.urls')),
    path('accounts/',include('account.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    import debug_toolbar
    urlpatterns += [
        path("__debug__",include(debug_toolbar.urls)),
    ]


