const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world, Test


function preload()
{
   //preload the images here
   Fairy = loadAnimation("images/fairy.png","images/fairy1.png","images/fairy2.png");
   star = addImage("images/star.png");
   starnight = addImage("images/starnight.png");
}

function setup() {
  createCanvas(800, 750);
  

  engine = Engine.create()
  world = engine.world

  var options = {

    isStatic : true
  }
Fairy1 = Bodies.rectangle(200,380,400,20,options);


World.add(world, Test);

var Doptions ={

restituition :1.0
} 

Star1 = Bodies.circle(100,250,20,Doptions);
  
World.add(world, Dummy);
}



function draw() {
  background("black");

  Engine.update(engine);
  rectMode(CENTER);
 rect(Test.position.x, Test.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(Dummy.position.x, Dummy.position.y,20,20);
}
