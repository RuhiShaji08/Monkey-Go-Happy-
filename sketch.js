
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

var PLAY = 1;
var END = 0;  
var gameState = PLAY;

var survivalTime = 0;

function preload(){   
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  monkeyHit = loadAnimation("sprite_1.png")
 
}



function setup() {
  
  createCanvas(400,400);
  
  bananasGroup = createGroup();
  obstaclesGroup = createGroup();
  
//Creating the monkey
  monkey = createSprite(100,315.5,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.addAnimation(monkeyHit)
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
   
 
  
}


function draw() {
  background("white");
      
 
  
   if(gameState === PLAY){
       //jump when the space button is pressed
  if (keyDown("space")&& monkey.y >= 160) {
    monkey.velocityY = -10;
  }
     
   if (ground.x < 0) {
    ground.x = ground.width / 2; 
  }  
    
    monkey.velocityY = monkey.velocityY + 0.8; 
    
  }

    
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: " + score, 500, 50);
  
  stroke("black");
  textSize("20");
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 100, 50);
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
} 

function spawnBananas(){
 // write your code here 
    
  if(frameCount%80 === 0){
     banana = createSprite(400,50,40,30);              
     banana.velocityX = -4;
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.y = Math.round(random(120,200));
     bananasGroup.add(banana);
     banana.lifetime = 100;
     }
  
}
       
function spawnObstacles() {
  if (frameCount % 300 === 0 ) {
    obstacle = createSprite(600, 326.5, 20,60);
    obstacle.velocityX = -3;
    obstacle.addImage(obstaceImage);
    obstaclesGroup.add(obstacle);
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;
    
  }
}