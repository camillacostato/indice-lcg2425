//funzione asincrona che disaccoppia caricamento di media o dati, cose che vengono effettuate mentre il browser renderizza la nostra pagina

function preload () {
  //dati e img
  //prende in ingresso una stringa che è il percorso relativo dell'imagine
  //posiz relativa al file html 
  //3b --> lezione 5 --> assets --> nome file
  // ../ --> per uscire dalla cartella e salite di una 
  // -/  --> è questa cartella 
  myImage = loadImage("../../assets/mati1.JPG");
  newImage = loadImage ("../../assets/mati2.JPG")
}

//eseguita once and forever
function setup() {
  createCanvas(400, 400);
}

//eseguita in loop 
function draw() {
  background(220);
  //myImage
  //ora vogliamo mostrare l'immagine
  image(myImage, 0, 0, 500, 500);
  image(newImage, mouseX, mouseY, 300, 300);
  
}
