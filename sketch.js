//https://p5js.org
let BeginDiorama;
let dagger;
function setup() {
  createCanvas(594, 841);
  BeginDiorama = new Diorama(0);
  BeachDiorama = new Diorama(1);
}

function draw() {
  background(255);
  stroke(0,0,0,0);
    BeginDiorama.displayDio();
  //BgDio
  BeachDiorama.displayDio();
  //FgDio

}

class Diorama {
  constructor(DioUnit){
    this.DioUnit = DioUnit;
  }
   displayDio(){
    if (this.DioUnit == 0){
      fill (51);
      rect (0,0,594,841);
      dagger = loadImage("images/dagger.png")
      image(dagger,0,0);
    }
    else if (this.DioUnit == 1) {
      fill (0,255,0);
      rect (20,20,20,20);
    }
    else if(this.DioUnit == undefined){
      console.log("dioUnit is not defined");
    }
  }
}
