class Chain {
    constructor(bodyA, pointB) {

        var opt = {
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': 0.004,
            'length': 250
        }

        this.bodyA = bodyA;
        this.pointB = pointB;

        this.chain = Constraint.create(opt);

        World.add(world, this.chain);

    }

    // fly() {

    //     this.chain.bodyA = null;

    // }

    display() {
        if (this.chain.bodyA) {
            var point1 = this.chain.bodyA.position;
            var point2 = this.pointB;

            stroke("orange");
            strokeWeight(5);

            line(point1.x, point1.y, point2.x, point2.y);
        }
    }
}