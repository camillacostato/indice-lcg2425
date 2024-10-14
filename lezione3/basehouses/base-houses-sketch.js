//variabili globali
let canvasXMax=400, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
let slider;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  //slider (min, max, valore inizializzazione, step)
  slider = createSlider(0, 255, 0, 1);
  slider.position(0,canvasYMax-60);
  slider.size(200); //lunghezza visualizzazione, tra 0 e 255
}
function draw() {
  background("navy");
  //frame rate 
  frameRate(5);
  //moon
  colorMode(RGB);
  fill(255, 255, 0, 200);
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(moonXpos, 50, 100)
  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(moonXpos+50, 50,100);
  
  
  //metodo aggiornamento 1
  /*moonXpos= moonXpos+1;
  //condizionalmente se la luna esce dai bordi 
  if (moonXpos>canvasXMax){ //usciamo dal foglio = posizione luna > dimensione massima del foglio 
    moonXpos=0;
    //alternativa per creare altre animazioni moonXpos= moonXpos -50 o 100 etc.
  } */

  //metodo di aggiornamento 2
  //continua ad aggiungere uno per ogni frame disegnato
  moonXpos=(frameCount*5 +700)% canvasXMax; //disaccoppiare le velocità di aggiornamento di elementi diversi 
  //che continuerà ad aumentare a meno che lo fermi, voglio definire dei limiti tramite l'operatore di modulo (che è particolare in js) che da il resto della divisione intera 
  //framecount parte da 1
  // 1 % 400 --> 1 diviso 400 = 0 (divisione intera) resto = 1
  // 2 % 400 --> 2 diviso 400 = 0 (divisione intera) resto = 2
  // numero / 2 --> resto è 0; numero % 2 == 0 
  // numero = 400
  // numero % 2 --> 0
  // modulo operatore che aiuta a delinare se numero è pari o dispari, o numero entro certi confini 
  // codice per qualcosa che continua a rimanere nei confini 

  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 100, house_width=100;
  for(let numero_case=0; numero_case<3; numero_case++){
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
    fill("red");
    let roof_height=80;
    triangle(x_casa, y-house_height , x_casa+house_width, y-house_height, x_casa+(house_width/2), y-house_height-roof_height);
    x_casa += house_width+30;
  }

  //x_casa ora vale (house_width+30)*3 --> vale 390 alla fine del loop !!!!
  x_casa= 0;
  //rollover --> agiamo se passiamo sopra
  //if passiamo sopra --> facciamo cose
  // -----------------
  //|                 |
  //|                 |
  // -----------------
  //siamo dentro le x della casa?
  //mouseX > x_casa
  //mouseX < x_casa+house_width
  //siamo dentro le y della casa?
  //mouseY > left_corner
  //mouseY < left_corner+house_height

  // && AND 
  // || OR
  // c1 && c2 --> entrambe vere
  // c1 || c2 --> almeno una vera 
  let left_corner= y-house_height;

  let sliderValue= slider.value(); //slider

  if ((mouseX > x_casa) && (mouseX < x_casa+house_width) && (mouseY > left_corner) && (mouseY < left_corner+house_height
  )){
    //facciamo cose= cambioc colore casa
    fill(sliderValue);
    rect(x_casa, y-house_height , house_width, house_height);
  } else {
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
  }

  //voglio disegnare stelle random
  //numero = numero+1
  //numero += 1
  //numero ++ 
  let xStar=0;
  let yStar=0;
  //voglio generare 5 stelle, devo ripetere un'azione --> for
  //for (init; condizione; update/passo) {corpo del ciclo}
  for (let nS=0; nS < 5; nS++) {
    stroke(random(0, 255), random(0, 255), random(0, 255)); //numero tra 0 e 255 per scala di grigi, dare 3 valori <-- rgb, colori predefiniti in p5
    strokeWeight(random(0, 20));
    point(xStar,yStar);
    //generare stelle random 
    xStar= random(0, canvasXMax);
    yStar= random(0,100);
  }


  // if(frameCount == 50){
  //   noLoop();
  // }

  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  // text(`X=${mouseX}, Y=${mouseY}, ${moonXpos}`, 5, 50);
  text(`${frameCount}`, 5, 50);
}
