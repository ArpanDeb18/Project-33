var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;

var turn = 0;

var gameState;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

   gameState = "PLAY"; 

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  ground.display();

  if ( gameState ==="END") {
    
    fill("red");
    textSize(100);
    text("Game Over", 150, 250);
    
  }
  
  fill("yellow");
  textSize(20);
  text("SCORE : " + score, 50, 35);

  fill(0, 255, 255);
  textSize(25);
  text("200", 20, 530);
  text("200", 340, 530);
  text("200", 500, 530);

  fill(255, 153, 51);
  text("500", 180, 530);
  text("500", 420, 530);
  text("500", 660, 530);

  fill(187, 153, 255);
  text("100", 100, 530);
  text("100", 260, 530);
  text("100", 580, 530);
  text("100", 740, 530);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   

   if(particle!=null){

    particle.display();
    

    if(particle.body.position.y > 760){

      if(particle.body.position.x <= 100 ){

        score = score + 200;
        particle = null;
        if (turn >= 5) gameState = "END";
        console.log(score);

      }

      else if(particle.body.position.x <= 180 ){

        score = score + 100;
        particle = null;
        if (turn >= 5) gameState = "END";
        console.log(score);

      }
      
      else if(particle.body.position.x <= 260 ){

        score = score + 500;
        particle = null;
        if (turn >= 5) gameState = "END";
        console.log(score);

      }

      else if(particle.body.position.x <= 340 ){

        score = score + 100;
        particle = null;
        if (turn >= 5) gameState = "END";
        console.log(score);

      }

      else if(particle.body.position.x <= 420 ){

        score = score + 200;
        particle = null;
        if (turn >= 5) gameState = "END";
        console.log(score);

      }

      else if(particle.body.position.x <= 500 ){

        score = score + 500;
        particle = null;
        if (turn >= 5) gameState = "END";
        console.log(score);

      }

      else if(particle.body.position.x <= 580 ){

        score = score + 200;
        particle = null;
        if (turn >= 5) gameState = "END";
        console.log(score);

      }

      else if(particle.body.position.x <= 660 ){

        score = score + 100;
        particle = null;
        if (turn >= 5) gameState = "END";
        console.log(score);

      }

      else if(particle.body.position.x <= 740 ){

        score = score + 500;
        particle = null;
        if (turn >= 5) gameState = "END";
        console.log(score);

      }

      else if(particle.body.position.x >= 740 ){

        score = score + 100;
        particle = null;
        if (turn >= 5) gameState = "END";
        console.log(score);

      }
      

    }

   }

   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }



}

function mousePressed(){

  if(gameState !== "END"){
    turn++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}