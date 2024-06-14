const inputField = document.getElementById("product-name");
const inputLen = document.getElementById("remaining-chars");

const maxAllowedChars = inputField.maxLength;

function calcInputLength(event) {
  const len = event.target.value.length;
  const remainingChar = maxAllowedChars - len;

  inputLen.textContent = remainingChar;
}

inputField.addEventListener("input", calcInputLength);
