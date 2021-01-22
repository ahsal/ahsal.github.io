var inc = 0.01;
var start = 0;

function setup() {
createCanvas(innerWidth, innerHeight);


}

function draw() {
background(51);
beginShape();
stroke(255);
    noFill();
    var xoff = start;
for(let x = 0; x < width; x++){
    
    var y = noise(xoff) * height;
    vertex(x, y);
    xoff += inc;
   
}
start+= inc;
endShape();
// NoLoop();
}