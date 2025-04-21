const handleCount = () => {
  const inputElement = document.getElementById("inputText");
  const outputElement = document.getElementById("outputText");

  const characters = inputElement.value.length;

  const words = inputElement.value.split(" ");
  const filteredWords = words.filter((word) => word != "").length;

  outputElement.innerText = `Characters: ${characters} \n Words: ${filteredWords}`;
};
