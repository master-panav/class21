var fixedRect, movingRect
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "yellow"
  bouncedRect = createSprite(400,100,50,50);
  bouncedRect.shapeColor = "pink"
  bouncingRect = createSprite(400,300,50,50)
  bouncingRect.shapeColor = "green"
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "blue"
  bouncedRect.velocityY = 5
  bouncingRect.velocityY = -5

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "yellow"
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "yellow"
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "yellow"
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "yellow"

}

function draw() {
  background(0,0,0);  
  movingRect.y = World.mouseY
  movingRect.x = World.mouseX
  console.log(movingRect.width/2);
  console.log(movingRect.x - fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2)

 if(isTouching(gameObject4,movingRect)){
  movingRect.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
 }


 
  

  bounceOff(bouncedRect,bouncingRect);

  drawSprites();
}

