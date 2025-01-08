# Function to compare two items and return the preferred one
def compare_items(comparison):
    print(f"Which one do you prefer? {comparison.songA.name} or {comparison.songB.name}?")
    choice = input("Enter a score from 1 through 7: ")
    while choice not in ['1', '2', '3', '4', '5', '6', '7']:
        print("Invalid choice. Please enter a proper score.")
        choice = input("Enter a score from 1 through 7: ")
    choice = int(choice)
    comparison.update_score(choice)