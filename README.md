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
