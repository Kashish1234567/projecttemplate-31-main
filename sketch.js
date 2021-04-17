const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var drops=[];
var maxDrops=100;
var umberella;
var rand;
var night;
var t1,t2,t3,t4;
var thunderCreatedFrame=0;
var thun;


function preload(){
    t1=loadImage("1.png");
    t2=loadImage("2.png");
    t3=loadImage("3.png");
    t4=loadImage("4.png");
    
}

function setup(){

    engine=Engine.create();
    world= engine.world;

    var canvas= createCanvas(400,700);

    umbrella= new Umbrella(200,500);
    
    if(frameCount%150 === 0){
    for (var i=0; i<maxDrops; i++){
    drops.push(new Drops(random(0,400),random (0,400) ) );
    }
}
    
}

function draw(){

    Engine.update(engine);
    background(0);

    

    
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thun = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thun.addImage(t1);
            break;
            case 2: thun.addImage(t2);
            break; 
            case 3: thun.addImage(t3);
            break;
            case 4: thun.addImage(t4);
            break;
            default: break;
        }
        thun.scale = random(0.3,0.5)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thun){
        thun.destroy();
    }

    umbrella.display();

    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY();
        
    }
    
    drawSprites();

    
}   

