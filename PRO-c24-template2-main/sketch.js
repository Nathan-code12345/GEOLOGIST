const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(250,90,50,50)
    iron2 = new Iron(350,190,50,50)
    iron3 = new Iron(480,100,50,50)
    iron4 = new Iron(950,90,50,50)
    rubber = new Rubber(400,30,40)
    stone = new Stone(927,78,20,50)
    stone2 = new Stone(526,78,20,50)
    stone3 = new Stone(120,78,20,50)
    stone4 = new Stone(130,78,20,50)
    stone5 = new Stone(681,78,20,50)
    rubber2= new Rubber(500,30,40)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    iron.display()
    iron2.display()
    iron3.display()
    iron4.display()
    plane.display();
    hammer.display();
    rubber.display()
    stone.display()
    stone2.display()
    stone3.display()
    stone4.display()
    stone5.display()
   rubber2.display()
    
 
}