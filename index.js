function setup() {
  createCanvas(400, 400);
  background(255);
  stroke(0);

  let cx = width / 2;
  let cy = height / 2;
  let r = 100;

  drawMidpointCircle(cx, cy, r);
}

function drawMidpointCircle(cx, cy, r) {
  let x = 0;
  let y = r;
  let d = 1 - r; // esta es la desicion final

  drawCirclePoints(cx, cy, x, y);

  while (x < y) {
    x++;
    if (d < 0) {
      d = d + 2 * x + 1;
    } else {
      y--;
      d = d + 2 * (x - y) + 1;
    }
    drawCirclePoints(cx, cy, x, y);
  }
}

function drawCirclePoints(cx, cy, x, y) {
  point(cx + x, cy + y);
  point(cx - x, cy + y);
  point(cx + x, cy - y);
  point(cx - x, cy - y);
  point(cx + y, cy + x);
  point(cx - y, cy + x);
  point(cx + y, cy - x);
  point(cx - y, cy - x);
}
