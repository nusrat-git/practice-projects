var inputValue, searchValue;

const setValueById = (id, value) => {
  document.getElementById(id).innerText = value;
};

const getElementByIdd = (id) => {
  return document.getElementById(id);
};

const handleInput = () => {
  inputValue = getElementByIdd("inputText").value;
  setValueById("inputValue", inputValue);
};

const handleSearchInput = () => {
  searchValue = getElementByIdd("searchText").value.toLowerCase();
};

const handleLength = () => {
  value = inputValue.length;
  setValueById("outputText", value);
};

const handleUpperConversion = () => {
  value = inputValue.toUpperCase();
  setValueById("outputText", value);
};

const handleLowerConversion = () => {
  value = inputValue.toLowerCase();
  setValueById("outputText", value);
};

const handleReverse = () => {
  let value = "";
  for (let i = inputValue.length - 1; i >= 0; i--) {
    const element = inputValue[i];
    value += element;
    setValueById("outputText", value);
  }
};

const handleSearch = () => {
  let value = "";
  if (inputValue && searchValue) {
    if (inputValue.toLowerCase().includes(searchValue)) {
      value = `The searched word ${searchValue} exists`;
    } else {
      value = `The searched word ${searchValue} does not exists`;
    }
  } else {
    value = `Please check if input is missing`;
  }
  setValueById("outputText", value);
};

const handleCountOccur = () => {};

const handleSplit = () => {
  let valueArr = inputValue.split(" ");
  let value = "";
  for (let i = 0; i < valueArr.length; i++) {
    const element = valueArr[i];
    if (element != "") {
      value += `${element}, `;
    }
  }
  setValueById("outputText", value);
};

const handleJoin = () => {
  let valueArr = inputValue.split(" ");
  let value = valueArr.join(" ");

  setValueById("outputText", value);
};

const handleTrim = () => {
  let value = inputValue.trim();
  setValueById("outputText", value);
};

const handleBetweenTrim = () => {
  let valueArr = inputValue.split(" ");
  let value = "";
  for (let i = 0; i < valueArr.length; i++) {
    const element = valueArr[i];
    if (element != "") {
      value += `${element} `;
    }
  }
  setValueById("outputText", value);
};

const checkPalindrome = () => {
  let lcInputVal = inputValue.toLowerCase();
  let next = inputValue.length - 1;
  let value = `'${inputValue}' is a palindrome`;

  for (let i = 0; i < inputValue.length / 2; i++) {
    if (inputValue.at(i).toLowerCase() != inputValue.at(next).toLowerCase()) {
      value = `'${inputValue}' is not a palindrome`;
      break;
    }
    next--;
  }

  setValueById("outputText", value);
};

const findFactorial = () => {
  const numVal = parseInt(inputValue);
  let value = 1;

  for (let i = 1; i <= numVal; i++) {
    value *= i;
  }

  setValueById("outputText", value);
};

const findMax = () => {
  const numArr = inputValue.split(",");
  let value = parseInt(numArr[0]);

  for (let i = 1; i < numArr.length; i++) {
    if (value < parseInt(numArr[i])) {
      value = parseInt(numArr[i]);
    }
  }

  setValueById("outputText", value);
};

const countVowel = () => {
  let value = 0;

  for (let i = 0; i < inputValue.length; i++) {
    const element = inputValue[i].toLowerCase();
    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u"
    ) {
      value++;
    }
  }

  setValueById("outputText", value);
};

const print50 = () => {
  let value = "";
  for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      value += `${i}- FizzBuzz \n`;
    } else if (i % 3 == 0) {
      value += `${i}- Fizz \n`;
    } else if (i % 5 == 0) {
      value += `${i}-Buzz \n`;
    } else {
      value += `${i}\n`;
    }
  }
  setValueById("outputText", value);
};

const findLongWord = () => {
  const wordArr = inputValue.split(" ");
  let x = wordArr[0].length;
  let value = wordArr[0];

  for (let i = 1; i < wordArr.length; i++) {
    const element = wordArr[i];
    if (element.length > x) {
      x = element.length;
      value = element;
    }
  }

  setValueById("outputText", value);
};

const removeDuplicate = () => {
  const newArr = inputValue.split(", ");

  for (let i = 0; i < newArr.length; i++) {
    const elementI = newArr[i];

    for (let j = 1; j < newArr.length; j++) {
      const elementJ = newArr[j];

      if (elementI == elementJ) {
        console.log(elementI, "==", elementJ);
        newArr.filter((ele) => ele != elementI);
      }
    }
  }
};

const findAnagram = () => {
  const anaArr = inputValue.split(", ");

  const word1 = anaArr[0].toLowerCase();
  const word2 = anaArr[1].toLowerCase();

  let value = `${word1} and ${word2} are not anagrams`;

  if (word1.length == word2.length) {
    for (let i = 0; i < word1.length; i++) {
      const element = word1[i];
      if (!word2.includes(element)) {
        break;
      }
    }
    value = `${word1} and ${word2} are anagrams`;
  }

  setValueById("outputText", value);
};

const capitalizeF = () => {
  const newArr = inputValue.split(" ");

  for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i].at(0).toUpperCase();
    console.log(element);
  }
};
