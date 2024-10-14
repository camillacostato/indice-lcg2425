//definire le variabili, sono globali, entrambe le funzioni hanno visibilità delle variabili

let canvaXmax=500; 
let canvaYmax=500;

function setup() {
  createCanvas(canvaXmax, canvaYmax);
  background("hotpink");
}
//se background fosse in set up quando la pagina riparte a caricare crea un nuovo testo (perché esegue la funzione draw) su quello pre esistente che rimane lì rendendo impossibile la lettura di testi sovrapposti. se metto invece la funzione creazione del background in draw fa si che ogni volta che provo a disegnare (si esegue) ricrea da capo lo sfondo con sopra la scritta, la differenza è che nel secondo caso si crea da capo ogni volta da zero

function draw() {

  textSize(15);
  let string_toprint="Mouse x="+mouseX+", y="+mouseY;
  //stringa definita da " "
  //+ serve per fare concatenazione
  //quindi è " " (per testo decorativo) + variabile (mouseX)
  //variabile mouseX contiene la x di dove si trova il mouse, lo stesso mouseY

/* TESTO 
  fill("yellow");
  textSize(50);
  strokeWeight(0);
  text(string_toprint, 20, 60);
*/

  strokeWeight(2);
  line(0, mouseX, canvaXmax, mouseY);

  //feedback tasto mouse SX
  //disegnare la linea gialla se schiacciamo il mouse
  //p5 --> true, se il mouse schiacciaro, altrimenti false
  if(mouseIsPressed == true) {
    //come valori: LEFT, RIGHT CENTER
    if(mouseButton == RIGHT) {
      backkground("hotpink");
    } 
    stroke("black");
  } else{
    //altrimenti nero
    stroke("white");
  }



}
