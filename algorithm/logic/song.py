class Song:
    def __init__(self, name, score=0, matches=0, avg=0, range=0):
        self.name = name
        self.score = score
        self.matches = matches
        self.avg = avg
        self.range = range

    def update_score(self, score):
        self.score += score
        self.matches += 1
        self.avg = round(self.score / self.matches, 2)

    def update_range(self, scalar, offset):
        self.range = round((scalar * self.avg) + offset, 2)

    def to_dict(self):
        return {
            'name': self.name,
            'score': self.score,
            'matches': self.matches,
            'avg': self.avg,
            'range': self.range
        }
    
    @classmethod
    def from_dict(cls, data):
        return cls(name=data['name'], score=0, matches=data['matches'], avg=data['avg'], range=data['range'])
    
    def __repr__(self):
        return f"Song(name='{self.name}', score={self.score}, matches={self.matches}, avg={self.avg}, range={self.range})"