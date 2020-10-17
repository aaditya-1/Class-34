const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block1b, block2b, block3b, block4b, block5b, block6b, block7b, block8b, block9b, block10b;

var ground;
var bob;

var chain;

function preload() {

}

function setup() {
    var canvas = createCanvas(1800, 800);
    engine = Engine.create();
    world = engine.world;


    block1 = new Box(900, 750, 100, 100);
    block2 = new Box(900, 650, 100, 100);
    block3 = new Box(900, 550, 100, 100);
    block4 = new Box(900, 450, 100, 100);
    block5 = new Box(900, 350, 100, 100);
    block6 = new Box(900, 250, 100, 100);
    block7 = new Box(900, 150, 100, 100);

    block1b = new Box(1000, 750, 100, 100);
    block2b = new Box(1000, 650, 100, 100);
    block3b = new Box(1000, 550, 100, 100);
    block4b = new Box(1000, 450, 100, 100);
    block5b = new Box(1000, 350, 100, 100);
    block6b = new Box(1000, 250, 100, 100);
    block7b = new Box(1000, 150, 100, 100);

    bob = new Bob(500, 500);

    chain = new Chain(bob.body, { x: 500, y: 150 });

    ground = new Ground(900, 770, 1800, 20);

}

function draw() {

    Engine.update(engine);

    background(200, 200, 200);

    stroke("green");
    noFill();
    strokeWeight(5);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block1b.display();
    block2b.display();
    block3b.display();
    block4b.display();
    block5b.display();
    block6b.display();
    block7b.display();

    noStroke();
    fill("black")
    bob.display();

    chain.display();

    stroke("brown");
    fill("yellow");
    strokeWeight(5);
    ground.display();


}

function mouseDragged() {
    Matter.Body.setPosition(bob.body, { x: mouseX, y: mouseY });
}

// function mouseReleased() {
//     chain.fly();
// }