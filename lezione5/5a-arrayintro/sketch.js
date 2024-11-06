let num = 23;
let num2 = 24;
let arrayNum = [23, 100, 20, 77, 15, 11, 27];
//collezione ordinata (omogenea) di elementi 
let collectionParole = ["oop", "politecnico", "cami", "boss", "emma", "giangi", "fuggire"]; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#6e6259");
  fill(0);
  textSize(30);
  //vedere un elemento dopo l'altro dell'array
  //0 --> max num -1
  let ycoord = 50; 
  for (let i=0; i < arrayNum.length; i++) {
    //arrayNum[i] --> i-th elem of array
    text(collectionParole[i], 20, ycoord); 
    ycoord = ycoord + 50; 
  }
  //ellissi con dimensioni diverse
  noFill();
  for (let i=0; i < arrayNum.length; i++) {
    //dato il valore di arrayNum[i]
    //crerare un ellisse con dimensione basata su lui
    ellipse(50*i+50, 450, arrayNum[i], arrayNum[i] ); 
  }

}
