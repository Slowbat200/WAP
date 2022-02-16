alert("Pro zobrazeni nebo skryti textu, prejedte mysi z jedne strany na druhou")
let sourceText = "Jakub Pavlovic";
function setup() {
  createCanvas(1500, 700);
  frameRate(10);
}
function draw() {
  background(50);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  let middle = sourceText.length / 2;
  let left = middle - ((mouseX / width) * middle);
  let right = middle + ((mouseX / width) * middle);
  text(
    sourceText.substring(left, right+1),
    width/2, height/2);
}