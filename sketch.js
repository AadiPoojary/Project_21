var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2);

  speed = random(223,321);

  bullet = createSprite(50, 200, 30, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  weight = random(30,52);
}

function draw() {
  background(0);

  if(hasCollided(bullet,wall)) {
    
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if(damage > 10) {
      wall.shapeColor = color(255,0,0);
    }

    if(damage < 10) {
      wall.shapeColor = color(0,255,0);
    }
  }

  if(bullet.isTouching(wall)) {
    bullet.velocityX = 0;
  }

  drawSprites();
}