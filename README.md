# My emerging_technologies repository

**By Estevan Fernandez (g00410424@atu.ie)**

---

## Tasks

### Task 1: Trigram Model Creation

#### Overview
This project is part of Task 1 of a larger assignment, where the goal is to create a third-order letter approximation model (also known as a trigram model) based on English texts. The model uses sequences of three characters (trigrams) to analyze and generate text based on the frequency of those sequences in a given dataset of books.

#### The task involves:
- Cleaning the input text by removing non-letter characters, making all letters uppercase, and keeping only letters, spaces, and full stops.
- Building a trigram model that counts how frequently each sequence of three consecutive characters appears in the cleaned text.

The project uses five English works from Project Gutenberg to create this trigram model.

#### Files and Structure

**Folders**
- `Task_1/Books/`: This folder contains five English works in plain text format that are used to build the trigram model:
  - `book1_paris.txt`
  - `book2_stranger_peoples_country.txt`
  - `book3_everybodys_business.txt`
  - `book4_cinderellas_prince.txt`
  - `book5_the_musgrave_controversy.txt`

**Scripts**
- `trigrams.py`: The main Python script that:
  - Reads the text files.
  - Cleans the text by removing unwanted characters and converting it to uppercase.
  - Removes the preamble and postamble sections from Project Gutenberg books.
  - Builds a trigram model (i.e., counts occurrences of every sequence of three consecutive characters).
  - Outputs the cleaned content and the trigram model for each book.

**Output**
The script prints:
- The first 100 characters of the cleaned text for each book.
- Optionally, the first 10 trigrams from each book with their counts.

#### Code Structure
**Main Functions**
- `read_file(file_path)`: Reads the content of a book file from a given file path.
- `clean_text(text)`: Removes unwanted characters from the text and converts it to uppercase.
- `remove_preamble_postamble(text)`: Removes the Project Gutenberg preamble and postamble from the text.
- `build_trigram_model(text)`: Builds a trigram model by counting how often each sequence of three characters appears in the cleaned text.

**Main loop**:
- Iterates over the five book files, applies the functions, and outputs the results.

#### Design Decisions
- **Data Structures**: A `defaultdict(int)` from the `collections` module was chosen to store the trigrams because it automatically initializes the count of unseen trigrams to 0.
- **Text Processing**: Regular expressions (`re.sub`) were used to clean the text by removing non-letter characters.
- **Multiple Files**: The code processes multiple files by looping through a list of file paths, making it scalable and modular.

---

### Task 2: Third-Order Letter Approximation Generation

#### Overview
In Task 2, we generate a string of 10,000 characters based on the trigram model built in Task 1. This string is generated using a third-order approximation of the English language, where each character in the string is determined by the last two characters using the trigram model.

#### The process involves:
1. **Starting with a predefined string**: We begin the generation process with the string "TH".
2. **Selecting the next character based on the previous two characters**: For each next character, we find all trigrams that start with the last two characters of the current string.
3. **Weighted random selection**: The next character is chosen randomly, but the probability of each character is weighted based on how frequently it appeared in the trigram model.

---

### Task 3: Analyze the Trigram Model

#### Overview
In Task 3, we analyze the 10,000-character string generated in Task 2 by comparing it to a list of valid English words from the `words.txt` file. This file contains a comprehensive list of English words, which we use to determine how many of the words in our generated string are actual English words.

#### The task involves:
1. Extracting words from the generated string.
2. Comparing these words to the list of valid words in `words.txt`.
3. Calculating the percentage of valid words found in the generated string.

---

### Task 4: Export the Trigram Model as JSON

#### Overview
The trigram model produced in Task 1 is exported as a JSON file in Task 4, which facilitates sharing, storing, and using the model in other programs. JSON (JavaScript Object Notation) is a widely used and accessible data format.

---

## ELIZA Chatbot Project

### Overview
This project is an implementation of the classic **ELIZA chatbot**, which simulates conversation by recognizing keywords in user input and providing responses based on those keywords.

---

### Features
- **Keyword-based Responses**: The chatbot can recognize specific words or phrases in user input and respond accordingly.
- **Reflected Responses**: For unmatched phrases, the chatbot reflects user input, providing an engaging fallback response.
- **Dynamic Interaction**: The bot simulates conversation by generating responses based on the keywords in user input.

---

### References
1. **N-gram Modeling**: Manning, Christopher D., and Hinrich Schütze. Foundations of Statistical Natural Language Processing. MIT Press, 1999.
2. **Project Gutenberg Free eBook Collection**: [Gutenberg](https://www.gutenberg.org/).
3. **Reflection Patterns in ELIZA**: Weizenbaum, Joseph. "ELIZA—a computer program for the study of natural language communication between man and machine."
4. **Python Documentation**: [JSON](https://docs.python.org/3/library/json.html), [Regular Expressions](https://docs.python.org/3/library/re.html).

---
