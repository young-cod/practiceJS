//1. example : sum numbers

const calcSumBtnElem = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElem = document.getElementById("user-number");
  const enteredNumber = userNumberInputElem.value;
  console.log(enteredNumber);
  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber += i;
  }

  const result = document.getElementById("calculated-sum");
  result.textContent = sumUpToNumber;
  result.style.display = "block";
}

calcSumBtnElem.addEventListener("click", calculateSum);

//2. highlight links

const highlightBtn = document.querySelector("#highlight-links button");

function highlightLinks() {
  const links = document.querySelectorAll("#highlight-links a");

  for (const link of links) {
    link.classList.add("highlight");
  }
}

highlightBtn.addEventListener("click", highlightLinks);
