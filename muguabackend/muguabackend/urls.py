from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from apiserver import views

router = routers.DefaultRouter()
router.register(r'assignments', views.AssignmentView, 'assignment')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]