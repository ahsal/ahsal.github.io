
// perlinoice gives smooth random values
// random gives nonsmooth random values

var xoff1 = 0;
var xoff2 =1000;
function setup() {
createCanvas(innerWidth, innerHeight);
stroke(255)
}

function draw() {
background(51);
// var x = random(width);


var x = map(noise(xoff1), 0, 1, 0, width);
var y = map(noise(xoff2), 0, 1, 0, height);
xoff1+=0.01;
xoff2 += 0.01;
ellipse(x, y, 24, 24);
    
}