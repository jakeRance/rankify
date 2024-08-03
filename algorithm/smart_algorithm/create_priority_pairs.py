import random

def create_priority_pairs(new_pairs, num):
    priority_pairs = []
    for i in range(num):
        priority_pairs.append(new_pairs.pop(random.randint(0, len(new_pairs) - 1)))
    return priority_pairs