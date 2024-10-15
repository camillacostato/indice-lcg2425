function setup() {
  createCanvas(400, 400);
  rectMode(CENTER); //coordinate di rif centrali e non più del punto in alto a sx
}

function draw() {
  background("lightblue");
  strokeWeight(1);
  fill("hotpink"); 
  // translate(100,100);
  translate(mouseX,mouseY);
  rect(50, 50, 100, 50);
  // --> rect in realtà a 50+100 50+100
  fill("purple");
  rect(0,0, 200,30);
  strokeWeight(5);
  point(0,0);
  point(50,50);
}
