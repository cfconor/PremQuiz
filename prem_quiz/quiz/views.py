from django.shortcuts import render
from django.http import HttpResponse

from .models import Player, PlayerForm

# Create your views here.

def index(request):
    player_list = Player.objects.order_by('-id')[:5]

    context = {
        'player_list': player_list,
    }

    return render(request, 'quiz/index.html', context)


def add_player(request):
    context = {}
    context['form']= PlayerForm()

    
    return render(request, "quiz/add_player.html", context)