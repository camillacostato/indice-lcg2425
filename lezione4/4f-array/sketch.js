//ARRAY 
let button;
let elem;
let dice = 1;
//creo array
let numbers = [ 1, 2, 5, 79]; //esempio
//essendo collezione ordinata di elementi possiamo accedere ad elementi di array tramite indice --> se voglio il primo el faccio numbers[0] | --> 1 numbers[1]--> 2
//#elem = 4, 0 --> #elem -1, 0 --> 3
let colors = ["red", "green", "hotpink", "blue", "orange", "yellow"]
//#elem=6, 0 --> #elem -1, 0 --> 5 | colors [0]=rosso, colors [3]=blu 
//color.lenght == 6

function setup() {
  elem = createElement("h2","Keep rolling");
  elem.position (50,0);
  createCanvas(400, 400);
  button = createButton ("roll the dice");
  button.position(50,100);
  button.mousePressed(rollDice);
}

function draw() {
  background("lightblue");
  stroke("white");
  strokeWeight(1);

  //corrispondenza
  //1 rosso
  //2 verde
  //3 rosa
  //4 blu
  //5 arancione
  //6 giallo
  // così troppo lungo e verboso
  // let color;
  // if (dice ==1) {
  //   color ="red";
  // } else if (dice ==2) {
  //   color ="green"
  // } else {
  //   color ="yellow"
  // }
  let color = colors[dice-1];
  fill(color);
  textSize(50);
  text("Dice value " + dice, 50,200); //spazio a fine stringa separa poi dice dal testo 
}

function rollDice (){
  dice= random(1,6);
  //voglio solo numeri interi
  // dice =floor(dice); //arrotonda per difetto
  dice=ceil(dice); //arrotonda per eccesso 
}


