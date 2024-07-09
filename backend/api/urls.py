from django.urls import path
from . import views

urlpatterns = [
    path("source/", views.SourceList.as_view()),
    path("source/<int:s_id>/", views.SourceDetail.as_view()),
    path("source/<int:s_id>/products/", views.ProductList.as_view()),
    path("source/<int:s_id>/products/<int:p_id>/",
         views.ProductDetail.as_view()),
    path("customer/", views.CustomerList.as_view()),
    path("customer/<int:c_id>/", views.CustomerDetail.as_view()),
]
