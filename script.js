var userInput = document.getElementById ("input");
var enter = document.getElementById ("enter");
var ul = document.querySelector ("ul");
var list = document.getElementsByTagName ("li");


function inputLength() {
    return userInput.value.length;
}

function createListElement() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode(" - "));
    btn.addEventListener("click", dltListItem);

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    li.appendChild(btn);
    
    ul.appendChild(li);
    userInput.value = "";

}

function addItemAfterClick() {
    if (inputLength() > 0 && userInput.value !== "") {
        createListElement();
    }
}

function addItemAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}


function  createDltBtn() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode(" - "));
    list[i].appendChild(btn);
    btn.addEventListener("click", dltListItem);
}

for (var i = 0; i < list.length; i++) {
    createDltBtn();
    
}

function dltListItem(event) {
    event.target.parentNode.remove();
}

function toggleCreate(event) {
	event.target.classList.toggle("done");
}

enter.addEventListener("click", addItemAfterClick);
userInput.addEventListener("keypress", addItemAfterKeypress);
ul.addEventListener("click", toggleCreate);