var flor
var ceu
var x = 0;
var state = 0;
var font,img;
var n = 50;

function preload() {
  font = loadFont('Highest.otf')
  img=loadImage('cloud-to-be-labelled-hi.png')
}

function setup() {
  //createCanvas(1000,1000);
  createCanvas(window.innerWidth, window.innerHeight);
  ceu = new back();
  flor = new flower(width / 2, height / 2, height * 0.1);
  flor.setup();
  ceu.setup();
  textFont(font);
  textAlign(CENTER);
  print(window.innerHeight);
  //fill(255);
}

function draw() {
  let siz = 0.12
  //background(0);
  //ellipse(x,200,20);
  ceu.draw(img);
  flor.draw(n);
  fill(0);
  if (n >= 1) {
    if (state % 2 == 0) {
      push();
      noStroke();
      textSize(height*siz);
      text('Bem me quer', width / 2, height * 0.2);
      textSize(height*0.04);
      text('Clique na tela para fazer o teste', width / 2, height * 0.9);
      pop();

    } else {
      push();
      noStroke();
      textSize(height*siz);
      text('Mal me quer', width / 2, height * 0.2);
      textSize(height*0.04);
      text('Clique na tela para fazer o teste', width / 2, height * 0.9);
      pop();
    }
  } else {
    push();
    noStroke();
    textSize(height*siz);
    text('Bem me quer', width / 2, height * 0.2);
    fill(0,0,0,x)
    text('Te amo gata', width / 2, height * 0.8);
    textSize(height*0.03);
    text('Feliz aniversario de 2 anos, 09/06/2019', width / 2, height * 0.9);
    x+=1
    pop();
  }
  //fill(255,0,0);
  //ellipse(x,height/2,50);
  //print(x);



}
function mousePressed() {
  state++;
  n--;

}


