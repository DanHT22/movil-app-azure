const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas
canvas.width = canvas.parentElement.offsetWidth;
canvas.height = canvas.parentElement.offsetHeight;

let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = 2;
const radius = 20;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar un círculo
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = '#ffd700';
  ctx.fill();
  ctx.closePath();

  // Actualizar posición
  x += dx;
  y += dy;

  // Rebotar en los bordes
  if (x + radius > canvas.width || x - radius < 0) dx = -dx;
  if (y + radius > canvas.height || y - radius < 0) dy = -dy;

  requestAnimationFrame(animate);
}

animate();