let paraElem = document.querySelector("p");

function changeParaText() {
  paraElem.textContent = "clicked";
  console.log("paraclick");
}

//함수에 ()를 달게되면 실행하게 된다.
//이벤트가 실행될때까지 대기상태로 두려면 ()를 넣지 말아야한다.
paraElem.addEventListener("click", changeParaText);
