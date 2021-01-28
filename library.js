function Collided(bullet,wall)
    {

      bulletRightEdge = bullet.x+bullet.width;
      wallLwftEdge = wall.x;

      if(bulletRightEdge>=wallLwftEdge)
      {

        return true

      }

      return false

    }