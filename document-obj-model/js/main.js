function changeFontSize() {
    var fontSize = prompt("Please enter the font size you want to display", "20px")
    document.getElementById('p1').style.fontSize = fontSize;
    document.getElementById('p2').style.fontSize = fontSize;
    document.getElementById('p3').style.fontSize = fontSize;
}

function increaseFontSize() {
    var pID = prompt("Please enter the paragraph ID you want to display. (ID: p1, p2, p3)", "p1")
    txt = document.getElementById(pID);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
}

function decreaseFontSize() {

    var pID = prompt("Please enter the paragraph ID you want to display. (ID: p1, p2, p3)", "p1")
    txt = document.getElementById(pID);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';    
}

function changeColor() {
    var p1 = document.getElementById('p1');
    var p2 = document.getElementById('p2');
    var p3 = document.getElementById('p3');

    p1.style.color = "blue";
    p2.style.color = "red";
    p3.style.color = "greenyellow";
}

function changeBgColor() {
    var div = document.getElementById('container');
    div.style.background = "#ffffcc";
}

function copyContent() {
    var p1 = document.getElementById('p1');
    var p2 = document.getElementById('p2')
    p1.innerText = p2.innerText;
}

function reset() {    
    location.reload();
}