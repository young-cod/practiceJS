let inputField = document.getElementById("product-name");
let inputLen = document.getElementById("remaining-chars");

let maxAllowedChars = inputField.maxLength;

function calcInputLength(event) {
  let len = event.target.value.length;
  let remainingChar = maxAllowedChars - len;

  inputLen.textContent = remainingChar;
}

inputField.addEventListener("input", calcInputLength);
