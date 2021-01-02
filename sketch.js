let x;
let y;
var img;


let xSpeed;
let ySpeed;
function preload(){
 img = loadImage('images/dvd_logo.png'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xSpeed = 3;
  ySpeed = 3;
}

function draw() {
    colorMode(RGB);

  background(0);
  image(img,x,y);
  x = x + xSpeed;
  y = y + ySpeed;
  if( x + img.width >= width){
    xSpeed =-xSpeed;
    x = width - img.width;
    tint( random(255),  random(255),  random(255));
  }else if ( x <= 0){
     xSpeed =-xSpeed;
    x = 0;
    tint( random(255),  random(255),  random(255)); 
  }
  if (y + img.height >= height){
    ySpeed = -ySpeed;
    y = height -  img.height;
    tint( random(255),  random(255),  random(255));
  }else if ( y <= 0){
     ySpeed = -ySpeed;
    y = 0;
    tint( random(255),  random(255),  random(255));
  }

}