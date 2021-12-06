function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function insertValue() {
    var select = document.getElementById("select"),
        txtVal = document.getElementById("val").value,
        newOption = document.createElement("option"),
        newOptionVal = document.createTextNode(txtVal);
        
    var x = 120
    for (x = 1; x == 120; x++) {
        print(x)
    }

    newOption.appendChild(newOptionVal);
    select.insertBefore(newOption, select.firstChild);
}

var y = insertValue(x)
let form = document.getElementById("form")
form.onsubmit = (e) => {
    e.preventDefault();
    let age = document.getElementById("age").value;
    let books = document.getElementById("books").value;
    console.log(age, books);
};