let xsize = 400;
let ysize = 400;

function setup() {
  createCanvas(xsize, ysize);
}

function draw() {
  // sfondo blu scuro = cielo
  background("darkblue");
  // disegno la luna
  fill("white");
  stroke("yellow");
  strokeWeight(10);
  circle(360, 40, 80)
  // prato
  fill("darkgreen");
  strokeWeight(0);
  rect(0, 200, 400, 200);
  // casette
  fill("white");
  stroke("black");
  strokeWeight(3);
 
  //fatte a mano
  /* 
  rect(0, 150, 50, 50);
  rect(100, 150, 50, 50);
  rect(200, 150, 50, 50);
  rect(300, 150, 50, 50); 
  */
  
  let x_casa=0;
  let y_casa=150;
  let w_casa=50;
  let h_casa=50;

  rect(x_casa, y_casa, w_casa, h_casa);
  //tetto
  fill("red");
  /*
  stroke("black");
  strokeWeight(3); 
  info acquisite già dalle casette
  */

  triangle(x_casa,y_casa,x_casa+w_casa,y_casa,x_casa+(w_casa/2),y_casa/1.5);

  for (let i=0; i<5; i=i+1) {
    x_casa= x_casa+100;
    fill("red");
    triangle(x_casa,y_casa,x_casa+w_casa,y_casa,x_casa+(w_casa/2),y_casa/1.5);
    fill("white");
    rect(x_casa, y_casa, w_casa, h_casa);
  }
  
  // tetti
  /*fatti a mano
  fill("red");
  stroke("black");
  strokeWeight(3);
  triangle (0, 150, 50, 150, 25, 100);
  triangle (100, 150, 150, 150, 125, 100);
  triangle (200, 150, 250, 150, 225, 100);
  triangle (300, 150, 350, 150, 325, 100);
  */
}