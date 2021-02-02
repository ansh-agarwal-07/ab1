const engine = Matter.Engine
const world = Matter.World
const bodies = Matter.Bodies


var obj1,obj2,obj3,obj4,obj5
var box1,box5,box4,box3,box2,bird,pig1,pig3,log1,log3,log4,log5
var engi,wor
function setup() {
  createCanvas(1200,400);
 engi = engine.create()
 wor=engi.world
 obj1=new Ground(600,400,1200,20)
 //obj2=new Bird(100,100,50,50)
 //obj3=new Pig(810,350,50,50)
 //obj3=new Box2(700,320,70,70)
 //obj4=new Log(810,160,20,300,PI/2)
 //obj5=new Box2(920,320,70,70)
 box1 = new Box(700,320,70,70); 
 box2 = new Box(920,320,70,70); 
 pig1 = new Pig(810, 350,50,50); 
 log1 = new Log(810,260,300, PI/2); 
 box3 = new Box(700,240,70,70); 
 box4 = new Box(920,240,70,70); 
 pig3 = new Pig(810, 220,50,50); 
 log3 = new Log(810,180,300, PI/2); 
 box5 = new Box(810,160,70,70); 
 log4 = new Log(760,120,150, PI/7); 
 log5 = new Log(870,120,150, -PI/7); 
 bird = new Bird(100,100,50,50);



 


}

function draw() {
  background(255,255,255);
  engine.update(engi)
  obj1.display()  
  //obj2.display()
  //obj3.display()
  //obj4.display()
  //obj5.display()

  box1.display(); 
  box2.display(); 
  //ground.display(); 
  pig1.display(); 
  log1.display(); 
  box3.display(); 
  box4.display(); 
  pig3.display(); 
  log3.display(); 
  box5.display(); 
  log4.display(); 
  log5.display(); 
  bird.display();

  
  
}