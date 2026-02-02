function drawInstructions() {
  fill(255);
  textSize(32);
  text("Choose the Correct Door", width / 2, 100);

  textSize(18);
  text(
    "You will enter rooms.\nChoose carefully.\nWrong door = lose a heart.\nSurvive to win!",
    width / 2,
    180,
  );

  textSize(20);
  text("Click to Start!", width / 2, 300);
}

function instructionsMouse() {
  state = "game";
}
