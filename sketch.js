const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var red,ladder,snake,dice,roll,backgroundImage,moves,spaces;
var one,two,three,four,five,six;
var oneImg,twoImg,threeImg,fourImg,fiveImg,sixImg;
var engine, world;
var ran;


function preload() 
{
  backgroundImage = loadImage("images/pic.jpeg");
  oneImg = loadImage("images/sprite_5.png");
  twoImg = loadImage("images/sprite_4.png");
  threeImg = loadImage("images/sprite_3.png");
  fourImg = loadImage("images/sprite_2.png");
  fiveImg =loadImage("images/sprite_1.png");
  sixImg= loadImage("images/sprite_0.png")
  
}
function setup() 
{
  createCanvas(1000,720);

  button = createButton(" |___ Roll ___| ");
  button.position(750,50);

  

  engine = Engine.create();
  world = engine.world;

  //red = new Red(30,660,20,20);
  red = createSprite(30,660,20,20);

  
  
}
function draw() 
{
  background(backgroundImage);  

  Engine.update(engine);
  strokeWeight(5);
  console.log(ran);
  
  button.mousePressed( function() {
    ran = random(1,6);
    ran = Math.round(ran);

   
    if(ran ===1 )
    {
      one = createSprite(800,200,20,20);
      one.addImage("dice one",oneImg);
      red.x = red.x + 70*1;
    } 
    else if(ran===2 )
    {
      two = createSprite(800,200,20,20);
      two.addImage("dice two",twoImg);
      red.x = red.x + 70*2;
    }
    else if(ran===3 )
    {
    three = createSprite(800,200,20,20);
    three.addImage("dice three",threeImg);
    red.x = red.x + 70*3;
    }
    else if(ran===4 ) 
    {
      four = createSprite(800,200,20,20);
      four.addImage("dice four",fourImg);
      red.x = red.x + 70*4;
    }
    else if(ran==5 )
    {
      five = createSprite(800,200,20,20);
      five.addImage("dice five",fiveImg);
      red.x = red.x + 70*5;
    }
    else if(ran===6 ) 
    {
      six = createSprite(800,200,20,20);
      six.addImage("dise six",sixImg);
      red.x = red.x + 70*6;
    }
    
  })

 

    
/*1*/  line(10,700,10,15); // 40 by 40
/*2*/  line(70,700,70,15); // 70 by 80
/*3*/  line(140,700,140,15); // 70 by 80
/*4*/  line(210,700,210,15);// 70 by 80
/*5*/  line(280,700,280,15);// 70 by 80
/*6*/  line(350,700,350,15);// 70 by 80
/*7*/  line(420,700,420,15);// 70 by 80
/*8*/  line(490,700,490,15);// 70 by 80
/*9*/  line(560,700,565,15);// 70 by 80
/*10*/ line(630,700,630,15);// 70 by 80

/*1*/  line(700,10,15,10); //40 by 40
/*2*/  line(700,70,15,70); // 70 by 80
/*3*/  line(700,140,15,140);// 70 by 80
/*4*/  line(700,210,15,210);// 70 by 80
/*5*/  line(700,280,15,280);// 70 by 80
/*6*/  line(700,350,15,350);// 70 by 80
/*7*/  line(700,420,15,420);// 70 by 80
/*8*/  line(700,490,15,490);// 70 by 80
/*9*/  line(700,560,15,560);// 70 by 80
/*10*/ line(700,630,15,630);// 70 by 80


//red.display();
  
  drawSprites();
}

/*
if(red.x === 560) {
      
      red.y = red.y+70;
    }
*/