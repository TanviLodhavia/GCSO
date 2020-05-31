var car,car2,car3,car4;
var wall,wall2,wall3,wall4;
var border,border2,border3;
var speed,weight;

function setup() {
  createCanvas(680,680);
  speed=random(10,40);
  weight=random (400,1200);
  car=createSprite(50,85,50,50);
  car.velocityX= speed;
  wall=createSprite(630,85,60,130);
  border=createSprite(340,170,width,5);
  car2=createSprite(50,255,50,50);
  car2.velocityX= speed;
  wall2=createSprite(630,255,60,130);
  border2=createSprite(340,340,width,5);
  car3=createSprite(50,425,50,50);
  car3.velocityX= speed;
  wall3=createSprite(630,425,60,130);
  border3=createSprite(340,510,width,5);
  car4=createSprite(50,595,50,50);
  car4.velocityX= speed;
  wall4=createSprite(630,595,60,130);

}

function draw() {
  background("yellow"); 
  car.collide(wall);
  car2.collide(wall2);
  car3.collide(wall3);
  car4.collide(wall4);
  drawSprites();
}
