class Plinko {
    constructor(x,y) {

        var options = {
            isStatic : false
        }
        this.body=Bodies.circle(x,y,9,options);
        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,18);
    }
}