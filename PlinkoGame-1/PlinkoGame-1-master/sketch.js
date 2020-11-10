
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var engine, world;

var divisions=[];
var plinko=[];
var particle=[];

var rand;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(400, 800);
  createSprite(400, 200, 50, 50);


  rand = random(width / 2 - 15, width / 2 + 15);

  particle = new Particle(rand, 10,PI/2);

  plinko = new Plinko();

  ground = new Ground(width / 2, 790, width, 20);

}


function draw() {
  background(0);

  for (var i = 0; i <= width; i = i + 80) {
    divisions = new Division(i, 700);
    divisions.display();
  }

  for (var x = 38; x <= width; x = x + 50) {
    plinko1 = new Plinko(x, 50);
    plinko1.display();
    plinko2 = new Plinko(x, 200);
    plinko2.display();
  }

  for (var y = 15; y <= width; y = y + 50) {
    plinko3 = new Plinko(y, 125);
    plinko3.display();
    plinko4 = new Plinko(y, 275);
    plinko4.display();
  }

  plinko=[plinko1,plinko2,plinko3,plinko4];

  if (frameCount%60===0) {
    particle=new Particle(100,10,10);
  }

  particle.display();
  ground.display();

}