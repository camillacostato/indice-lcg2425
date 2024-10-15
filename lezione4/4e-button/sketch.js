let button;
let elem;
let dice=1;

function setup() {
  elem = createElement("h2","Keep rolling");
  elem.position (50,0);
  createCanvas(windowWidth, windowHeight);
  button = createButton ("roll the dice");
  button.position(50,100);
  button.mousePressed(rollDice);
}

function draw() {
  background("lightblue");
  stroke("white");
  strokeWeight(1);
  fill("white");
  textSize(30);
  text("Dice value " + dice, 50,200); //spazio a fine stringa separa poi dice dal testo 
}

function rollDice (){
  dice= random(1,6);
  //voglio solo numeri interi
  //dice =floor(dice); //arrotonda per difetto
  dice=ceil(dice); //arrotonda per eccesso 
}