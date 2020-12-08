class Red {
    
    constructor (x,y,width,height) 
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height; 

        var options = 
        {
           isStatic : false, 
        }

        this.bodies = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.bodies);
    }
   

    display() {
        var pos = this.bodies.position;

        push ();

        translate(pos.x,pos.y);
        rotate(this.bodies.angle);
        noStroke();
        fill(0,128,128);
        rect(0,0,this.width,this.height);
        pop ();





    }
}