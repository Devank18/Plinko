class Particle {

    constructor(x, y, radius) {
        var options = {
            restitution:0.4,
        }
        this.radius=radius;
        this.body = Bodies.circle(x, y,this.radius,options);

        World.add(world, this.body);

        this.rand = random(0, 255);
        this.rand2 = random(0, 255);
        this.rand3 = random(0, 255);

    }

    display() {
        push();

        var pos = this.body.position;
        var angle=this.body.angle;

        translate(pos.x, pos.y)
        rotate(angle);
        fill(this.rand, this.rand2, this.rand3);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius,this.radius);

        pop();
    }
}