var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  collisionDetection(movingRect,fixedRect);
  drawSprites();
}

function collisionDetection(m,o)
{
  if (m.x - o.x < o.width/2 + m.width/2
    && o.x - m.x < o.width/2 + m.width/2) 
    {
  m.velocityX = m.velocityX * (-1);
  o.velocityX = o.velocityX * (-1);
 }
if (m.y - o.y < o.height/2 + m.height/2
  && o.y - m.y < o.height/2 + m.height/2){
  m.velocityY = m.velocityY * (-1);
  o.velocityY = o.velocityY * (-1);
 }
}