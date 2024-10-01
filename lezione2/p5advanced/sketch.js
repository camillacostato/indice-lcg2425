//definisco variabili "globali", visibili e usabili in tutto lo script perché fuori dalle funzioni. definiscono le dimensioni max del mio canva --> vado a mettere nella funzione setup createCanvas le variabili così per cambiare la sua dimensione non cambio nella funzione ma vario solo la variabile globale iniziale

let xsize = 400;
let ysize = 400;

function setup() {
  createCanvas(xsize, ysize);
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
  // prima della forma desiderata dobbiamo cambiare i parametri di fill e stroke
  //FARE 1 fill 2 stroke 3 forma
  // prato
  fill("green");
  stroke("darkgreen");
  strokeWeight(5);
  rect(0, 200, 400, 200);
  // stelle
  stroke("yellow"); //un punto non è un cerchio, non ha riempimento, per cui per cambiare colore devo usare stroke e non fill

  //gioco con variabili e somme
  strokeWeight(30);
  let xStars_prim = 10;
  let yStars_prim = 20;
  point(xStars_prim, yStars_prim);
  /* 
  point(xStars_primordiale, yStars_primordiale);
  // aggiungo altra stella 
  point(xStars_primordiale+60, 100);
  point(100, 60);
  point(75, 30); 
  */

  //ora le disegno algoritmicamente, non più a mano
  //costrutto for è un loop 
  // i = i + ... è il passo del loop/ciclo
  let passo=1
  /* for (init; test; update) {corpo} --> test e corpo sono le uniche parti obbligatorie. update è un modo pratico per definire il ciclo come varia 
  */
  for (let i=0; i<50; i = i+passo) { 
    strokeWeight(i*3);
    if (i%2===0) { //mi chiedo se i diviso per due faccia 0 <-- quindi sia pari % = "modulo"
      //numeri pari
        stroke("yellow");
    } else {
        //numeri dispari
        stroke("pink");
    }
    point (xStars_prim*i, yStars_prim+i);
  }
  


  // scritta 
  fill("white");
  stroke(0);
  strokeWeight(2);
  textSize(15);
  text("C'era una volta...",270,380)
}
