

# Loop through all comparisons
# Take all scores and apply to all objects
# Return finished array

def analyze_scores(comparisons):
    for comparison in comparisons:
        comparison.songA.updateScore()