var mgr;
let currentTime;
let runningTime;
let Slide1;
let Slide2;
let Slide3;
let Slide4;
let Slide5;
let Slide6;
let Slide1time;
let Slide2time;
let Slide3time;
let Slide4time;
let Slide5time;
let Endtime;
let startScreen = true;
let debug = false;
let SlideArray = [Beach,Meeting,Crowd,forest,escape,city];

let WaveArray = [];

function preload(){
  dagger = loadImage("https://lolon.github.io/images/dagger.png")
  table = loadImage("https://lolon.github.io/images/table.png")
  PinkPerson = loadImage("https://lolon.github.io/images/PinkPerson.png")
  BluePerson = loadImage("https://lolon.github.io/images/BluePerson.png")
  FgCrowd = loadImage("https://lolon.github.io/images/FgCrowd.png")
  Beach_umbrella_blanket = loadImage("https://lolon.github.io/images/Beach_umbrella_blanket.png")
  beach_wave = loadImage("https://lolon.github.io/images/beach_wave.png")
  forest_blood = loadImage("https://lolon.github.io/images/forest_blood.png")
  escape_grill = loadImage("https://lolon.github.io/images/escape_grill.png")
  city_car = loadImage("https://lolon.github.io/images/city_car.png")
  city_fgBuildings = loadImage("https://lolon.github.io/images/city_fgBuildings.png")
  city_lamp = loadImage("https://lolon.github.io/images/city_lamp.png")
  city_mgBuildings = loadImage("https://lolon.github.io/images/city_mgBuildings.png")
  city_puddles = loadImage("https://lolon.github.io/images/city_puddles.png")
  end_policeCar = loadImage("https://lolon.github.io/images/end_policeCar.png")


}

function setup(){
    console.log("setup");
    var canvas = createCanvas(594, 841);
      canvas.parent("myContainer");
    mgr = new SceneManager();
    mgr.addScene (Intro);
    mgr.addScene (Beach);
    mgr.addScene (Meeting);
    mgr.addScene (Crowd);
    mgr.addScene (forest);
    mgr.addScene (escape);
    mgr.addScene (city);
    mgr.addScene (end);

    mgr.showScene(Intro); //this will show the scene
    Slide1time = 1000;
    Slide2time = Slide1time + 10000;
    Slide3time = Slide2time + 10000;
    Slide4time = Slide3time + 10000;
    Slide5time = Slide4time + 10000;
    Endtime = Slide5time + 10000;

  }
function draw(){
    //console.log(currentTime);
    stroke(0,0,0,0);
    if (!startScreen){
      runningTime = millis() - currentTime;
    //  var test = SlideArray[Slide1-1];
     //console.log(runningTime);
      if (runningTime >Slide1time){
        console.log("Slide1");
        mgr.showScene(SlideArray[Slide1-1]);
      }
      if (runningTime>Slide2time) {
        console.log("Slide2");
        mgr.showScene(SlideArray[Slide2-1])
      }
      if (runningTime>Slide3time) {
        console.log("Slide3");
        mgr.showScene(SlideArray[Slide3-1])
      }
      if (runningTime>Slide4time) {
        console.log("Slide4");
        mgr.showScene(SlideArray[Slide4-1])
      }
      if (runningTime>Slide5time) {
        console.log("Slide5");
        mgr.showScene(SlideArray[Slide5-1])
      }
      if (runningTime>Endtime) {
        console.log("end");
        mgr.showScene(end);
      }
    }
    mgr.draw();
  }

function mousePressed (){
  //console.log("Hoooo!");
  if (startScreen === true){
    if(debug){    }
    else {
    currentTime = millis();
    ConstuctStory();
    startScreen = false;
    }
  }
}

function ConstuctStory (){ //sets which slides are shown in what what order

  Slide1 = ceil(random() * 6);
  console.log(Slide1);
  Slide2 = ceil(random() * 6);
  noCheck(Slide2,2);
  console.log(Slide2);
  Slide3 = ceil(random() * 6);
  noCheck(Slide3,3);
  console.log(Slide3);
  Slide4 = ceil(random() * 6);
  noCheck(Slide4,4);
  console.log(Slide4);
  Slide5 = ceil(random() * 6);
  noCheck(Slide5,5);
  console.log(Slide5);

  function noCheck(no,int){

    if (int===2){
      if (no === Slide1 ||no === Slide3||no === Slide4||no === Slide5 ){
        console.log("recursion found");
        no = ceil(random() * 6);
        Slide2 = no;
        noCheck(Slide2,2);
      }
    }
    else if (int===3) {
        if (no === Slide1 ||no === Slide2||no === Slide4||no === Slide5 ){
          console.log("recursion found");
          no = ceil(random() * 6);
          Slide3 = no;

          noCheck(Slide3,3);
        }
      }
    else if (int===4) {
        if (no === Slide1 ||no === Slide2||no === Slide3||no === Slide5 ){
          console.log("recursion found");
          no = ceil(random() * 6);
          Slide4 = no;

          noCheck(Slide4,4);
        }
      }
    else if (int===5) {
        if (no === Slide1 ||no === Slide2||no === Slide3||no === Slide4 ){
        console.log("recursion found");
        no = ceil(random() * 6);
        Slide5 = no;
        noCheck(Slide5,5);
        }
      }
    else {
        return;
      }
    }
  }

function Intro(){
    this.setup = function() {

    }

    this.draw = function() {
      fill (51);
      rect (0,0,594,841);
      image(dagger,150,75);
      fill (102,153,255);
      textSize(100);
      text("BEGIN",110,675);
    }
  }

// Main games scene constructor function
function Beach(){
    this.setup = function() {
      for(let i=0; i<5;i++){
        WaveArray[i] = new Wave(random(width)-100,random(100)+300,0,0,random(2));
      }
    }

    this.draw = function() {
      background(104,217,245);
      //sun
      fill(255,239,55);
      ellipse(400,150,200,200);

      //sea
      fill(104,149,245);
      rect(0,300,594,150);
      //beach
      fill(245,183,104);
      rect(0,450,594,450)

      for (let i=0; i<WaveArray.length; i++){
        WaveArray[i].Update();
      }
      //blanket
      noTint();
      image(Beach_umbrella_blanket,200,325);
      //police line
      fill(94,94,94);
      rect(50,650,25,200);
      rect(250,650,25,200);
      rect(450,650,25,200);
      rect(650,650,25,200);
      fill(255,239,55);
      rect(0,675,594,75);
      fill(0);
      textSize(40);
      text("POLICE LINE DO NOT CROSS - POLICE LINE DO NOT CROSS",0,725);
      //594, 841
    }
}
class Wave{
  constructor(x,y,waveSinVal,waveTint,offset){
  this.x = x;
  this.y = y;
  this.waveSinVal = waveSinVal;
  this.waveTint = waveTint;
  this.offset = offset;
  }
  Update(){
    //wave
    this.waveSinVal = this.waveSinVal+(TWO_PI/500.0);
    this.waveTint = sin(this.waveSinVal)+this.offset;
    console.log(this.waveTint);
    push();
    tint(255,(this.waveTint+1)*100);
    image(beach_wave, this.x,this.y);
    this.x = this.x+0.1;
    pop();
  }
}

function Meeting(){
  let foreground = 0;
  let midground = 0;
  let bg = 0;
  let showntime;
  let timebefore;
  let bluewalkinUnit = 800;
  this.setup = function(){
      timebefore = runningTime;

  }
  this.draw = function(){

    showntime = millis() - timebefore
    console.log(showntime);
    background(246,187,131);

    translate(bg,0)
    bg = bg-0.05;
    //sun
    fill (255,238,96);
    ellipse(100,400,350,350);
    //buidlings
    fill(97,98,86);
    rect(100,200,100,500);
    rect(250,300,100,500);
    rect(400,275,100,500);

    translate(midground,0)
    midground = midground-0.1;
    //inside
    fill(187,181,141);
    rect(0,0,594,50);
    rect(0,0,50,800);
    rect(594-50,0,500,800);
    rect(0,400,594,500);
    //floor
    fill(249,209,157);
    rect(0,450,694,500);
    //table

    image(table,90,300);
    //pink and blue

    image(PinkPerson,130,250);

    if (showntime>5000){
      if(bluewalkinUnit<400){}
      else {
      bluewalkinUnit=bluewalkinUnit-1;
        }
    }

    image(BluePerson,bluewalkinUnit,300);


    translate(foreground,0)
    foreground = foreground-0.5;
    image(table,10,500,436*2,214*2);
  }
}

function Crowd(){

  let foreground = 0;
  let midground = 0;
  let furtherground = 0;
  let bg = 0;

  this.setup = function(){

  }
  this.draw = function(){
    background(99,122,110);
    //far
    translate(bg,0)
    bg = bg-0.5;
    for(let i=0;i<15;i++){
      tint(255,50);
      image(FgCrowd,i*75,150,153*0.4,411*0.4);
      noTint();
    }

    //closer
    translate(midground,0)
    midground = midground+2;
    for(let i=0;i<15;i++){
    tint(255,150);
    image(FgCrowd,i*100-200,200,153*0.5,411*0.5);
    noTint();
    }

    //close
    translate(furtherground,0)
    furtherground = furtherground-4;
    for(let i=0;i<15;i++){
    image(FgCrowd,i*130,300,153*0.75,411*0.75);
    }
        image(PinkPerson,600,475,65*1.5,176*1.5);
    //fg crowd
    translate(foreground,0)
    foreground = foreground+4;
    for(let i=0;i<20;i++){
    tint(200);
    image(FgCrowd,i*175-500,450,153*0.9,411*0.9);
    }
  }
}

function forest(){

  let foreground = 0;
  let midground = 0;
  let bg = 0;

  this.setup = function(){

  }
  this.draw = function(){
    background(72,238,235);

    push();
    translate(foreground,0)

    fill(35,49,29);
    rect(0,500,694,500);
    fill(51,38,35);
    quad(150,841,100,841,300,615,350,615);
    quad(250,841,200,841,400,615,450,615);
    image(forest_blood,200,650);

    translate(bg,0)
    bg = bg-0.005;
    showTree(0,300);
    showTree(225,300);
    showTree(525,300);
    translate(midground,0)
    midground = midground-0.01;
    background('rgba(13,51,10,0.1)');
    showTree(-50,350);
    showTree(125,350);
    showTree(425,350);

    translate(foreground,0)
    foreground = foreground-0.05;
    background('rgba(13,51,10,0.1)');
    //fg
    showTree(-150,400);
    showTree(50,400);
    showTree(325,400);
    showTree(525,400);
    pop();

}

function showTree(locX,locY,){
  //tree
  fill(62,53,44);
  rect(locX+73,locY+250,50,75);
  fill(49,146,40);
  triangle(locX+100,locY+120,locX+0,locY+150+120,locX+200,locY+150+120);
  fill(55,164,45);
  triangle(locX+100,locY+80,locX+0,locY+150+80,locX+200,locY+150+80);
  fill(63,179,52);
  triangle(locX+100,locY+40,locX+0,locY+150+40,locX+200,locY+150+40);
  fill(73,198,61);
  triangle(locX+100,locY+0,locX+0,locY+150,locX+200,locY+150);
  }
  }

function escape(){
  let foreground = 0;
  let midground = 0;
  let bg = 0;

  this.setup = function(){

  }
  this.draw = function(){
    background(61,84,84);
    translate(bg,0)
    bg = bg-0.05;
    //floor
    fill(74,105,105);
    quad(0+100,500,594-100,500,594+200,841,0-200,841);
    //594, 841
    //ceiling
    fill(62,71,71);
    quad(0+100,200,594-100,200,594+200,0,0-200,0);
    image(escape_grill,300,510);
    //window
    fill(64,249,249,50);
    quad(350,250,450,350,200,1541,-300,400);
    fill(64,249,249);
    rect(350,250,100,100);
    translate(midground,0)
    midground = midground-0.075;
    //bars
    fill(38,31,31);
    rect(25,0,50,841);
    rect(275,0,50,841);
    rect(525,0,50,841);
    //people
    tint(100,255);
    image(FgCrowd,-150,350,153*2,411*2);
    image(FgCrowd,475,350,153*2,411*2);

  }
}

function city(){
  let foreground = 0;
  let midground = 0;
  let bg = 0;
  this.setup = function(){

  }
  this.draw = function(){
    background(24,14,1);
    fill(208,186,157);
    ellipse(150,200,250,250);
    translate(bg,0)
    bg = bg+1;

    for(let i=0;i<5;i++){
    image(city_mgBuildings,i*859-1000,0);
    }

    translate(midground,0);
    midground = midground+2;
    for(let i=0;i<5;i++){
    image(city_fgBuildings,i*752-2000,200,752*0.8,861*0.8);
    image(city_puddles,i*500-2000,750, 944*0.5,202*0.5);
    }

    push();
    translate(midground*-2,0);
    image(city_car,350,700,391*0.5,226*0.5);
    pop();

    translate(foreground,0);
    foreground = foreground+4;
    for(let i=0;i<15;i++){
    image(city_lamp,i*500-4000,400,1000*0.5,1000*0.5);
    }
  }
}

function end(){
  let foreground = 0;
  let midground = 0;
  let bg = 0;
  this.setup = function(){

  }
  this.draw = function(){
    background(18,46,88);

    fill(150,168,179);
    ellipse(400,200,250,250);

    translate(bg,0)
    bg = bg-10;
    fill (36,37,38);
    for(let i=0;i<25;i++){
    rect(i*350,0,250,700);
    }
    fill (60,61,63);
    rect(0,600,10000,700);
    //car
    translate(bg*-1,0);
    fill(45,124,243,150);
    ellipse(225,450,400,400);
    fill(243,45,63,150);
    ellipse(300,450,400,400);
    image(end_policeCar,100,500);
  }
}
