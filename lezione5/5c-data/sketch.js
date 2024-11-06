let riversData;
//matrice --> array di array
//array indicizzabili da 0 N-1
//sia per le righe (0--100)
//sia per le colonne (0--11)
//colonna dei nomi è 1
//colonna/array di nomi è
let arrayOfNames = []; //per ora la lascio vuota, preccesso i dati e poi si riempirà essendo dinamica la array
let lunghezze =[];

function preload(){
  riversData = loadTable("../../assets/rivers-data-reduced.csv");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //fissare index colonna a 1 e scorrere le righe
  //per scorrere le righe (iterare operazione) in java 
  for(let r=1; r < riversData.getRowCount() ; r++){
    //accedere all'elemento (r,1)
    //salvare il nome dell'array
    arrayOfNames[r] = riversData.get(r,1);
    lunghezze.push(Number(riversData.get(r,3)));
  }
  noLoop();
  // //per scorrere nell'interezza la tabella
  // for(let r=0; riversData.getRowCount(); r++){
  //   for(let c=0; riversData.getColumnCount(); c++){
  //     //x ogni riga
  //     //scorri ogni colonna
  //     riversData.get(r,c);
  //   }
  // }
  angleMode(DEGREES);
}

function draw() {
  background(220);
  textSize(50);
  text("Rows "+riversData.getRowCount(),20,400);
  text("Cols "+riversData.getColumnCount(),20,450);
  text(riversData.get(0,3),20,500);
  textSize(10);
  //asse x e asse y
  stroke(155);
  strokeWeight(2);
  let xMin = 40;
  let xMax =390;
  let yMin = 20;
  let yMax = 200;
  //asse y, fissata una x variato y
  line(xMin,yMax,xMin,yMin);
  //asse x
  line(xMin, yMax, xMax ,yMax);
  //aggiungere label asse y
  //label assy y (ruotata)
  push();
  noStroke();
  textSize(20);
  translate(20,100);
  rotate(-90);
  text("Len", 0,0);
  pop();

  //aggiungere label asse x
  noStroke();
  textSize(20);
  text("River", 150, 220);


  //ridefinire una scala di rappr
  //map 
  //scorrere tutte le lunghezze
  //mostrarle sul grafico
  strokeWeight(10);
  stroke(0);
  for(let i=0; i<lunghezze.length ; i++){
    //map --> valore, intervallo iniziale,
    //intervallo di destinazione
    //intervallo iniziale (0, lunghezze.length)
    //intervallo destinazione (xMin, xMax)
    let x = map(i,0, lunghezze.length, xMin+5, xMax);
    //intervallo di inizio 
    //intervallo di destinazione
    let y = map(lunghezze[i], min(lunghezze), max(lunghezze),yMax, yMin);
    // noStroke();
    // text(y,x,x);
    // strokeWeight(5);
    point(x,y);
  }

  //vorrei mostrare tutta la colonna
  // let yPos = 30;
  // for(let i=1; i < arrayOfNames.length; i++){
  //   text(arrayOfNames[i], 100, yPos);
  //   yPos += 20;
  // }
}
