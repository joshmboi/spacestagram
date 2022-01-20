var picList = document.getElementById("pic-list");

window.onload = function() {
    loadpics()
}

function loadpics() {
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode("info"));
    picList.appendChild(entry);
}