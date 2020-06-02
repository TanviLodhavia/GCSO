var car;
var wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(50,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocityX= speed;
  wall=createSprite(1500,200,60,130);
  }

function draw() {
  background("yellow"); 
  if(wall.x-car.x <(car.width+wall.width)/2)
  {deformation=0.5*speed*speed*weight/22500;
  car.velocityX=0;
  if (deformation <100){
    car.shapeColor="green";
  }
  if (deformation <180 && deformation>100){
    car.shapeColor="orange";
  }
  if (deformation >180){
    car.shapeColor="red";
  }
};
  
  drawSprites();
}
