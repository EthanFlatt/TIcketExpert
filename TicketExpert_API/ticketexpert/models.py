from django.db import models

# Create your models here.

class Venue(models.Model):
    name = models.CharField(max_length = 100)
    location = models.CharField(max_length = 100)
    max_seats = models.IntegerField()
    description = models.TextField()
    photo_url = models.TextField()

    def __str__(self):
        return self.name
    
class Event(models.Model):
    name = models.CharField(max_length = 100)
    performers = models.CharField(max_length = 100)
    venue = models.ForeignKey(Venue, on_delete = models.CASCADE, related_name = 'events')
    date = models.DateField()
    description = models.TextField()
    photo_url = models.TextField()

    def __str__(self):
        return self.name