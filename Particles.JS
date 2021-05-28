class S{
    constructor(mouseX,y){
        var options={
          
            restitution:0.4,
            friction:0

            
        }
        this.r=10;
        this.body=Bodies.circle(mouseX,y,this.r,options)
        this.color=color(random(0,255),random(0,255),random(0,255))

        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        fill(this.color)
        ellipseMode(RADIUS)
        noStroke()
        ellipse(0,0,this.r,this.r)
        pop()
    }
}