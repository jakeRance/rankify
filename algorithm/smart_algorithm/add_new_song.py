import random
from make_new_pairs import make_new_pairs
from create_priority_pairs import create_priority_pairs

def add_new_song(remaining_songs, remaining_pairs, selected_songs):
    new_song = random.choice(remaining_songs)
    selected_songs.append(new_song)
    new_pairs = make_new_pairs(new_song, selected_songs)
    priority_pairs = create_priority_pairs(new_pairs, 10)
    remaining_pairs.append(new_pairs)
    return priority_pairs