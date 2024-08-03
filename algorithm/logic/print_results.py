from create_range import create_range

def print_results(ranked_songs):
    create_range(ranked_songs)

    # Print the ranked list
    print("Ranked items (best to worst):")

    for i, item in enumerate(ranked_songs):
        print(f"{i+1}. {item.name}"," | ", item.avg, " | ", item.range)