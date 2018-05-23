const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

// Cases 37-40 are the arrow keys. 
document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 37:
      xv = -1;
      yv = 0;
      break;
    case 38:
      xv = 0;
      yv = -1;
      break;
    case 39:
      xv = 1;
      yv = 0;
      break;
    case 40:
      xv = 0;
      yv = 1;
      break;
  }
});

xv = 0;
yv = 0;
px = 10;
py = 10;
gs = 20;
tc = 20;
ax = 15;
ay = 15;
trail = [];
tail = 5;

setInterval(game, 1000/20);

function game() {
  px += xv;
  py += yv;
  if (px < 0) {
    px = tc-1;
  }
  if (px > tc-1) {
    px = 0;
  }
  if (py < 0) {
    py = tc-1;
  }
  if (py > tc-1) {
    py = 0;
  }
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);

  ctx.fillStyle = "white";
  for (let i = 0; i < trail; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
    if (trail[i].x == px, trail[i].y == py) {
      tail = 5;
    }
  }

  trail.push({x:px, y:py});
  while (trail.length > tail) {
    trail.shift();
  }

  if (ax == px, ay == py) {
    tail++;
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
  }
}