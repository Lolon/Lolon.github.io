var mgr;
let currentTime;
let Slide1;
let Slide2;
let Slide3;
let Slide4;
let Slide5;

function preload(){
  dagger = loadImage("https://lolon.github.io/images/dagger.png")
  table = loadImage("https://lolon.github.io/images/table.png")
  PinkPerson = loadImage("https://lolon.github.io/images/PinkPerson.png")
  BluePerson = loadImage("https://lolon.github.io/images/BluePerson.png")

}
  function setup()
  {
    console.log("setup");
    createCanvas(594, 841);
    mgr = new SceneManager();
    mgr.addScene (Intro);
    mgr.addScene (Beach);
    mgr.addScene (Meeting);
    mgr.addScene (Crowd);
    mgr.showScene(Crowd); //this will show the scene
    Slide1 = 1000;
    Slide2 = Slide1 + 10000;
    Slide3 = Slide2 + 10000;
    Slide4 = Slide3 + 10000;
    Slide5 = Slide4 + 10000;

  }
  function draw(){
    currentTime = millis();
    //console.log(currentTime);
    stroke(0,0,0,0);

    mgr.draw();
  }

function Intro()
{
    this.setup = function() {

    }

    this.draw = function() {
      fill (51);
      rect (0,0,594,841);
      image(dagger,150,75);
      fill (102,153,255);
      textSize(100);
      text("BEGIN",110,675);
      if (currentTime >Slide1){
        console.log("next");
        mgr.showScene(Meeting);
      }
    }
  }

// Main games scene constructor function
function Beach(){
    this.setup = function() {
    }

    this.draw = function() {
      background(104,217,245);
      fill(245,183,104);
      rect(0,450,594,450)
    }
}
function Meeting(){
  this.setup = function(){

  }
  this.draw = function(){
    background(246,187,131);
    //sun
    fill (255,238,96);
    ellipse(100,400,350,350);
    //buidlings
    fill(97,98,86);
    rect(100,200,100,500);
    rect(250,300,100,500);
    rect(400,275,100,500);
    //inside
    fill(187,181,141);
    rect(0,0,594,50);
    rect(0,0,50,800);
    rect(594-50,0,50,800);
    rect(0,400,594,500);
    //floor
    fill(249,209,157);
    rect(0,450,594,500);
    //table
    image(table,90,300);
    image(table,10,500,436*2,214*2);
    //pink and blue
    image(PinkPerson,130,250);
    image(BluePerson,425,300);

  }
}
function Crowd(){
  this.setup = function(){

  }
  this.draw = function(){
    background(99,122,110);
  }
}
