
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

    var engine,world;
  //  var ground;
    var plinkos = [];
    var divisions = [];
    var particles = [particle];
    var line=[];
    var particle=[];
    //var ground1,ground2,ground3;
    var divisionsHeight = 150;
  gameState="PLAY";

  var count;
  var score;

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(599,590,1200,30);

    // for(var j = 40; j<= width; j = j+50){
    //   plinkos.push(new Plinko(j , 75))
    // }
    for(var j = 40; j<= width; j = j+50){
      plinkos.push(new Plinko(j , 75))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,125))
    }
    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,175))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,225))
    }
    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,275))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,325))
    }
    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,375))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,425))
    }
      // for(var k = 75; k<= 300; k = k+100){
      //   plinkos.push(new Plinko(j,k))
      // }
    

   
    for(var k = 0; k <=width; k = k+80){
      divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionsHeight));
    }

  }

 
 
function draw() { 
  if(frameCount % 60 === 0){
    particle = new Particle(random(120, 500), 0, 7, random(0, 360));
    particles.push(particle);
  }

  background("pink");
   Engine.update(engine);
   textSize(25)
   text("Score: "+score,20,40);
   fill(255);


   textSize(25)
   text("500",15,450)
   text("500",100,450);
   text("500",180,450);
   text("100",260,450);
   text("100",340,450);
   text("100",420,450);
   text("200",500,450);
   text("200",580,450);

   text("500",660,450);
   text("500",740,450);
   text("100",820,450);
   text("100",900,450);
   text("100",980,450);
   text("200",1060,450);
   text("200",1140,450);

  if(gameState=="END")
  {
    background("pink");
    fill("red");
    textSize(80);
    text("game over",200,400);
  }


  if(particle!=null)
  {
    particle.display();


    if(particle.body.position.y>700)
    {
      if(particle.body.position>300)
        {
          score=score+500;
          particle=null;
         if(count>=5)gameState="END";

         }

      else if(particle.body.position.x<900 && particle.body.position.x >301)
          {
            score=score+100;
             particle=null;
             if(count>=5)gameState="END";

           }

      else if (particle.body.position.x<900 && particle.body.position.x >601)
           {
            score=score+200;
            particle=null;
            if(count>=5)gameState="END";

           }
    }
  }




  //  strokeWeight(4); 

//for(var i = 0; i < particles.length; i++){

 // particles[i].display();
 //}

  for(var k = 0; k<divisions.length;k++){
  divisions[k].display();
}
   for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
    // for(var k = 0; k<plinkos.length;k++){
    //   plinkos[j].display();
    // }
    // for(var l = 0; l<plinkos.length;l++){
    //   plinkos[j].display();
    // }
 }
  ground.display();   

 console.log(plinkos.length);

  
}
 