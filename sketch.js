var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redRect1,redRect2,redRect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	platform = createSprite(150, 275, 300, 170);
	platform.shapeColor = "brown"
	redRect1 = new RedZone(800,350,200,20);
	redRect2 = new RedZone(900,310,20,100);
	redRect3 = new RedZone(700,310,20,100);
	
	ball = new Ball(200,50);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	slingshot = new SlingShot(ball.body,{x:200, y:50});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 

 platform.display()
  redRect1.display();
  redRect2.display();
  redRect3.display();
 slingshot.display()
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);			 
		}
    
  }




