from django.db import models

class Fullname(models.Model):
    name = models.CharField(max_length=35)
    id = models.AutoField(primary_key=True)
    email = models.EmailField()
    phone_number= models.CharField(max_length=11)
    message = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.email