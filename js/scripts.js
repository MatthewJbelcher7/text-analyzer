// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic

function tallyWord(word, textArray) {
  // ensure word is not empty
  if (isEmpty(word)) {
    return 0;
  }
  // initialize tally
  let tally = 0;
  // iterate over textArray
  textArray.forEach(function(element) {
    // if element is word, add to tally
    if (element === word) {
      tally += 1;
    }
  });
  return tally 
}

function distinctWordCount(text) {
  if (isEmpty(text)) {
    return 0;
  };
  // turn input text into an array using split
  const textArray = text.split(" ");
  // get distinct words & store into a second array
  const distinctWordsSet = new Set(textArray);
  // store into second array
  const distinctWords = [];
  distinctWordsSet.forEach(function(element) {
    distinctWords.push(element);
  });

  // initialize empty array tallyArray
  tallyArray = [];
  // iterate over array of distinct words
  distinctWords.forEach(function(word) {
    // tally each distinct word
    // add tally to tallyArray variable
    tallyArray.push(tallyWord(word, textArray));
  });

  return [tallyArray, distinctWords]
}

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  };
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  if (isEmpty(word)) {
    return 0;
  };
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// UI Logic

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  };
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});