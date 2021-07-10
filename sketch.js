const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var today = new Date();
var Time = today.getHours();

var Background = "sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1100,750);
    engine = Engine.create();
    world = engine.world;
    
} 
function draw(){
  
   

    // add condition to check if any background image is there to add
   if(backgroundImg){
       background(backgroundImg)
   }
   textSize(30)
   text("Time :" +Time,width-1050,50)

    Engine.update(engine);

    // write code to display time in correct format here
   

        
   

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    
    //change the data in JSON format
    var responseJSON  =  await response.json();

    // write code slice the datetime
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour)

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
      Background = "sunrise1.png";
    }else if(hour>=06 && hour<=08){
      Background = "sunrise2.png";
    } else if(hour>=08 && hour<=10){
      Background = "sunrise3.png";
    } else if(hour>=10 && hour<=12){
      Background = "sunrise4.png";
    } else if(hour>=12 && hour<=14){
      Background = "sunrise5.png";
    } else if(hour>=14 && hour<=16){
        Background = "sunrise6.png";
    } else if(hour>=16 && hour<=18){
        Background = "sunset7.png";
    } else if(hour>=18 && hour<=20){
        Background = "sunset8.png";
    } else if(hour>=20 && hour<=22){
        Background = "sunset9.png";
    } else if(hour>=22 && hour<=00){
        Background = "sunset10.png";
    } else if(hour===0 && hour<=02){
        Background = "sunset11.png";
    } else if(hour>=02 && hour<=04){
        Background = "sunset12.png";
    } 

    
    //load the image in backgroundImg variable here
      backgroundImg = loadImage(Background);
      console.log(backgroundImg)


}
