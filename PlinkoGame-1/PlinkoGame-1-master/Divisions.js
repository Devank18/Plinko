class Division {
    constructor(x,y) {

        var options = {
            isStatic : false
        }

        this.body=Bodies.rectangle(x,y,7,150,options);

        World.add(world,this.body);
    }

    display() {

        var pos=this.body.position;

        rectMode(CENTER);
        rect(pos.x,pos.y,14,300);

    }
}