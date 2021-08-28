var bg,bgImg;
var sleep,sleepImg;
var bath,bathImg, eat,eatImg;
var drink,drinkImg, gym,gymImg;
var move,moveImg , brush,brushImg;

function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadImage("images/sleep.png");
  brush = loadImage("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
 move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png");


}


function setup() {
  createCanvas(400, 400);


astronaut=createSprite(300,250,20,20);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale=0.1;


}

function draw() {
  background(0);
edges=createEdgeSprites();
astronaut.collide(edges);

  drawSprites()
}   