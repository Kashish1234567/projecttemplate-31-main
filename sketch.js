const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var Drops=[];
var maxDrops=100;
var umberella;
var rand;
var night;
var t1,t2,t3,t4;
var thunderCreatedFrame=0;



function preload(){
    t1=loadImage("images/thunderbolt/1.png");
    t2=loadImage("images/thunderbolt/2.png");
    t3=loadImage("images/thunderbolt/3.png");
    t4=loadImage("images/thunderbolt/4.png");
    
}

function setup(){
    var canvas= createCanvas(500,700);

    engine=Engine.create();
    world= engine.world;

    umbrella= new Umbrella(200,500);
    
    for (var i=0; i<maxDrops; i++){
    drops.push(new Drops (random(0,400),random (0,400) ) );
    }
    
}

function draw(){

    engine.update(engine);

    

    
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thun = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thun.addImage(thun1);
            break;
            case 2: thun.addImage(thun2);
            break; 
            case 3: thun.addImage(thun3);
            break;
            case 4: thun.addImage(thun4);
            break;
            default: break;
        }
        thun.scale = random(0.3,0.5)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thun){
        thun.destroy();
    }

    

    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
        
    }
    
    drawSprites();

    umbrella.display();
}   

