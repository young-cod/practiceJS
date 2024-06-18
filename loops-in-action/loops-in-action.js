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

  //입력필드의 값은 항상 문자열이다
  /*
    ex) enteredNumber = 10
    enteredNumber + 1 = 101
    +를 붙여주자
    +(enteredNumber + 1) = 11

    //   let summm = (enteredNumber * (+enteredNumber + 1)) / 2;
    //   console.log(summm);
    */
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

//3. Display User Data

const dummyUserData = {
  firstName: "YoungSub",
  lastName: "Lee",
  age: 30,
};

const displayUserDataBtn = document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElem = document.getElementById("output-user-data");

  outputDataElem.innerHTML = "";

  for (const key in dummyUserData) {
    const dataList = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    dataList.textContent = outputText;
    outputDataElem.append(dataList);
  }
}

displayUserDataBtn.addEventListener("click", displayUserData);

//4. Statistics / Roll the Dice

const rollDiceBtn = document.querySelector("#statistics button");

function rollDice() {
  //0~1사이의 부동소수점의 난수에 N을 곱한 뒤 1을 더하고 반내림하면 원하는 정수 나옴
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
  const targetNumber = document.getElementById("user-target-number");
  const diceRollsListElem = document.getElementById("dice-rolls");

  const enteredNumber = +targetNumber.value;

  diceRollsListElem.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;
  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();

    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newRollsListElem = document.createElement("li");
    const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
    newRollsListElem.textContent = outputText;
    diceRollsListElem.append(newRollsListElem);

    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElem = document.getElementById("output-total-rolls");
  const outputTargetRollsElem = document.getElementById("output-target-number");

  outputTargetRollsElem.textContent = enteredNumber;
  outputTotalRollsElem.textContent = numberOfRolls;
}

rollDiceBtn.addEventListener("click", deriveNumberOfDiceRolls);
