const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const colors = ["#ff6b8b", "#ffdde1", "#a496c9", "#e5daf3", "skyblue", "#ffeb3b"];
const confettiCount = 120;
const confettiPieces = [];

class Confetti {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * -height;
    this.size = Math.random() * 8 + 6;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 3 + 2;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 4 - 2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;

    if (this.y > height) {
      this.y = -20;
      this.x = Math.random() * width;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation * Math.PI / 180);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

for (let i = 0; i < confettiCount; i++) {
  confettiPieces.push(new Confetti());
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  confettiPieces.forEach(piece => {
    piece.update();
    piece.draw();
  });
  requestAnimationFrame(animate);
}

animate();
