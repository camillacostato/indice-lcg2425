let angle = 5
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  //drawRotateBasketBall (angle);
  angle += 0.7;
  drawBasketBall(100,100,50);
  drawRotateBasketBall(200,200,100,angle);
  
}

  function drawRotateBasketBall (xCenter, yCenter, dBall, angle) {
  push(); //quando voglio trasformare isolatamente uso push e pop 
  //corpo trasformazione
  rotate(angle);
  drawBasketBall(xCenter,yCenter,dBall);
  pop();
}

  // function idFunzione (<lista dei parametri) {corpo della funzione }
  function drawBasketBall (xCenter, yCenter, dBall) {
    //palla da basket
    fill (255,165,0);
    stroke(0);
    strokeWeight(3);
    circle(xCenter,yCenter,dBall);
    line(-50+xCenter, 0+yCenter, 50+xCenter, 0+yCenter);
    line(-35+xCenter, -35+yCenter, 35+xCenter, 35+yCenter);
    line(-35+xCenter, 35+yCenter, 35+xCenter, -35+yCenter);
    line(0+xCenter, -50+yCenter, 0+xCenter, 50+yCenter);
  }




