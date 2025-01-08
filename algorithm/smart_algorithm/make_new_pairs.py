import random

def make_new_pairs(new_song, selected_songs):
    pairs = []
    for song in selected_songs:
        first = random.randint(0,1)
        if first:
            pairs.append((new_song, song))
        else:
            pairs.append(((song, new_song)))
    return pairs