var mgr;

function preload(){
  dagger = loadImage("https://lolon.github.io/images/dagger.png")

}
  function setup()
  {
    console.log("setup");
    createCanvas(594, 841);
    mgr = new SceneManager();
    mgr.addScene (Intro);
    mgr.showScene(Intro); //this will show the scene
  }
  function draw(){
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
    }


}

// Main games scene constructor function
function Game()
{
    this.setup = function() {
    }

    this.draw = function() {
    }
}
