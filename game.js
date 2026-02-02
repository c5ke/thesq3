let health;
let room;
let correctDoor;
let hoverDoor = -1; // -1 = none, 0 = left, 1 = right
let flash = 0; // intensity of red flash


function resetGame() {
  health = 3;
  room = 1;
  newRoom();
}

function drawDoors() {
  hoverDoor = -1;

  // Left door
  if (mouseX > 100 && mouseX < 250 && mouseY > 150 && mouseY < 350) {
    hoverDoor = 0;
  }

  // Right door
  if (mouseX > 350 && mouseX < 500 && mouseY > 150 && mouseY < 350) {
    hoverDoor = 1;
  }

  // Left door visuals
  if (hoverDoor === 0) {
    fill(230);
    stroke(255);
    strokeWeight(4);
  } else {
    fill(180);
    noStroke();
  }
  rect(100, 150, 150, 200);

  // Right door visuals
  if (hoverDoor === 1) {
    fill(230);
    stroke(255);
    strokeWeight(4);
  } else {
    fill(180);
    noStroke();
  }
  rect(350, 150, 150, 200);

  // Labels
  noStroke();
  fill(0);
  textSize(24);
  text("LEFT", 175, 300);
  text("RIGHT", 425, 300);
}
function drawHeart(x, y, s) {
  push();
  translate(x, y);
  scale(s / 20);

  noStroke();
  fill(255, 60, 60);

  beginShape();
  vertex(0, -10);
  bezierVertex(-10, -20, -25, -5, 0, 20);
  bezierVertex(25, -5, 10, -20, 0, -10);
  endShape(CLOSE);

  pop();
}

function drawHearts() {
  let startX = width / 2 - (health - 1) * 20;
  let y = 70;
  let size = 20;

  for (let i = 0; i < health; i++) {
    drawHeart(startX + i * 40, y, size);
  }
}

function drawGame() {
  drawDoors();
  drawHUD();
  drawHearts();

  // RED FLASH EFFECT
  if (flash > 0) {
    fill(255, 0, 0, flash); // semi-transparent red
    rect(0, 0, width, height);
    flash -= 10; // fade out quickly
  }
}


function drawHUD() {
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Room: " + room + " / 3", width / 2, 40);
}

function newRoom() {
  correctDoor = floor(random(2));
}

function gameMouse() {
  // left door
  if (mouseX > 100 && mouseX < 250 && mouseY > 150 && mouseY < 350) {
    checkChoice(0);
  }

  // right door
  if (mouseX > 350 && mouseX < 500 && mouseY > 150 && mouseY < 350) {
    checkChoice(1);
  }
}
function checkChoice(choice) {
  if (choice !== correctDoor) {
    health--;
    flash = 150; // trigger red flash
  }

  room++;

  if (health <= 0) {
    state = "lose";
  } else if (room > 3) {
    state = "win";
  } else {
    newRoom();
  }
}
