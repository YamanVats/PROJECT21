var canvas;
var music;
var rect1,rect2,rect3,rect4,rect5;
var dice;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(400,400);
     edges=createEdgeSprites();
    
    //create 4 different surfaces
    rect1=createSprite(50,400,100,20);
    rect2=createSprite(150,400,100,20);
    rect3=createSprite(250,400,100,20);
    rect4=createSprite(350,400,100,20);
    rect5=createSprite(random(100,300),random(100,300),30,30);
    rect1.shapeColor="gold";
    rect2.shapeColor="blue";
    rect3.shapeColor="green";
    rect4.shapeColor="red";
    rect5.shapeColor="black";

    //create box sprite and give velocity
    dice=createSprite(50,50,20,20);
    dice.shapeColor="white";
    dice.velocityY=3; 
    dice.velocityX=5;
}

function draw() {
    background("grey");
    //create edgeSprite
   dice.bounceOff(edges);
    

    //add condition to check if box touching surface and make it box
    if(rect1.isTouching(dice)&&dice.bounceOff(rect1)){
        dice.shapeColor="gold"
        music.play();
    }
    if(rect2.isTouching(dice)&&dice.bounceOff(rect2)){
        dice.shapeColor="blue"
        music.play();
    }
    if(rect3.isTouching(dice)&&dice.bounceOff(rect3)){
        dice.shapeColor="green"
        music.play();
    }
    if(rect4.isTouching(dice)&&dice.bounceOff(rect4)){
        dice.shapeColor="red"
        music.play();
    }
    if(rect5.isTouching(dice)){
        dice.shapeColor="black"
        dice.setVelocity(0,0);
    }
    drawSprites();
}
