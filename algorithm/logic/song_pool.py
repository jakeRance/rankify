from song import Song
song_pool = {}

def get_or_create_song(data):
    name = data['name']
    if name not in song_pool:
        song_pool[name] = Song.from_dict(data)
    return song_pool[name]