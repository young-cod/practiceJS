const inputField = document.getElementById("product-name");
const inputLen = document.getElementById("remaining-chars");

const maxAllowedChars = inputField.maxLength;

function calcInputLength(event) {
  const len = event.target.value.length;
  const remainingChar = maxAllowedChars - len;

  inputLen.textContent = remainingChar;

  if (remainingChar === 0) {
    inputField.classList.add("error");
    inputLen.classList.add("error");
  } else if (remainingChar <= 10) {
    inputField.classList.add("warning");
    inputLen.classList.add("warning");
    inputField.classList.remove("error");
    inputLen.classList.remove("error");
  } else {
    inputField.classList.remove("warning");
    inputLen.classList.remove("warning");
  }
}

inputField.addEventListener("input", calcInputLength);
