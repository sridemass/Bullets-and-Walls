  var bullet,wall;
  var speed,weight;
  var thickness;
  var damage;

  function setup() 
    {
    
      createCanvas(1600,600);
    bullet = createSprite(40,450,110,20);
    bullet.shapeColor="yellow"
    wall = createSprite(1200,400,thickness/2,height/2);
    wall.shapeColor="white";
    
    speed = random(223,321);
    weight = random(30,52);
    thickness = random(22,100)
    bullet.velocityX = speed;

    }

  function draw() 
    {
    
      background("black");  
      
      if(Collided(bullet,wall))
      {

        bullet.velocityX=0

        damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

        if (damage>10)
        {
          wall.shapeColor=color(255,0,0);
        }

        if(damage<10)
        {
          wall.shapeColor = color(0,255,0)
        }

      }

    
      drawSprites();
    }

    