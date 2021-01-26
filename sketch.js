var canvas, box, music;
var surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    surface1 = createSprite(100, 580, 180, 20);
    surface1.shapeColor = "green";
    surface2 = createSprite(300, 580, 180, 20);
    surface2.shapeColor = "red";
    surface3 = createSprite(500, 580, 180, 20);
    surface3.shapeColor = "orange";
    surface4 = createSprite(700, 580, 180, 20);
    surface4.shapeColor = "pink";

    box = createSprite(random(20, 750), 300, 20, 20);
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = -4;

}

function draw() {
    background(rgb(169,169,169));
    
    createEdgeSprites();
    box.bounceOff(edges);
    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);

    bounceOff();
    drawSprites();
    //add condition to check if box touching surface and make it box
}

function bounceOff() {
    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = "green";
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)) {
        box.shapeColor = "red";
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor = "orange";
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor = "pink";
    }
}
