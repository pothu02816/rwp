var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(40,90);
  weight=random(400,1600);

  car=createSprit(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);

  wall.color(800,800,800); 

  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}