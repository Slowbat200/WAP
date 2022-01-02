let before = 1;
let afterr = 2;
let afterrr = 3;
let afterrrr = 4;
function before(){
    document.getElementById('dark_mode')
    .src="css/dark-mode.css";
    document.getElementById('message')
    .innerHTML="Hii! GeeksforGeeks people";
}
function afterr(){
    document.getElementById('mode-2')
    .src="css/mode-2";
}
function afterrr(){
    document.getElementById('mode-3')
    .src="css/mode-3";
}function afterrrr(){
    document.getElementById('style')
    .src="css/style.css";
}
for (before = 1;before<afterr;before++) {
    if (before != afterr) {
        console,log(0);
    }
}