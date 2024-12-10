"""
URL configuration for medical_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from medical_backend.views import homepage, services, plasticSurgery, faceLift, blepharoplasty, dentistry, clinics, plasticSurgeons, dentists, rhinoplasty, liposuction, abdominoplasty, mamoplasty, lip, brachioplasty, lipofilling, partner

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('', homepage, name='homepage'),
    path('services/', services, name='services'),
    path('plastic-surgery/', plasticSurgery, name='plasticSurgery'),
    path('plastic-surgery/face-lift', faceLift, name='face-lift'),
    path('plastic-surgery/blepharoplasty', blepharoplasty, name='blepharoplasty'),
    path('plastic-surgery/rhinoplasty', rhinoplasty, name='rhinoplasty'),
    path('plastic-surgery/liposuction', liposuction, name='liposuction'),
    path('plastic-surgery/abdominoplasty', abdominoplasty, name='abdominoplasty'),
    path('plastic-surgery/mamoplasty', mamoplasty, name='mamoplasty'),
    path('plastic-surgery/lip', lip, name='lip'),
    path('plastic-surgery/brachioplasty', brachioplasty, name='brachioplasty'),
    path('plastic-surgery/lipofilling', lipofilling, name='lipofilling'),
    path('dentistry/', dentistry, name='dentistry'),
    path('clinics/', clinics, name='clinics'),
    path('plastic-surgeons/', plasticSurgeons, name='plasticSurgeons'),
    path('dentists/', dentists, name='dentists'),
    path('partner/', partner, name='partner')
]
