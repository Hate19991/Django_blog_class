from django.contrib import admin
from .models import *

class FullnameAdmin(admin.ModelAdmin):
    list_display = ["name" , "email", "id","phone_number" , "message"]
    search_fields = ["name","email","id","phone_number", "message"]
    readonly_fields = ["id"]
    list_filter = ["id"]
    
admin.site.register(Fullname , FullnameAdmin)