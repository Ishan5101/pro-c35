class Ball { 
    constructor(x,y,dia){
        var options={
        restitution:1,
        friction:1,
        density:0.8
        }
        this.body=   Bodies.circle(x,y,dia,options);
       this.dia=dia;
        World.add(myWorld,this.body);
        }
    
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
       ellipseMode(RADIUS);
        fill("black");
        ellipse(0,0,this.dia,this.dia);
        pop()
        }
    
    }