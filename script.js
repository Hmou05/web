let container = document.querySelector("div");
let text = document.getElementById("text");
let button = document.getElementById("button");


function edit() {
    container.innerHTML = `<input type="text" placeholder="Enter the text." id="textInput">`;
    button.style.visibility = "visible";
    console.log("Editing in progress ...");
}

button.onclick = function() {
    var theText = textInput.value;
    container.innerHTML = `<p onclick="edit()" id="text">${theText}</p>`;
    button.style.visibility = "hidden";
    console.log(`task was edited!,\nThe content of the task is \"${theText}\"`);
}
