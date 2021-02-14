class block {
    constructor(x,y,width,height){
     
        var options={
            isStatic: false
           //density:1.2,
            //friction:1.5
          }
          this.width=width;
          this.height=height;
          
          this.body = Bodies.rectangle(x,y,this.width,this.height,options);
          
          World.add(world, this.body)
    }
    display(){
       
       
            var pos=this.body.position
            push(); 
            rectMode(CENTER);
            fill ("red");
            
            rect(pos.x,pos.y,this.width,this.height);
            pop() ;  

           
    
           
             


    }
}
