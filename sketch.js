//https://p5js.org
//var startClick;
function preload(){
  dagger = loadImage("https://lolon.github.io/images/dagger.png")

}
function setup() {
  createCanvas(594, 841);
  BeginDiorama = new Diorama(0);
    BeginDiorama.isTicking = true;
    BeginDiorama.isDrawing = true;
  BeachDiorama = new Diorama(1);


  //startClick.mouseClicked(Start);
  }

function draw() {             //every tick
  background(255);
  stroke(0,0,0,0);
  if (BeginDiorama.isTicking == true){
    BeginDiorama.DioTick();
    }
}

function mouseClicked(){
  //logic for randomising events
  console.log("click");
  BeachDiorama.displayDio();
  BeginDiorama.BHide = true;
}

class Diorama {
  constructor(DioUnit){
    this.DioUnit = DioUnit;
    var BHide = false;
    let isTicking = true;
    var isDrawing = true;
  }

  DioTick (){
    console.log("tick");
    if (this.isDrawing){
      this.displayDio();
    }

  }
  displayDio(){
    this.isTicking = true;
    if (this.DioUnit == 0){
      fill (51);
      let beBGX = 594;
      rect (0,0,beBGX,841);
      image(dagger,150,75);
      fill (102,153,255);
      textSize(100);
      text("BEGIN",110,675);
    }
    else if (this.DioUnit == 1) {
    }
    else if(this.DioUnit == undefined){
      console.log("dioUnit is not defined");
    }
  }
  hideDio(){
    if (this.DioUnit == 0){
      this.beBGX =- 2
      console.log("hiding");
    }
  }
}
