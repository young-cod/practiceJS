console.dir(document);
// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
// anchorElement.href = "https://google.com";

anchorElement = document.querySelectorAll("a");
anchorElement.href = "https://academind.com";

//요소 추가하기
let newAnchorElem = document.createElement("a");
newAnchorElem.href = "https://google.com";
newAnchorElem.textContent = "Google";

let firstPara = document.querySelector("p");
firstPara.append(newAnchorElem);

//요소 삭제하기
let firstH1Elem = document.querySelector("h1");
// firstH1Elem.remove();
firstH1Elem.parentElement.removeChild(firstH1Elem);
