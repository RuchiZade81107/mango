
class Stone {
    constructor(x,y,r) {
      var options = {
          restitution: 0.5,
          friction: 1,
          density: 1.2
      }
      this.body = Bodies.circle(x,y,r/2,options);
      this.r = r
      this.image=loadImage("Plucking+mangoes/images/stone.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      imageMode(RADIUS);
      image(this.image,0,0,this.r*2,this.r*2);
      pop()
    }
  };
