# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2020-06-05 17:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todoApp', '0002_auto_20200605_1729'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tasks',
            name='label',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
