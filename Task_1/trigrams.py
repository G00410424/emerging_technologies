# Step 1: Read the file
def read_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        text = f.read()
    return text

import re  # Regular expressions for cleaning text

def clean_text(text):
    # Remove everything except letters, spaces, and full stops
    cleaned_text = re.sub(r'[^A-Za-z. ]', '', text)
    # Convert to uppercase
    cleaned_text = cleaned_text.upper()
    return cleaned_text

# Example file path
file_path = '/workspaces/emerging_technologies/Task_1/Books/book1_paris.txt'


text = read_file(file_path)
cleaned = clean_text(text)
print(cleaned[:100])  # Print the first 100 characters to check

def remove_preamble_postamble(text):
    start_index = text.find("START OF THIS PROJECT GUTENBERG")  # Find the start of the actual content
    end_index = text.find("END OF THIS PROJECT GUTENBERG")      # Find the end of the actual content

    if start_index != -1 and end_index != -1:
        text = text[start_index:end_index]
    return text

from collections import defaultdict

def build_trigram_model(text):
    trigram_model = defaultdict(int)  # Dictionary to store trigrams and their counts

    # Loop through text to extract trigrams
    for i in range(len(text) - 2):
        trigram = text[i:i+3]  # Get three characters at a time
        trigram_model[trigram] += 1  # Increment the count for this trigram

    return trigram_model

file_path = '/workspaces/emerging_technologies/Task_1/Books/book1_paris.txt'

# Read, clean, and remove preamble/postamble
text = read_file(file_path)
cleaned = clean_text(text)
cleaned = remove_preamble_postamble(cleaned)

# Build the trigram model
trigram_model = build_trigram_model(cleaned)
print(list(trigram_model.items())[:10])  # Print first 10 trigrams