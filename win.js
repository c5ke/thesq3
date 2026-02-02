// Confetti array
let confetti = [];

function drawWin() {
  background(20, 120, 60); // Dark green background

  // WIN TEXT
  fill(0, 255, 100);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("YOU WIN!", width / 2, height / 2);

  textSize(20);
  text("Click to Play Again", width / 2, height / 2 + 60);


  for (let i = 0; i < 5; i++) {
    confetti.push(newConfetti());
  }

  // Update and display confetti
  for (let i = confetti.length - 1; i >= 0; i--) {
    confetti[i].update();
    confetti[i].show();

    // Remove confetti that falls off screen
    if (confetti[i].y > height) {
      confetti.splice(i, 1);
    }
  }
}

function newConfetti() {
  return {
    x: random(width),
    y: -10,
    size: random(5, 12),
    speed: random(2, 6),
    color: color(random(255), random(255), random(255)),

    update: function() {
      this.y += this.speed;
    },

    show: function() {
      fill(this.color);
      noStroke();
      rect(this.x, this.y, this.size, this.size);
    }
  };
}


function winMouse() {
  confetti = [];       // Clear confetti when restarting
  resetGame();         // Reset game variables
  state = "instructions"; // Go back to instructions
}
