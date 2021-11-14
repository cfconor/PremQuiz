from django.db import models
from django.forms import ModelForm

# Create your models here.

class Player(models.Model):
    player_firstname = models.CharField(max_length=200)
    player_lastname = models.CharField(max_length=200)
    pub_date = models.DateTimeField().auto_now_add

class PlayerForm(ModelForm):
    class Meta:
        model = Player
        fields = ['player_firstname','player_lastname']