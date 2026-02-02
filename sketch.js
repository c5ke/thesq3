let state = "instructions"; // instructions, game, win, lose

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  resetGame();
}

function draw() {
  background(30);

  if (state === "instructions") {
    drawInstructions();
  } 
  else if (state === "game") {
    drawGame();
  } 
  else if (state === "win") {
    drawWin();
  } 
  else if (state === "lose") {
    drawLose();
  }
}

function mousePressed() {
  if (state === "instructions") instructionsMouse();
  else if (state === "game") gameMouse();
  else if (state === "win") winMouse();
  else if (state === "lose") loseMouse();
}
