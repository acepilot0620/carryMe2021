from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include


urlpatterns = [
    path('api-auth/',include('rest_framework.urls')),
    path('accounts/',include('allauth.urls')) #소셜로그인 
    path('admin/', admin.site.urls),
    path('',include('main.urls')),
    path('account/',include('account.urls')),
    path('game/',include('game.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    import debug_toolbar
    urlpatterns += [
        path("__debug__",include(debug_toolbar.urls)),
    ]


