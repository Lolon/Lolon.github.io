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
    BeginDiorama.beBGX = 594;
    BeginDiorama.DagX = 150;
    BeginDiorama.TextX = 110;
  BeachDiorama = new Diorama(1);


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
  BeginDiorama.OutAnim = true;
}

class Diorama {
  constructor(DioUnit){
    this.DioUnit = DioUnit;
    let isTicking = true;
    var isDrawing = true;
    let OutAnim = false;
    let beBGX = 594;
    let DagX = 150;
    let TextX = 110;
  }

  DioTick (){
    //console.log("tick");
    if (this.isDrawing){
      this.displayDio();
      }
    if (this.OutAnim){
      this.hideDio();
    }
  }

  displayDio(){
    this.isTicking = true;
    if (this.DioUnit == 0){
      push();
      fill (51);
      rect (0,0,this.beBGX,841);
      image(dagger,this.DagX,75);
      fill (102,153,255);
      textSize(100);
      text("BEGIN",this.TextX,675);
      pop();
    }
    else if (this.DioUnit == 1) {
    }
    else if(this.DioUnit == undefined){
      console.log("dioUnit is not defined");
    }
  }
  hideDio(){
    if (this.DioUnit == 0){
      if (this.beBGX <-100){
        this.isTicking = false;
      }
      this.beBGX =this.beBGX-10;
      this.DagX = this.DagX - 5;
      this.TextX = this.TextX - 12;
      console.log(this.beBGX);
    }
  }
}
