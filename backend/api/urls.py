from django.urls import path
from . import views

urlpatterns = [
    path("source/", views.SourceList.as_view()),
    path("source/<int:id>/", views.SourceDetail.as_view()),
]
