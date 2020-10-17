class Bob {
    constructor(x, y) {
        var opt = {
            // density: 1.5,
            mass: 5.3,
            isStatic: false,
            frictionAir: 0.005
        }

        this.body = Bodies.circle(x, y, 2, opt);

        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;

        ellipse(pos.x, pos.y, 150, 150);
    }
}