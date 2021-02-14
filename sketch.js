const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var superman;
var backImg;
var box1,box2,box3,box4;
var ground,chain;
var monster;

function preload() {
//preload the images here
backImg=loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
 superman =new Superman(300,250,100)
  ground = new Ground(300,450,1150,10)


  box1 = new block(500,100,80,80)
  box2 = new block(500,200,80,80)
  box3 = new block(500,200,80,80)
  box4 = new block(500,100,80,80)

  box5 = new block(600,100,80,80)
  box6 = new block(600,200,80,80)
  box7 = new block(600,300,80,80)
  box8 = new block(600,200,80,80)

 monster = new Monster(750,300,100)
  chain = new Chain(superman.body,{x:400,y:100})
}

function draw() {
  background(backImg);
  Engine.update(engine); 

  ground.display();

  superman.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();

  chain.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(superman.body,{x:mouseX,y:mouseY})
}

 


