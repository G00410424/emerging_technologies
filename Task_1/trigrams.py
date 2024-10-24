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
file_path = r'C:\Users\estev\OneDrive - Atlantic TU\4. Fourth Year\First Semester\Emerging Technologies\Task1\Books\book1_paris'

text = read_file(file_path)
cleaned = clean_text(text)
print(cleaned[:100])  # Print the first 100 characters to check

def remove_preamble_postamble(text):
    start_index = text.find("START OF THIS PROJECT GUTENBERG")  # Find the start of the actual content
    end_index = text.find("END OF THIS PROJECT GUTENBERG")      # Find the end of the actual content

    if start_index != -1 and end_index != -1:
        text = text[start_index:end_index]
    return text