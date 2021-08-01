var iron, irom_running, iron_collided;
var bg, bgImage, edges;


function preload(){
  irom_running =  loadAnimation("images/iron.png","images/iron.png","images/iron.png");
  bgImage = loadImage("images/bg.jpg");
}

function setup() {
  createCanvas(1100, 600);
  edges = createEdgeSprites();
  
  bg = createSprite(580,300);
  bg.addImage(bgImage);
  bg.scale = 2;
  bg.velocityY = 5;
  
  iron = createSprite(200,505,20,50);
  iron.addAnimation("running", irom_running);
  iron.scale =0.3;

  // ​iron.debug = true;
  iron.setCollider("rectangle", 100, -50, 400, 410);
  
  ground = createSprite(200,585,1500,10);
  
  
  ground.visible = false;
}

function draw() {

  if(bg.y > 900){
    bg.y = bg.width/4
  }
  // background(bgImage);
 
  {
    if(keyDown("space") ) {
      iron.velocityY = -5;
    }

    if(keyDown("left")) {
      iron.velocityX = -5;   
    }

    if(keyDown("right")) {
      iron.velocityX = 5;
    }

    if(keyDown("up")) {
      iron.velocityY = -5;
    }
  }


{
  iron.bounceOff(edges[0]);
  iron.bounceOff(edges[1]);
  iron.bounceOff(edges[2]);
  iron.bounceOff(edges[3])
}

  // setCollider("rectangle", , , , ) 

  iron.velocityY = iron.velocityY + 0.5;
  iron.velocityX = iron.velocityX - 0.5;
  iron.collide(ground);


  drawSprites()
}
