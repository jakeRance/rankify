def create_range(songs):
    max_range = 100
    min_range = 0

    # Convert dictionary values to a list and sort by avg attribute
    sorted_songs = sorted(songs.values(), key=lambda x: x.avg, reverse=True)

    max_avg = sorted_songs[0].avg
    min_avg = sorted_songs[-1].avg

    print("MAX: ", sorted_songs[0])
    print("MIN: ", sorted_songs[-1])

    scalar = (max_range - min_range) / (max_avg - min_avg)
    offset = min_range - (min_avg * scalar)
    
    for song in sorted_songs:
        song.update_range(scalar, offset)

    return sorted_songs