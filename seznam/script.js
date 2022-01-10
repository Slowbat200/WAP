function myFunction(myList){
    let text = "";
    let inputs = document.querySelectorAll("input[type=text]");
    for (let i = 0; i < inputs.length; i++) {
        text += inputs[i].value;
    }
    let li = document.createElement("li");
    let node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("myList").appendChild(li);
    e.preventDefault();
}
console.log("D")
