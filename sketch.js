
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var s=[];
var apple;
var s=[apple]
var score=0;
var count=0;
var gameState="play";
function preload()
{
	
}

function setup() {
	createCanvas(565, 630);


	engine = Engine.create();
	world = engine.world;
  
	rw=new Wall(300,630,1000,20)
    e = new Wall(70,580,10,190)
	a = new Wall(140,580,10,190)
	b = new Wall(210,580,10,190)
	ab = new Wall(280,580,10,190)
	ba = new Wall(350,580,10,190)
	ac = new Wall(420,580,10,190)
	at = new Wall(490,580,10,190)
	ai = new Wall(560,580,10,190)
	i = new Wall(5,580,10,190)
    w = new Ball(40,100,20)
	m = new Ball(40,100,20)
	n = new Ball(40,170,20)
	o = new Ball(40,240,20)
	p = new Ball(40,310,20)
	q = new Ball(40,380,20)

	m1 = new Ball(100,100,20)
	n1 = new Ball(100,170,20)
	o1 = new Ball(100,240,20)
	p1 = new Ball(100,310,20)
	q1 = new Ball(100,380,20)

	m2 = new Ball(160,100,20)
	n2 = new Ball(160,170,20)
	o2 = new Ball(160,240,20)
	p2 = new Ball(160,310,20)
	q2 = new Ball(160,380,20)

	m3 = new Ball(220,100,20)
	n3 = new Ball(220,170,20)
	o3 = new Ball(220,240,20)
	p3 = new Ball(220,310,20)
	q3 = new Ball(220,380,20)

	m4 = new Ball(280,100,20)
	n4 = new Ball(280,170,20)
	o4 = new Ball(280,240,20)
	p4 = new Ball(280,310,20)
	q4 = new Ball(280,380,20)

	m5 = new Ball(340,100,20)
	n5 = new Ball(340,170,20)
	o5 = new Ball(340,240,20)
	p5 = new Ball(340,310,20)
	q5 = new Ball(340,380,20)

	m6 = new Ball(400,100,20)
	n6 = new Ball(400,170,20)
	o6 = new Ball(400,240,20)
	p6 = new Ball(400,310,20)
	q6= new Ball(400,380,20)

	m7 = new Ball(460,100,20)
	n7 = new Ball(460,170,20)
	o7 = new Ball(460,240,20)
	p7 = new Ball(460,310,20)
	q7 = new Ball(460,380,20)

	m8 = new Ball(520,100,20)
	n8 = new Ball(520,170,20)
	o8 = new Ball(520,240,20)
	p8 = new Ball(520,310,20)
	q8 = new Ball(520,380,20)
 

  a1 = new Ball(70,140,20)
	b1 = new Ball(190,140,20)
	c1 = new Ball(310,140,20)
	d1 = new Ball(430,140,20)
	e1 = new Ball(130,140,20)

	a2 = new Ball(250,140,20)
	b2 = new Ball(370,140,20)
	c2 = new Ball(490,140,20)
	d2 = new Ball(160,310,20)
	e2 = new Ball(160,380,20)
 
 
  
  m11 = new Ball(70,205,20)
	n11 = new Ball(130,205,20)
	o11 = new Ball(190,205,20)
	p11 = new Ball(250,205,20)
	q11 = new Ball(310,205,20)

	m12 = new Ball(370,205,20)
	n12 = new Ball(430,205,20)
	o12 = new Ball(490,205,20)
	p12 = new Ball(70,275,20)
	q12 = new Ball(130,275,20)

	m13 = new Ball(190,275,20)
	n13 = new Ball(250,275,20)
	o13 = new Ball(310,275,20)
	p13 = new Ball(370,275,20)
	q13 = new Ball(430,275,20)

	m14 = new Ball(490,275,20)
	n14 = new Ball(70,345,20)
	o14 = new Ball(130,345,20)
	p14 = new Ball(190,345,20)
	q14 = new Ball(250,345,20)

	m15 = new Ball(310,345,20)
	n15 = new Ball(370,345,20)
	o15 = new Ball(430,345,20)
	p15 = new Ball(490,345,20)
  apple=new S (200,100,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 Engine.update(engine)
 textSize(35)
 text("score:"+score,20,40)
 text("count:"+count,380,40)
 fill(225)
 textSize(30)
 text("500",10,550)
 text("500",80,550)
 text("500",150,550)
 text("500",220,550)
 text("500",290,550)
 text("100",360,550)
 text("100",430,550)
 text("100",500,550)

 if(gameState==="end"){
  background("black")
  apple=null;
   fill("red")
   textSize(80);
   
   text("game over",100,300)
 }

 if(apple!=null){
  apple.display() 
  if(apple.body.position.y>490){
    if(apple.body.position.x<300){
      score=score+500
      apple=null
      count=count+1
      if(count>=5)gameState==="end"
    }
    else if(apple.body.position.x>300){
      score=score+100
      apple=null
      count=count+1

      if(count>=5)gameState==="end"

    }

  }
 }
  rw.display();
  e.display();
  a.display();
  b.display();
  
  ab.display();
  ba.display();
  ac.display();
  at.display();
  ai.display();
  i.display();
  w.display()
  m.display();
  n.display();
  o.display();
  p.display()
  q.display()
  m1.display()
  n1.display();
  o1.display();
  p1.display()
  q1.display()

  m2.display()
  n2.display();
  o2.display();
  p2.display()
  q2.display()

  m3.display()
  n3.display();
  o3.display();
  p3.display()
  q3.display()

  m4.display()
  n4.display();
  o4.display();
  p4.display()
  q4.display()

  m5.display()
  n5.display();
  o5.display();
  p5.display()
  q5.display()

  m6.display()
  n6.display();
  o6.display();
  p6.display()
  q6.display()

  m7.display()
  n7.display();
  o7.display();
  p7.display()
  q7.display()
 
  m8.display()
  n8.display();
  o8.display();
  p8.display()
  q8.display()

  a1.display()
  b1.display();
  c1.display();
  d1.display()
  e1.display()

  m11.display()
  n11.display();
  o11.display();
  p11.display()
  q11.display()
 
  m12.display()
  n12.display();
  o12.display();
  p12.display()
  q12.display()
  m13.display()
  n13.display();
  o13.display();
  p13.display()
  q13.display()

  m14.display()
  n14.display();
  o14.display();
  p14.display()
  q14.display()

  m15.display()
  n15.display();
  o15.display();
  p15.display()
 


  a2.display()
  b2.display();
  c2.display();
  d2.display()
  
  e2.display()
if(count===5){
  gameState="end"
}
  
  drawSprites();
 if(frameCount%100===0) {
  apple=new S (mouseX,100,100)
 }
  
  
}
function mousePressed(){
  if(gameState!=="end"){
    count++;
    apple=new S (mouseX,100,100)
  }
}

























