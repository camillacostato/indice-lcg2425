let xsize = 1000;
let ysize = 500;

function setup() {
  createCanvas(xsize, ysize);
}
function draw() {
  //cielo
  background('#5f84a2');
  //prato 
  fill('#3a5a40');
  rect(0,200,xsize,300);

  //rotaie
  fill('rgb(152, 118, 84)');
  stroke("black");
  strokeWeight(1); 

  let x_bin=20;
  let y_bin=450;
  let w_bin=102.5;
  let h_bin=15;
  
  rect(x_bin, y_bin, w_bin, h_bin);

  for (let i=0; i<7; i=i+1) {
    x_bin= x_bin+122.5;
    fill('rgb(152, 118, 84)');
    stroke("black");
    strokeWeight(1);
    rect(x_bin, y_bin, w_bin, h_bin);
    ;
  }

  //vagoni
  fill('#8C8C8C');
  stroke("black");
  strokeWeight(1); 
  let x_vag=160;
  let y_vag=250;
  let w_vag=210;
  let h_vag=160;
  rect(x_vag, y_vag, w_vag, h_vag);

  for (let i=0; i<2; i=i+1) {
  x_vag= x_vag+230;
  fill('#8C8C8C');
  rect(x_vag, y_vag, w_vag, h_vag);
  }
  

  //finestrini
  fill('#5f84a2');
  stroke("black");
  strokeWeight(1); 

  let x_fin=x_vag+10;
  let y_fin=y_vag+10;

  /*
  se invece lo metto con valori
  let x_fin=110;
  let y_fin=260;
  poi nel ciclo quello di reif non è l'ultimo a dx ma il primo e quindi sarà 
  x_fin= x_fin+230
  */

  let w_fin=90;
  let h_fin=90;
  rect(x_fin, y_fin, w_fin, h_fin);

  for (let i=0; i<2; i=i+1) {
    x_fin= x_fin-230; //vedi nota sopra
    fill('#5f84a2');
    rect(x_fin, y_fin, w_fin, h_fin);
    rect(x_fin+100, y_fin, w_fin, h_fin);
    }

    //ruote
    fill('#BFBFBD');
  stroke("black");
  strokeWeight(1); 

  let x_ru=x_vag+55;
  let y_ru=y_vag+170;
  let d_ru=60;
  circle(x_ru, y_ru, d_ru);
  circle(x_ru+100, y_ru, d_ru);

  for (let i=0; i<2; i=i+1) {
    x_ru= x_ru-230;
    fill('#BFBFBD');
    circle(x_ru, y_ru, d_ru);
    circle(x_ru+100, y_ru, d_ru);
    
    }

    //realizzo vagone davanti
    fill('#3a5a40');
    stroke('rgb(86, 125, 70)');
    strokeWeight(0); 

    rect(x_vag+110, y_vag-10, w_vag/2, h_vag-60)

    //ricreo bordo scomparso
    stroke("black");
    strokeWeight(1);
    line(x_vag+110, y_vag,x_vag+110,y_vag+90);
    line(x_vag+110,y_vag+90,x_vag+210,y_vag+90 );

    //camino
    fill('#8C8C8C');
    rect(x_vag+140, y_vag+40, 40, 50);
    triangle(x_vag+140, y_vag+40,x_vag+180, y_vag+40, x_vag+160, y_vag+15);

    //faro
    fill(250, 207, 67); 
    arc(x_vag+210, y_vag+115, 25, 25, HALF_PI, HALF_PI+PI);
    
    //riflesso
    stroke('#91aec4');
    strokeWeight(7);
    line(x_vag+60, y_vag+20,x_vag+87.5,y_vag+60);
    line(x_vag+50, y_vag+30,x_vag+65,y_vag+50);
  
    for (let i=0; i<2; i=i+1) {
      x_vag= x_vag-230;
      fill("white");
      line(x_vag+60, y_vag+20,x_vag+90,y_vag+60);
      line(x_vag+50, y_vag+30,x_vag+65,y_vag+50);
      line(x_vag+60+100, y_vag+20,x_vag+90+100,y_vag+60);
      line(x_vag+50+100, y_vag+30,x_vag+65+100,y_vag+50);
}

      //montagne
      let x_mont=-40
      fill('#5E4B49');
      strokeWeight(0);
      triangle(x_mont,200, x_mont+200, 200, x_mont+100, 20);

      fill('#81756e');
      strokeWeight(0);
      triangle(x_mont+150,200, x_mont+350, 200, x_mont+250, 80);

      for (let i = 0; i<3; i= i+1) {  
        x_mont = x_mont+300;
        fill('#5E4B49');
        strokeWeight(0);
        triangle(x_mont, 200, x_mont + 200, 200, x_mont + 100, 20);
        fill('#81756e');
        strokeWeight(0);
        triangle(x_mont + 150, 200, x_mont + 350, 200, x_mont + 250, 80);
      }
      
      //luce
      fill(250, 207, 67, 120); 
      triangle(x_vag+210*3+40, y_vag+115, 1000, y_vag+115+60, 1000, y_vag+115-60);
}

