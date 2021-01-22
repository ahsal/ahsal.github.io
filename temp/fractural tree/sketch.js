
var angle = 0;

// var slider;
function setup() {
  createCanvas(innerWidth, innerHeight);
  // slider = createSlider(0, TWO_PI, PI / 4, 0.01)
}
function draw() {
  background(51);
  // angle = slider.value();
if(angle < PI/5){
  angle +=0.01;
}
  stroke(255);
  translate(width/2, height);
  branch(100);

}

function branch(arg){
  line(0, 0, 0,-arg);
  translate(0, -arg)
  if(arg > 1){
    push();
    rotate(angle);
    branch(arg*0.6);
    pop();
    push();
    rotate(-angle);
    branch(arg*0.6);
    pop();
  }

}
