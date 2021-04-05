const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var obstacle1, obstacle2, player, ground;
var obstacle1Img, obstacle2Img, guyRunning1Img, guyRunning2Img;

function preload(){
    obstacle1Img=loadImage("obstacle1.png");
    obstacle2Img=loadImage("obstacle2.png");
    guyRunning1Img=loadImage("guyRunning1.png");
    guyRunning2Img=loadImage("guyRunning2.png");
}

function setup(){
createCanvas(500,500);
engine = Engine.create();
world = engine.world;
/*obstacle1=new Obstacle1(30,50,40,50);
obstacle1.addImage(obstacle1Img);*/
obstacle2=new Obstacle2(27,151,40,50);
player= new Player(411,95,90,90);
ground=new Ground(600,height,1200,20);
}

function draw(){
    Engine.update(engine);
    background("yellow");
    text(mouseX+','+ mouseY,50,80);
    //obstacle1.display();
    obstacle2.display();
    ground.display();
    player.display();
    //drawSprites();
}