# Text Analyzer

#### By Kirsten Opstad

#### A simple practice lesson in TDD (Test Driven Development)

## Technologies Used

* HTML 
* CSS 
* Bootstrap
* Javascript

## Description

### Objectives
* Practice TDD Workflow
* Write a function that returns how many times each word is used in a passage of text.
* Then, try organizing the output of words from most used to least used. 

### Tests
<!-- Tests for wordCounter -->
Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

<!-- Tests for numberOfOccurrencesInText -->
Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
numberOfOccurrencesInText(word, text);
Expected Output: 0

<!-- Tests for boldPassage -->

Describe: boldPassage()

Test: "It should return null if no word or text is entered."
Code:
const text = "";
const word = "";
boldPassage(word, text);
Expected Output: null

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: <p>yo</p>

Test: "It should return a matching word in a strong tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong></p>

Test: "It should wrap words that match in strong tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong> there</p>

<!-- Tests for distinctWordCount -->
Describe: distinctWordCount

Test: "It should return null if text field was submitted empty"
Code: 
const text = "";
distinctWordCount(text);
Expected Output: 0

Test: "It should return an array of distinct words when block of text is submitted."
Code: 
const text = "This template includes placeholders. Lots of placeholders.";
distinctWordCount(text);
Expected Output: [This, template, includes, placeholders., Lots, of]

Test: "It should return array of two arrays: one with the distinct words and one with their corresponding tallies."
Code: 
const text = "This template includes placeholders. Lots of placeholders."
distinctWordCount(text);
Expected Output: [[1,1,1,2,1,1][This, template, includes, placeholders., Lots, of]]

<!-- Tests for tallyWord -->

Describe: tallyWord

Test: "It should return a count of how many times a word appears in a text array."
Code:
const word = "red" 
const textArray = ["red","red","blue"]
distinctWordCount(word, textArray);
Expected Output: 2
 
<!-- This template includes placeholders for:

[x] Screenshots

![Screenshots](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.03bZmDGXaBhBYyxxp3Ls3gHaEA%26pid%3DApi&f=1&ipt=e980d57210242747a51c41421e1f09a6de3b1fdaeaadd297496787bb64e80c88&ipo=images)

[x] [Link to operational site](http://www.kirstenopstad.github.com/<REPOSITORY NAME>)

[x] Goals
1. Goal1
2. Goal2
3. Goal3 -->

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

KO Ask Yourself:

[x] Do I need to run a server? 

[x] How should I set up my databases? 

[x] Is there other code this application depends on?

_{Epicodus recommends deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* No known bugs. If you find one, please email me at kirsten.opstad@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## License

[Choose License](https://choosealicense.com/)

Copyright (c) 2022 Kirsten Opstad