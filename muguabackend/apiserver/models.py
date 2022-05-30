from django.db import models

# Create your models here.

class Assignment(models.Model):
    title = models.CharField(max_length=120)
    
    max_grade_pts = models.IntegerField(default=100)
    description = models.TextField()

    def __str__(self):
        return self.title