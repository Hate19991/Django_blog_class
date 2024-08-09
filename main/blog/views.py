from django.shortcuts import render
from django.conf.urls.static import static
from .models import *
from django.utils.datastructures import MultiValueDictKeyError
def home(request):
    try:
        name = Fullname.objects.all()
        phone_number_view = request.POST["number"]
        full_name_view = request.POST["name"]
        email_view = request.POST["email"]
        # message_view = request.POST["message"]
        info = Fullname(name=full_name_view , email=email_view , phone_number=phone_number_view)
        info.save()
    except MultiValueDictKeyError:
        name = Fullname.objects.all()
        phone_number_view = request.POST["number"]
        full_name_view = request.POST["name"]
        email_view = request.POST["email"]
        # message_view = request.POST["message"]
        info = Fullname(name=full_name_view , email=email_view , phone_number=phone_number_view)
        info.save()
        print(info)
        
    dictionaries = {"names": name}
    return render(request , "index.html", dictionaries)