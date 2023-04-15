let CANVAS;
let ANGLE;



function main() {
  CANVAS = document.getElementById("mainCanvas");

     CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;

 

  window.addEventListener("deviceorientation", onOrientationCange);
}

function onOrientationCange(event) {
  const offSet = Math.PI/2;
  const fixedAngle = (ANGLE * Math.PI) / 180 + offSet;
  ANGLE = event.alpha;
  const rad = Math.min(CANVAS.width, CANVAS.height) * 0.25;

  const ctx = CANVAS.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(CANVAS.width / 2, CANVAS.height / 2);
  ctx.lineTo(CANVAS.width / 2, CANVAS.height / 2 - rad);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "orange";
  const movingTip = {
    x: CANVAS.width / 2 + rad * Math.cos(fixedAngle),
    y: CANVAS.height / 2 - rad * Math.sin(fixedAngle),
  };
  ctx.moveTo(CANVAS.width / 2, CANVAS.height / 2);
  ctx.lineTo(movingTip.x, movingTip.y);
  ctx.stroke();

 
}
