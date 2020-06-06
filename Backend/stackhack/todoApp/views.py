# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
from django.http import HttpResponse
from .models import tasks
import json,ast

def index(request):
    task = tasks.objects.all().values()
    task_list = list(task)
    return JsonResponse(task_list, safe=False)

@csrf_exempt
def createTask(request):
    if request.method=='POST':
        data = json.loads(request.body)
        if not data['label']:
            data['label']=""
        received_json_data=ast.literal_eval(json.dumps(data))
        label = received_json_data['label']
        status = received_json_data['status']
        task = received_json_data['task']
        date = received_json_data['date']
       
        if 'id' in received_json_data:
            tasks.objects.filter(id=received_json_data['id']).update(label=label,status=status,task=task,date=date)
            task = tasks.objects.all().values()
            task_list = list(task)
            return JsonResponse(task_list, safe=False)
        else:
            entry = tasks(label=label,status=status,task=task,date=date)
            entry.save()
            task = tasks.objects.all().values()
            task_list = list(task)
            return JsonResponse(task_list, safe=False)
