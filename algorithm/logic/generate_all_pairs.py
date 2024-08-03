import random
from comparison import Comparison

# Function to generate all possible pairs of items
def generate_pairs(items):
    pairs = []
    for i in range(len(items)):
        for j in range(i + 1, len(items)):
            first = random.randint(0,1)
            if first:
                pairs.append(Comparison(0, items[i], items[j]))
            else:
                pairs.append(Comparison(0, items[j], items[i]))
    return pairs