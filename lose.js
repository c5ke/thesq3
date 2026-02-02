// Array for rain particles
let rain = [];

function drawLose() {
  background(50, 20, 20); // Dark red background

  // LOSE TEXT
  fill(255, 0, 0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("YOU LOST", width / 2, height / 2);

  textSize(20);
  text("Click to Try Again", width / 2, height / 2 + 60);

  for (let i = 0; i < 5; i++) {
    rain.push(newDrop());
  }

  // Update and display rain
  for (let i = rain.length - 1; i >= 0; i--) {
    rain[i].update();
    rain[i].show();

    // Remove raindrops off the screen
    if (rain[i].y > height) {
      rain.splice(i, 1);
    }
  }
}

function newDrop() {
  return {
    x: random(width),
    y: -10,
    len: random(10, 20),
    speed: random(4, 10),

    update: function () {
      this.y += this.speed;
    },

    show: function () {
      stroke(150, 150, 255); // Light blue rain
      strokeWeight(2);
      line(this.x, this.y, this.x, this.y + this.len);
    },
  };
}

function loseMouse() {
  rain = []; // Clear rain when restarting
  resetGame(); // Reset game variables
  state = "instructions"; // Go back to instructions
}
