from song import Song
from song_pool import get_or_create_song

class Comparison:
    def __init__(self, score, songA, songB):
        self.score = score
        self.songA = songA
        self.songB = songB

    def update_score(self, score):
        self.songA.update_score((score - 4) * -1)
        self.songB.update_score(score - 4)

    def to_dict(self):
        return {
            'score' : self.score,
            'songA': self.songA.to_dict(), 
            'songB': self.songB.to_dict()
        }
    
    @classmethod
    def from_dict(cls, data):
        songA = get_or_create_song(data['songA'])
        songB = get_or_create_song(data['songB'])
        return cls(score= data["score"], songA=songA, songB=songB)
