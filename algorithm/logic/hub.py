from song import Song
from rank_items import rank_items
from print_results import print_results

# List of items
# letters = ["Brutal", "Traitor", "Drivers License", "1 Step Forward. 3 Steps Back", "Deja Vu", "Good 4 U", "Enough for You", "Happier", "Jealousy. Jealousy", "Favorite Crime", "Hope Ur Ok"]
letters = ["A", "B", "C"]
songs = []
for letter in letters:
    songs.append(Song(letter))

# Rank the items
ranked_songs = rank_items(songs)

# Print the results
print_results(ranked_songs) 