var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ball2,ground2;
var ball1,ground1,ball3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground2Sprite=createSprite(width/2, height-115, width,10);
	ground2Sprite.shapeColor=color("white")
	
	ball1 = createSprite(300,630,20,100);
	ball3 = createSprite(500,630,20,100);
	ball2 = createSprite(400,670,200,20);

	ball1.shapeColor=color("red")
	ball3.shapeColor=color("red")
	ball2.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	ground1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground1);
	 ground2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground2);


	 ball1 = Bodies.rectangle(width/2, 500, width, 5 , {isStatic:true});
 	World.add(world, ball1);
	 ball2 = Bodies.rectangle(width/2, 600, width, 5 , {isStatic:true});
 	World.add(world, ball2);
	 ball3 = Bodies.rectangle(width/2, 400, width, 5 , {isStatic:true});
 	World.add(world, ball3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

    Matter.Body.setStatic(packageBody,false);

    
  }
}



