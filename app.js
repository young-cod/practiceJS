let paraElem = document.querySelector("p");

function changeParaText() {
  paraElem.textContent = "clicked";
  console.log("Click!");
}

//함수에 ()를 달게되면 실행하게 된다.
//이벤트가 실행될때까지 대기상태로 두려면 ()를 넣지 말아야한다.
paraElem.addEventListener("click", changeParaText);

let inputElem = document.querySelector("input");

function retrieveUserInput(event) {
  //   let enteredText = inputElem.value;
  let enteredText = event.target.value;
  console.log(enteredText);
  console.log(event);
}

inputElem.addEventListener("input", retrieveUserInput);
