# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2020-06-04 09:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='tasks',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label', models.CharField(max_length=30)),
                ('status', models.CharField(max_length=30)),
                ('task', models.CharField(max_length=200)),
                ('date', models.DateField()),
            ],
        ),
    ]