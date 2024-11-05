# My emerging_technologies repository

**By Estevan Fernandez (g00410424@atu.ie)**

Please find below more about each task:

**Task 1: Trigram Model Creation**

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
Main loop:
Iterates over the five book files, applies the functions, and outputs the results.
Design Decisions
Data Structures: A defaultdict(int) from the collections module was chosen to store the trigrams because it automatically initializes the count of unseen trigrams to 0.
Text Processing: Regular expressions (re.sub) were used to clean the text by removing non-letter characters.
Multiple Files: The code processes multiple files by looping through a list of file paths, making it scalable and modular.

**Task 2: Third-Order Letter Approximation Generation**

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
weighted_random_choice(trigram_model, last_two_chars): This function takes the trigram model and the last two characters of the generated string, then uses a weighted random choice to select the next character. Trigrams that start with the given two characters are found, and the next character is selected based on the frequency of those trigrams in the model.

generate_string(trigram_model, start_string="TH", length=10000): This function generates a string of the given length. It starts with "TH" and uses the trigram model to generate each subsequent character. The process continues until the generated string reaches 10,000 characters.

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

**Task 3: Analyze the Trigram Model**

Overview
In Task 3, we analyze the 10,000-character string generated in Task 2 by comparing it to a list of valid English words from the words.txt file. This file contains a comprehensive list of English words, which we use to determine how many of the words in our generated string are actual English words.

The task involves:

Extracting words from the generated string.
Comparing these words to the list of valid words in words.txt.
Calculating the percentage of valid words found in the generated string.
Files and Structure
words.txt: A file containing a list of valid English words, which we will use for comparison.
trigrams.ipynb: The Jupyter Notebook containing all the tasks (including Task 3), where we:
Load the words.txt file.
Extract words from the generated string.
Compare these words to valid words and calculate the percentage of valid English words.
Steps
Place the words.txt file in the root of the project directory.
Run the notebook (trigrams.ipynb) or script to:
Load words.txt.
Extract words from the generated string.
Calculate the percentage of valid English words.
Design Decisions
Using a Set for Fast Lookup: We stored the valid words from words.txt in a Python set because lookups in a set are much faster than in a list. This allows us to efficiently compare a large number of words.

Regular Expression for Word Extraction: The re.findall() function was used to extract words by matching sequences of alphabetic characters, ignoring any punctuation or special characters.

**Task 4: Export the Trigram Model as JSON**

The trigram model produced in Task 1 is exported as a JSON file in Task 4, which facilitates sharing, storing, and using the model in other programs. We will be able to retrieve our model in a standardized manner thanks to JSON (JavaScript Object Notation), a widely used and accessible data format.

Structure and Files
The trigram model in JSON format is contained in the output file trigrams.json, where each trigram sequence is represented by a key and its frequency by a value.
The notebook that defines and runs the export function is called trigrams.ipynb.

---

## ELIZA Chatbot Project

### Overview

This project is an implementation of the classic **ELIZA chatbot**, which simulates conversation by recognizing keywords in user input and providing responses based on those keywords. ELIZA was originally created as an early experiment in natural language processing. In this implementation, the chatbot is designed to provide basic conversational responses based on predefined patterns and reflections of user input.

The chatbot is built using **HTML**, **CSS**, and **JavaScript** and is designed to run entirely on the client side.

### Features

- **Keyword-based Responses**: The chatbot can recognize specific words or phrases in user input and respond accordingly. Common conversational phrases like "hello," "how are you," "I feel," and "thank you" have unique responses.
- **Reflected Responses**: For unmatched phrases, the chatbot reflects user input, providing an engaging fallback response.
- **Dynamic Interaction**: The bot simulates conversation by generating responses based on the keywords in user input and even encourages users to elaborate on their thoughts.

### Files and Structure

- **eliza/** - The main folder containing the project files.
  - `index.html` - The HTML file defining the chatbot's structure and interface.
  - `style.css` - CSS file for styling the chatbot interface.
  - `eliza.js` - JavaScript file containing the logic for the chatbot, including responses and event handling.

### JavaScript Logic

The chatbot's logic is implemented in `eliza.js`. This file contains the following key components:

#### 1. Reflection Patterns

ELIZA uses reflection patterns to "reflect" words back to the user in responses. For example:
- **User says**: "I am feeling sad"
- **ELIZA responds**: "Why do you say you are feeling sad?"

The reflection patterns help make responses feel more personal.

#### 2. `generateResponse` Function

The `generateResponse` function generates replies based on keywords in the user's input. It includes common questions and conversational phrases such as "hello," "how are you," and "can you help me."

#### 3. User Interaction and Message Handling

The `sendMessage` function handles displaying user input and generating ELIZA's response. When the user submits a message, `sendMessage` updates the chat history and scrolls to the latest message.

### Possible Questions and Responses

Here are some of the common questions ELIZA can respond to:

- **"hello", "hi", "hey"**: "Hello! How can I help you today?"
- **"how are you", "how are you doing"**: "I'm just a computer program, but I'm here to help you."
- **"what are you doing"**: "I'm here, ready to chat with you!"
- **"what is your name", "who are you"**: "I'm ELIZA, your friendly chatbot assistant."
- **"can you help me"**: "Of course! I'm here to help. What's on your mind?"
- **"i am sad" or "i feel sad"**: "I'm sorry to hear that. Would you like to talk about it?"
- **"why" questions**: "What do you think is stopping you?"

The chatbot also includes responses for expressions of gratitude, questions about its "feelings," and existential inquiries like "what is the meaning of life."

---

### References

This project is based on the original ELIZA concept by Joseph Weizenbaum and follows the principles of keyword-based pattern matching. The following resources and inspirations were used:

1. **Original ELIZA Paper**: Weizenbaum, Joseph. "ELIZA—a computer program for the study of natural language communication between man and machine." _Communications of the ACM_ 9.1 (1966): 36-45.
2. **Reflection Patterns**: Reflection techniques were inspired by pattern-matching approaches used in basic AI systems for generating conversational responses.
3. **JavaScript and HTML Documentation**: Mozilla Developer Network (MDN) Web Docs. _JavaScript_ and _HTML_ for structuring and styling the chatbot interface.
4. **JavaScript Event Handling**: JavaScript documentation on MDN was used to implement and understand event listeners for interactive elements such as the input box and send button.
