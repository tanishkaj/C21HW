var bullet, wall;
var speed, weight;
var height = 1200;
var thickness;
var damaging;

function setup() {
  createCanvas(1600,height);

  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83)

  bullet = createSprite(50,200,100,25);
  wall = createSprite(1300,200,thickness,height/2);
}

function draw() {

  background("black");  

  bullet.velocityX = speed;
  bullet.shapeColor = color("white");

  wall.shapeColor = color("brown");

  if (bullet.isTouching(wall)) {
    bullet.velocityX = 0;
    damage();
  }

  drawSprites();
}

function damage(){
  damaging = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  
  if (damaging < 10) {
    bullet.shapeColor = color("green"); 
  }

  if (damaging > 10) {
    bullet.shapeColor = color("red");
  }

}

