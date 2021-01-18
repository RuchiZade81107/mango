class chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

       
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
     attach(body){
         this.sling.bodyA = body
     }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(10);
            stroke(48,22,8)
            if(pointA.x<220){
            line(pointA.x+20, pointA.y+20, pointB.x, pointB.y);
            
            
           
            pop()
        }
    }
   }
}