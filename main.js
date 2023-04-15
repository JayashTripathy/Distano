let CANVAS;
let ANGLE = 0;
let ANGLE_TO_REFERENCE_POINT = 0;



function main() {
  CANVAS = document.getElementById("mainCanvas");

     CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;

 

  window.addEventListener("deviceorientation", onOrientationCange);
}

function onOrientationCange(event) {
  ANGLE = event.alpha;
  const offset = -Math.PI/2;
  const fixedAngle= (ANGLE - ANGLE_TO_REFERENCE_POINT) * Math.PI/ 180 + offset;
  const rad = Math.min(CANVAS.width, CANVAS.height) * 0.25;

  const movingTip = {
    x: CANVAS.width / 2 +  Math.cos(fixedAngle)*rad,
    y: CANVAS.height / 2 + Math.sin(fixedAngle)*rad,
  };

  const ctx = CANVAS.getContext("2d");
   ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);

   
   ctx.beginPath();
   ctx.fillStyle = "orange";
  
   if(movingTip.x > CANVAS.width/2) {

     ctx.arc(CANVAS.width/2, CANVAS.height/2, rad, offset, fixedAngle);
    }else{
      ctx.arc(CANVAS.width/2, CANVAS.height/2, rad, offset, fixedAngle, true);

    }

    if(movingTip.y > CANVAS.height/2) {
      ctx.fillStyle ="red"
    }
   ctx.lineTo(CANVAS.width/2, CANVAS.height/2);
   ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(CANVAS.width / 2, CANVAS.height / 2);
  ctx.lineTo(CANVAS.width / 2, CANVAS.height / 2 - rad);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "orange";
  
  ctx.moveTo(CANVAS.width / 2, CANVAS.height / 2);
  ctx.lineTo(movingTip.x, movingTip.y);
  ctx.stroke();

 
}

function reset() {
  ANGLE_TO_REFERENCE_POINT = ANGLE;
}
