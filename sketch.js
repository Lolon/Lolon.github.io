//stating all the variables used globably
var mgr; //used to reference the scene manager
let currentTime; //time from begining the script
let runningTime; //time from pressing start
let Slide1; //references to all slides of the story as its SlideArray index
let Slide2;
let Slide3;
let Slide4;
let Slide5;
let Slide6;
let Slide1time; //the time each slide is shown on the screen in relation to runningTime
let Slide2time;
let Slide3time;
let Slide4time;
let Slide5time;
let Endtime; //similar to slideTime, but relating to the end screen
let startScreen = true; //whether or not the start screen is showing and the generating story has started
let debug = false; //when true, nothing will happen when left click is pressed, allowing for slide debugging
let SlideArray = [Beach,Meeting,Crowd,forest,escape,city]; //an array holding the slides

let WaveArray = []; //although only used in the beach slide, i encountered errors when attempting to access this variable inside the function, so i keep this global

function preload(){ //called before the scene is loaded. I load all the required images here
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

function setup(){ //called before the scene is drawn
    var canvas = createCanvas(594, 841); //the canvas where everything is drawn onto
      canvas.parent("myContainer"); //IDing the canvas as myContainer for html and css referencing
    mgr = new SceneManager(); //create a new SceneManager and store that in mgr
    mgr.addScene (Intro); //store all the slides into the scene manager
    mgr.addScene (Beach);
    mgr.addScene (Meeting);
    mgr.addScene (Crowd);
    mgr.addScene (forest);
    mgr.addScene (escape);
    mgr.addScene (city);
    mgr.addScene (end);

    mgr.showScene(Intro); //this will show the scene
    Slide1time = 1000; //setting the times each slide will be shown before moving onto the next
    Slide2time = Slide1time + 10000;
    Slide3time = Slide2time + 10000;
    Slide4time = Slide3time + 10000;
    Slide5time = Slide4time + 10000;
    Endtime = Slide5time + 10000;

  }

function draw(){ //called every frame and draws onto the screen

    stroke(0,0,0,0); //remove all strokes from the screen as no shape in the artpiece use it
    if (!startScreen){ //if we are not on the start screen, meaning the story has started
      runningTime = millis() - currentTime; //set running time by subtracting the current time from the millis
      if (runningTime >Slide1time){ //if running time is greater than Slide1time, meaning its time to appear has been reached
        console.log("Slide1"); //display a debug log that the slide is shown
        mgr.showScene(SlideArray[Slide1-1]); //tell the scenemanager to show the scene in the SlideArray that relates to the slide index
      }
      if (runningTime>Slide2time) { //repeat for all slides including the end
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
    mgr.draw(); //draw onto the screen. Needed for scenemanager library.
  }

function mousePressed (){ //when the mouse is pressed

  if (startScreen === true){ //if we are on the start screen
    if(debug){    } //if in debug mode do not do anything
    else { //if not in degub mode
    currentTime = millis(); //set current time using millis, which increments every miliseconds from the scene begining
    ConstuctStory(); //call the contruct story function
    startScreen = false; //set the checker for being in the start screen to false
    }
  }
}

function ConstuctStory (){ //sets which slides are shown in what what order

  Slide1 = ceil(random() * 6); //set slide one to a random ceiled(rounded up) number to 6
  console.log(Slide1); //log the unit chosen
  Slide2 = ceil(random() * 6); //similar to before, but with slide 2
  noCheck(Slide2,2); //fall the number Check function
  console.log(Slide2); //similar to before, but with slide 2
  Slide3 = ceil(random() * 6); //repeats for all slides
  noCheck(Slide3,3);
  console.log(Slide3);
  Slide4 = ceil(random() * 6);
  noCheck(Slide4,4);
  console.log(Slide4);
  Slide5 = ceil(random() * 6);
  noCheck(Slide5,5);
  console.log(Slide5);

  function noCheck(no,int){ //number checker function, which checks if the chosen unit is already used and changes if needed

    if (int===2){ //if the given integer is 2
      if (no === Slide1 ||no === Slide3||no === Slide4||no === Slide5 ){ //checks all slides to see if reacurring
        console.log("recursion found"); //if reaccuring, print in log
        no = ceil(random() * 6); //randomize again
        Slide2 = no; //set as the new value
        noCheck(Slide2,2); //number check again
      }
    }
    else if (int===3) { //do this for all slides
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
    else { //if the number is not reaccuing, continue.
        return;
      }
    }
  }

function Intro(){ //introduction screen
    this.setup = function() {

    } //into's setup is not used as all needed logic is in master setup

    this.draw = function() { //the draw specific to Intro
      background (51); //set the background to a neutral grey
      image(dagger,150,75); //image of dagger
      fill (102,153,255); //begin
      textSize(100);
      text("BEGIN",110,675);
    }
  }

function Beach(){ //beach scene
    this.setup = function() {
      for(let i=0; i<5;i++){ //create 5 objects of wave class with random width and height in range and values for opacity animation
        WaveArray[i] = new Wave(random(width)-100,random(100)+300,0,0,random(2));
      }
    }

    this.draw = function() {
      background(104,217,245); //background to blue
      //sun
      fill(255,239,55);
      ellipse(400,150,200,200);
      //sea
      fill(104,149,245);
      rect(0,300,594,150);
      //beach
      fill(245,183,104);
      rect(0,450,594,450)

      for (let i=0; i<WaveArray.length; i++){ //update each wave created using a function
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

    }
}
class Wave{ //used for the waves that move along the sea
  constructor(x,y,waveSinVal,waveTint,offset){ //called when the class is created
  this.x = x; //set the variables into the class
  this.y = y;
  this.waveSinVal = waveSinVal;
  this.waveTint = waveTint;
  this.offset = offset;
  }
  Update(){ //update function. called every draw
    this.waveSinVal = this.waveSinVal+(TWO_PI/500.0); //handles the occilation of the wave opacity
    this.waveTint = sin(this.waveSinVal)+this.offset; //using sin, the opacity of the waves will fade in and out
    tint(255,(this.waveTint+1)*100); //tint the images based on the calculated unit
    image(beach_wave, this.x,this.y); //image of wave, positioned at the x and y value
    this.x = this.x+0.1; //add 0.1 to the x after drawing, making the wave move along the screen

  }
}

function Meeting(){ //meeting scene
  let foreground = 0; //letting number variables used for animation
  let midground = 0;
  let bg = 0;
  let showntime;
  let timebefore;
  let bluewalkinUnit = 800; //the x posision of the blue character
  this.setup = function(){
      timebefore = runningTime; //set time before as running time when the scene starts

  }
  this.draw = function(){

    showntime = millis() - timebefore //set the shown time as milliseconds minus the time before, giving us the time the scene is shown
    background(246,187,131);
    translate(bg,0); //translate the canvas with the x being of value bg
    bg = bg-0.05; //subtract 0.05 from bg
    //sun
    fill (255,238,96);
    ellipse(100,400,350,350);
    //buidlings
    fill(97,98,86);
    rect(100,200,100,500);
    rect(250,300,100,500);
    rect(400,275,100,500);

    translate(midground,0) //similar to setting bg, but with the midground
    midground = midground-0.1; //the midground moves faster than the background, mimicking perspective
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

    if (showntime>5000){ //if 5 seconds have passed
      if(bluewalkinUnit<400){} //if the blue character is less than 400 units across from the screen do nothing
      else { //if not...
      bluewalkinUnit=bluewalkinUnit-1; //move the blue character across the screen
        }
    }
    image(BluePerson,bluewalkinUnit,300);


    translate(foreground,0); //similar to bg and midground, but with the foreground
    foreground = foreground-0.5;
    image(table,10,500,436*2,214*2);
  }
}

function Crowd(){ //crowd scene

  let foreground = 0; //same as the paralax effect in meeting, but with an extra layer of furtherground
  let midground = 0;
  let furtherground = 0;
  let bg = 0;

  this.setup = function(){

  }
  this.draw = function(){
    background(99,122,110);
    //far
    translate(bg,0) //background motion
    bg = bg-0.5;
    for(let i=0;i<15;i++){ //spawn 15 characters in the background
      tint(255,50); //tint to blend with background
      image(FgCrowd,i*75,150,153*0.4,411*0.4); //x is the loop index multiplied to avoid overlap. scale is image in pixels multipled to scale
      noTint();
    }

    //closer
    translate(midground,0) //midground motion
    midground = midground+2;
    for(let i=0;i<15;i++){ //spawn 15 characters in the midground
    tint(255,150); //tint to blend with background
    image(FgCrowd,i*100-200,200,153*0.5,411*0.5); //x is the loop index multiplied to avoid overlap. scale is image in pixels multipled to scale
    noTint();
    }

    //close
    translate(furtherground,0) //furtherground motion
    furtherground = furtherground-4;
    for(let i=0;i<15;i++){ //spawn 15 characters in the furtherground
    image(FgCrowd,i*130,300,153*0.75,411*0.75); //x is the loop index multiplied to avoid overlap. scale is image in pixels multipled to scale
    }
        image(PinkPerson,600,475,65*1.5,176*1.5); //pink person only spawns once but is affected by furtherground motion
    //fg crowd
    translate(foreground,0) //foreground motion
    foreground = foreground+4;
    for(let i=0;i<15;i++){ //spawn 15 characters in the foreground
    tint(200); //tint to be darker
    image(FgCrowd,i*175-500,450,153*0.9,411*0.9); //x is the loop index multiplied to avoid overlap. scale is image in pixels multipled to scale
    }
  }
}

function forest(){ //forest slide

  let foreground = 0; //same as the paralax effect in meeting
  let midground = 0;
  let bg = 0;

  this.setup = function(){

  }
  this.draw = function(){
    background(72,238,235);

    push(); //stores transformation data from time it was called
    translate(foreground,0) //foreground motion. done first for ground and tracks
    //ground, tracks and blood
    fill(35,49,29);
    rect(0,500,694,500);
    fill(51,38,35);
    quad(150,841,100,841,300,615,350,615);
    quad(250,841,200,841,400,615,450,615);
    image(forest_blood,200,650);

    translate(bg,0) //background motion
    bg = bg-0.005;

    showTree(0,300); //show tree function with x and y coordinates
    showTree(225,300);
    showTree(525,300);
    translate(midground,0) //midground motion
    midground = midground-0.01;
    background('rgba(13,51,10,0.1)'); //background with an alpha value. used as fogging for trees
    showTree(-50,350);
    showTree(125,350);
    showTree(425,350);

    translate(foreground,0) //foreground motion
    foreground = foreground-0.05;
    background('rgba(13,51,10,0.1)'); //background with an alpha value. used as fogging for trees
    //fg
    showTree(-150,400);
    showTree(50,400);
    showTree(325,400);
    showTree(525,400);
    pop(); //restores transformation values from the push function

}

function showTree(locX,locY,){ //creates a tree out of rectangles and triangles from its given location
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

function escape(){ //escape scene
  let midground = 0; //same as the paralax effect in meeting, but without a foreground
  let bg = 0;

  this.setup = function(){

  }
  this.draw = function(){
    background(61,84,84);
    translate(bg,0) //background motion
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
    translate(midground,0) //midground motion
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

function city(){ //city scene
  let foreground = 0; //same as the paralax effect in meeting
  let midground = 0;
  let bg = 0;
  this.setup = function(){

  }
  this.draw = function(){
    background(24,14,1);
    //moon
    fill(208,186,157);
    ellipse(150,200,250,250);
    translate(bg,0) //background motion
    bg = bg+1;

    for(let i=0;i<5;i++){ //create 5 background buildings
    image(city_mgBuildings,i*859-1000,0); //x is the loop index multiplied to avoid overlap.
    }

    translate(midground,0); //midground motion
    midground = midground+2;
    for(let i=0;i<5;i++){ //create 5 foreground buildings and puddles
    image(city_fgBuildings,i*752-2000,200,752*0.8,861*0.8); //x is the loop index multiplied to avoid overlap. scale is image in pixels multipled to scale
    image(city_puddles,i*500-2000,750, 944*0.5,202*0.5);//x is the loop index multiplied to avoid overlap. scale is image in pixels multipled to scale
    }

    push(); //stores transformation data from time it was called
    translate(midground*-2,0); //negates the midground motion, giving the appearance of moving in physical space
    image(city_car,350,700,391*0.5,226*0.5); //x is the loop index multiplied to avoid overlap. scale is image in pixels multipled to scale
    pop(); //restores transformation values from the push function

    translate(foreground,0); //foreground motion
    foreground = foreground+4;
    for(let i=0;i<15;i++){ //creates 15 lamps
    image(city_lamp,i*500-4000,400,1000*0.5,1000*0.5); //x is the loop index multiplied to avoid overlap. scale is image in pixels multipled to scale
    }
  }
}

function end(){
  let bg = 0; //same as the paralax effect in meeting, but only with background
  this.setup = function(){

  }
  this.draw = function(){
    background(18,46,88);
    //moon
    fill(150,168,179);
    ellipse(400,200,250,250);

    translate(bg,0) //background motion
    bg = bg-10;
    fill (36,37,38);
    for(let i=0;i<25;i++){ //create 25 buildings
    rect(i*350,0,250,700); //x is the loop index multiplied to avoid overlap.
    }
    //floor
    fill (60,61,63);
    rect(0,600,10000,700);
    //car
    translate(bg*-1,0); //negates the background motion, giving the appearance of moving in physical space
    fill(45,124,243,150);
    ellipse(225,450,400,400);
    fill(243,45,63,150);
    ellipse(300,450,400,400);
    image(end_policeCar,100,500);
    //end text
    fill (102,153,255); //begin
    textSize(100);
    text("END",200,750);
  }
}
