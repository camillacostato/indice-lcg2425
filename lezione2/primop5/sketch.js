function setup() {
  createCanvas(400, 400);
}

  //SEMPRE E SOLO UNA FUNZIONE DRAW contenente tutte le forme
function draw() {
  // sfondo blu scuro = cielo
  background("darkblue");
  // disegno la luna
  fill("yellow");
  // contorno della luna, vado ad aumentare a parte il suo spessore per creare una sfumatura 
  stroke("white");
  strokeWeight(10);
  circle(300, 75, 100)
  // prato 
  // prima della forma desiderata dobbiamo cambiare i parametri di fill e stroke
  //FARE 1 fill 2 stroke 3 forma
  fill("green");
  stroke("darkgreen");
  strokeWeight(5);
  rect(0, 200, 400, 200);
  fill("white");
  stroke(0);
  strokeWeight(2);
  textSize(15);
  text("C'era una volta...",270,380)
}
