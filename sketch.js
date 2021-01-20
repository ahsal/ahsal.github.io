
var angle = 0;

var slider;
function setup() {
  createCanvas(innerWidth, innerHeight);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01)
}
function draw() {
  background(255);
  console.log(angle);
  // angle = slider.value();
  if(angle < PI / 4){
  angle +=0.01;
  }
  
  
  stroke(0);
  translate(width/2, height);
  b1 = new Branch(height / 4)

}

function Branch(arg){
  this.arg = arg;
  line(0, 0, 0,-arg);
  translate(0, -arg)
  if(arg > 1){
    push();
    rotate(angle);
    Branch(arg*0.6);
    pop();
    push();
    rotate(-angle);
    Branch(arg*0.6);
    pop();
  }

}
