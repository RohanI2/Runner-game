function preload(){
boyImage=loadImage("boy.png")
forest=loadImage("forest.png")
logImage=loadImage("log.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 boy=createSprite(100,windowHeight-150,75,75)
 boy.addImage(boyImage);
 boy.scale=0.13
 logGroup=new Group()

 
}
function spawnObstacles(){
    if (frameCount % 100 === 0){
        
      var log = createSprite(windowWidth-50,windowHeight-100,50,10);
      log.velocityX = -6;
      log.addImage(logImage)
    
       
      
       //assign scale and lifetime to the obstacle           
       log.scale = 0.5;
       log.lifetime = 300;
      
      //adding obstacles to the group
      logGroup.add(log);
    }
   }
  
function draw() {
 background(forest)
 spawnObstacles();
 if(keyDown("space")&& boy.y >= 500) {
    boy.velocityY = -17;
 }
 if(boy.isTouching(logGroup)){
     boy.visible=false
 }  
 boy.velocityY=boy.velocityY+0.5
 edges=createEdgeSprites();
 boy.collide(edges[3]);
 drawSprites();
}
