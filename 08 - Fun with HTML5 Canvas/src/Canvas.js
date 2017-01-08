const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Returns a drawing context on the canvas (here, in 2D):
const ctx = canvas.getContext('2d');

let isDrawing = false;
let endX = 0;
let endY = 0;
let hue = 0;
let direction = true;

ctx.lineWidth = 1;
ctx.lineCap = "round";
// Colour of the line:
// HSL = hue, saturation, lightness

function draw(event) {
  if (!isDrawing) return;
  // Here are the useful canvas methods required to draw:
  ctx.beginPath();
  // Start point:
  ctx.moveTo(endX, endY);
  // End point:
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [endX, endY] = [event.offsetX, event.offsetY];

  // Tinkering with variable lineWidth and hue:
  if (ctx.lineWidth > 30 || ctx.lineWidth < 2) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
  console.log(direction);
  console.log(ctx.lineWidth);
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  ctx.strokeStyle = `hsl(${hue}, 50%, 50%)`;
}

// Draw while the mouse is moving...
canvas.addEventListener('mousemove', draw);
// Unless any of the following dictate we shouldn't be drawing:
canvas.addEventListener('mousedown', function(event) {
  isDrawing = true;
  [endX, endY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
