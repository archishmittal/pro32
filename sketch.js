const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, platform;

var bg ;

function preload() {
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

 
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

  


}

async function getBackgroundImg(){


        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo"); 
        var responsejson= await response.json();
        var dateTime= responsejson.datetime;
        var hour= dateTime.slice(11,13);
        if(hour>=04 && hour<=06){
            bg= "sunrise1.png";
        }
        else if (hour>=06 && hour<=08){
      bg= "sunrise2.png";
        }
        else if (hour>= 23 && hour==0){
            bg= "sunrise10.png";
              }
              else if (hour==00 && hour<=03){
                bg= "sunrise11.png";
                  }
                  else{ 
                      bg= "sunrise12.png";
                  }
        backgroundImg= loadImage(bg);
        console.log(backgroundImg);
  

}
