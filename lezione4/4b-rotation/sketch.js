angle = 0 //variabile globale 

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER); //coordinate di rif centrali e non più del punto in alto a sx
  angleMode(DEGREES); //definire come si esprimeranno gli angoli per la rotazione
}

function draw() {
  background("lightblue");
  push(); //permette di fare trasformazioni isolate che non influenzino altri elementi del sidegno | push salva il contesto del disegno (info come anchor point) | pop lo ripristina
  strokeWeight(1);
  fill("hotpink"); 
  // translate(100,100);
  rotate(angle*0.1);
  rect(50, 50, 100, 50);
  pop();

  fill("purple");
  rect(0,0, 200,30);
  strokeWeight(5);
  point(0,0);
  point(50,50);
    
  //to change anchor point --> ora è in alto a sinistra, noi vogliamo il centro della palla
  //translate before
  push();
  translate(200,200);
  rotate(angle); //degree or radians 
  fill("orange");
  circle(0,0,100); //d=100 --> 5=50
  line(0,-50,0,50);
  pop();
  angle = angle + 2
}
