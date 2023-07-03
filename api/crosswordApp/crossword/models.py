from django.db import models

class Crossword(models.Model):
    clue = models.TextField("Clue")
    answer = models.CharField("Answer", max_length=50)
    row = models.IntegerField("Row")
    col = models.IntegerField("Col")
    orientation = models.CharField("Orientation", max_length=10)

    def __str__(self):
        return self.name