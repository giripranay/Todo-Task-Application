# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class tasks(models.Model):
    label = models.CharField(max_length = 30,blank=True, null=True)
    status = models.CharField(max_length = 30)
    task = models.CharField(max_length = 200,blank = False)
    date = models.DateField(blank = False)