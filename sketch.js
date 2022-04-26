
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var rightSide;
var leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1100, 600, 20, 120);
	rightSide = new Ground(800, 600, 20, 120)

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200, 100, 20, ball_options);
	
	World.add(world,ball);
	Engine.run(engine);
}


function draw() {
	background(0);

	groundObj.show();
	rightSide.show();
	leftSide.show();
	ellipse(ball.position.x, ball.position.y, 20);

	rectMode(CENTER);
	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}