# My emerging_technologies repository

**By Estevan Fernandez (g00410424@atu.ie)**

Please find below more about each task:

**TASK 1 START**

Task 1: Trigram Model Creation
Overview
This project is part of Task 1 of a larger assignment, where the goal is to create a third-order letter approximation model (also known as a trigram model) based on English texts. The model uses sequences of three characters (trigrams) to analyze and generate text based on the frequency of those sequences in a given dataset of books.

The task involves:

Cleaning the input text by removing non-letter characters, making all letters uppercase, and keeping only letters, spaces, and full stops.
Building a trigram model that counts how frequently each sequence of three consecutive characters appears in the cleaned text.
The project uses five English works from Project Gutenberg to create this trigram model.
Files and Structure
Folders
Task_1/Books/: This folder contains five English works in plain text format that are used to build the trigram model:
book1_paris.txt
book2_stranger_peoples_country.txt
book3_everybodys_business.txt
book4_cinderellas_prince.txt
book5_the_musgrave_controversy.txt
Scripts
trigrams.py: The main Python script that:
Reads the text files.
Cleans the text by removing unwanted characters and converting it to uppercase.
Removes the preamble and postamble sections from Project Gutenberg books.
Builds a trigram model (i.e., counts occurrences of every sequence of three consecutive characters).
Outputs the cleaned content and the trigram model for each book.
Output
The script prints:

The first 100 characters of the cleaned text for each book.
Optionally, the first 10 trigrams from each book with their counts.
Code Structure
Main Functions
read_file(file_path): Reads the content of a book file from a given file path.
clean_text(text): Removes unwanted characters from the text and converts it to uppercase.
remove_preamble_postamble(text): Removes the Project Gutenberg preamble and postamble from the text.
build_trigram_model(text): Builds a trigram model by counting how often each sequence of three characters appears in the cleaned text.
Main loop: Iterates over the five book files, applies the functions, and outputs the results.
Design Decisions
Data Structures: A defaultdict(int) from the collections module was chosen to store the trigrams because it automatically initializes the count of unseen trigrams to 0.
Text Processing: Regular expressions (re.sub) were used to clean the text by removing non-letter characters.
Multiple Files: The code processes multiple files by looping through a list of file paths, making it scalable and modular.

**TASK 1 END**

**TASK 2 START**

Task 2: Third-Order Letter Approximation Generation
Overview
In Task 2, we generate a string of 10,000 characters based on the trigram model built in Task 1. This string is generated using a third-order approximation of the English language, where each character in the string is determined by the last two characters using the trigram model.

The process involves:

Starting with a predefined string: We begin the generation process with the string "TH".
Selecting the next character based on the previous two characters: For each next character, we find all trigrams that start with the last two characters of the current string.
Weighted random selection: The next character is chosen randomly, but the probability of each character is weighted based on how frequently it appeared in the trigram model.
The result is a unique string of 10,000 characters that follows the patterns observed in the input text used in Task 1.

Files and Structure
Python Script
task2_trigrams.py: This script contains the following key functions:
weighted_random_choice(): This function selects the next character based on the previous two characters, using the trigram model. The selection is weighted by the frequency of the trigrams.
generate_string(): This function generates a string of 10,000 characters, starting with "TH" and repeatedly selecting the next character using the trigram model.
Functions
weighted_random_choice(trigram_model, last_two_chars):

This function takes the trigram model and the last two characters of the generated string, then uses a weighted random choice to select the next character. Trigrams that start with the given two characters are found, and the next character is selected based on the frequency of those trigrams in the model.
generate_string(trigram_model, start_string="TH", length=10000):

This function generates a string of the given length. It starts with "TH" and uses the trigram model to generate each subsequent character. The process continues until the generated string reaches 10,000 characters.
Example Usage
Here’s an example of how the string is generated using the trigram model:

Start with "TH".
Use the last two characters ("TH") to find all trigrams that start with "TH".
Select the next character based on the trigram counts.
Repeat this process until the string is 10,000 characters long.
How to Run
To run the task, you can use the following steps:

Ensure the trigram model from Task 1 is available.
Run the script by calling the generate_string() function to create a 10,000-character string:
python
Copy code
generated_text = generate_string(trigram_model)
print(generated_text[:1000])  # View the first 1000 characters for inspection
The generated string will follow the patterns observed in the input text, and it will be different each time the script is run due to the random selection process.
Design Decisions
Weighted Random Selection: The random.choices() function is used for selecting the next character in the string. The weights for each possible next character are based on how frequently that trigram appears in the model.

Edge Case Handling: If no trigrams are found that match the last two characters, the generation process appends "TH" to restart the process, ensuring that string generation doesn’t stop.

Running in Jupyter Notebook
This task is implemented inside a Jupyter Notebook (trigrams.ipynb), which allows for step-by-step code execution along with explanations using Markdown cells. You can run each step individually to observe the intermediate outputs before generating the full string.
**TASK 2 END**

