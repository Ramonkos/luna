# Generated by Django 3.0.8 on 2020-07-10 12:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0002_restaurant_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='restaurant_banner',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
