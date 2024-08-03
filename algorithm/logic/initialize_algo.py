from song import Song
import numpy as np
from generate_all_pairs import generate_pairs

def initialize_algorithm (choices):
    songs = []
    for choice in choices:
        songs.append(Song(choice))
    pairs = generate_pairs(songs)
    serialized_pairs = [pair.to_dict() for pair in pairs]
    np.random.shuffle(serialized_pairs)
    return serialized_pairs

