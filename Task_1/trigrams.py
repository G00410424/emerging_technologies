# Step 1: Read the file from the given file path
def read_file(file_path):
    """
    Reads the entire content of a file given the file path.
    
    :param file_path: Path to the file to be read
    :return: Text content of the file as a string
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        text = f.read()  # Read all the content of the file
    return text

import re  # Importing regular expressions for text cleaning

# Step 2: Clean the text by removing unwanted characters and converting to uppercase
def clean_text(text):
    """
    Cleans the text by removing everything except letters, spaces, and full stops.
    Converts all letters to uppercase.

    :param text: The original text to be cleaned
    :return: Cleaned text
    """
    # Remove everything except letters (A-Z, a-z), spaces, and full stops using regular expressions
    cleaned_text = re.sub(r'[^A-Za-z. ]', '', text)
    # Convert the remaining text to uppercase for consistency
    cleaned_text = cleaned_text.upper()
    return cleaned_text

# Step 3: Remove the preamble and postamble from the text
def remove_preamble_postamble(text):
    """
    Removes the preamble and postamble from a Project Gutenberg text.
    
    :param text: The text that contains the preamble and postamble
    :return: Text with the preamble and postamble removed
    """
    # Find the start of the actual book content
    start_index = text.find("START OF THIS PROJECT GUTENBERG")
    # Find the end of the actual book content
    end_index = text.find("END OF THIS PROJECT GUTENBERG")

    # If both start and end markers are found, remove everything outside the book content
    if start_index != -1 and end_index != -1:
        text = text[start_index:end_index]
    return text

from collections import defaultdict  # Importing defaultdict to store trigram counts

# Step 4: Build a trigram model
def build_trigram_model(text):
    """
    Creates a trigram model by counting occurrences of every sequence of three consecutive characters.
    
    :param text: The cleaned and processed text
    :return: A trigram model as a dictionary with trigrams as keys and their counts as values
    """
    trigram_model = defaultdict(int)  # Dictionary to store trigrams and their counts

    # Loop through the text and extract trigrams (sequences of three characters)
    for i in range(len(text) - 2):
        trigram = text[i:i+3]  # Extract three characters at a time
        trigram_model[trigram] += 1  # Increment the count for this trigram

    return trigram_model

# Step 5: Process all the books and print the first 100 characters of each

# List of file paths for the five books, with correct filenames from the image
book_files = [
    '/workspaces/emerging_technologies/Task_1/Books/book1_paris.txt',
    '/workspaces/emerging_technologies/Task_1/Books/book2_stranger_peoples_country.txt',
    '/workspaces/emerging_technologies/Task_1/Books/book3_everybodys_business.txt',
    '/workspaces/emerging_technologies/Task_1/Books/book4_cinderellas_prince.txt',
    '/workspaces/emerging_technologies/Task_1/Books/book5_the_musgrave_controversy.txt'
]

# Loop through each book, process it, and print the first 100 characters
for i, file_path in enumerate(book_files):
    # Read the book content from the file
    text = read_file(file_path)
    # Clean the text by removing unwanted characters and converting to uppercase
    cleaned = clean_text(text)
    # Remove the preamble and postamble to focus on the actual content
    cleaned = remove_preamble_postamble(cleaned)

    # Print the first 100 characters from each book with a clear label
    print(f"Book {i+1}: {cleaned[:100]}")  # Printing first 100 characters of each book

    # Build the trigram model for the current book (optional for now)
    trigram_model = build_trigram_model(cleaned)

    # If you want to see the first 10 trigrams of each book, uncomment the next line
    print(list(trigram_model.items())[:10])
