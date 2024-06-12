console.dir(document);
// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
// anchorElement.href = "https://google.com";

anchorElement = document.querySelectorAll("a");
anchorElement.href = "https://academind.com";

let newAnchorElem = document.createElement("a");
newAnchorElem.href = "https://google.com";
newAnchorElem.textContent = "Google";

let firstPara = document.querySelector("p");
firstPara.append(newAnchorElem);
