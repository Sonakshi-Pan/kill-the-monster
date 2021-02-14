class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length:300,
            stiffness:0.4
          }
          this.bodyA = bodyA
          this.pointB = pointB
          this.visibility=0; 
          this.body = Constraint.create(options)
          World.add(world,this.body)
    }

    display(){
        if(this.body.bodyA){
        var pointA =this.bodyA.position
        var pointB =this.pointB
        push() 
        strokeWeight(0);
        
        line(pointA.x,pointA.y,pointB.x,pointB.y) 
       
        pop() 
       }       

       
    }

  
}