class Rubber {
    constructor(x, y, r) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
      }

      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,);
     
      
      World.add(world, this.body);
    }
    display(){
     var rubberpos=this.body.position;
      push();
      translate(rubberpos.x, rubberpos.y);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill("blue");
      ellipse(0, 0, this.r,this.r);
      pop();
    }
  };
  