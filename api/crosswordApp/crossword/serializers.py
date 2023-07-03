from rest_framework import serializers
from .models import Crossword

class CrosswordSerializer(serializers.ModelSerializer):

    class Meta:
        model = Crossword 
        fields = ('pk', 'clue', 'answer', 'row', 'col', 'orientation')