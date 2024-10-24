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