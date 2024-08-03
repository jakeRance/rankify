from compare_items import compare_items
from generate_all_pairs import generate_pairs
import random

# Function to rank items based on pairwise comparisons
def rank_items(songs):
    pairs = generate_pairs(songs)
    while len(pairs) > 0:
        pair = random.choice(pairs)
        compare_items(pair)
        # Remove the compared pair from consideration
        pairs.remove(pair)
    return sorted(songs, key=lambda song: (song.avg, song.matches, song.name), reverse=True)
