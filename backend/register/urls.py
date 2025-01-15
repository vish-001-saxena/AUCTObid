from django.urls import path
from .views import RegisterView, loginView

urlpatterns = [
    path('', RegisterView.as_view(), name='register'),
    path('login/', loginView.as_view(), name='login'),
]   # This is the URL configuration for the register app. It includes a single path() function that maps the root URL to the register view. The name argument is optional, but it's a good practice to include it.  