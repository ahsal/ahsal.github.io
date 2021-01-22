var inc = 0.09;
var scl = 10;
var cols, rows;
var zoff = 0;
var fr;

var particle = [];

var flowfield = [];
function setup() {
createCanvas(600, 600);
background(255);
cols = floor(width / scl);
rows = floor(height/ scl);
fr = createP("");

flowfield = new Array(cols * rows);

for (var i = 0; i < 200; i++){
    particle[i] = new Particle();
}
}

function draw() {

randomSeed(10);

	var yoff = 0;

	for(y = 0; y < height; y++) {
		var xoff = 0;
       	for (x = 0; x < width; x++) {
		
			var index = (x + y * cols);
            var angle = noise(xoff, yoff, zoff) * 2* PI;
            var v = p5.Vector.fromAngle(angle);
            v.setMag(0.5);
            flowfield[index] = v;

            xoff += inc;
            stroke(0, 50);
            push();
            translate(x*scl, y*scl)
            rotate(v.heading());
            // line(0,0,scl,0);
            pop();
         

		
		}  
		yoff += inc;
        // zoff += inc;
    }

    for(i = 0; i < particle.length; i++) {

        particle[i].follow(flowfield);
        particle[i].show();
        particle[i].edges()
        particle[i].update();
    }
    
    fr.html(floor(frameRate()));

}





//                   BACKUP                     //
// var inc = 0.09;
// var scl = 10;
// var cols, rows;
// var zoff = 0;
// var fr;

// var particle = [];

// var flowfield = [];
// function setup() {
// createCanvas(innerWidth, innerHeight);
// background(255);
// cols = floor(width / scl);
// rows = floor(height/ scl);
// fr = createP("");

// flowfield = new Array(cols * rows);

// for (var i = 0; i < 100; i++){
//     particle[i] = new Particle();
// }
// }

// function draw() {

// randomSeed(10);

// 	var yoff = 0;

// 	for(y = 0; y < height; y++) {
// 		var xoff = 0;
//        	for (x = 0; x < width; x++) {
		
// 			var index = (x + y * cols);
//             var angle = noise(xoff, yoff, zoff) * 2* PI;
//             var v = p5.Vector.fromAngle(angle);
//             v.setMag(0.5);
//             flowfield[index] = v;

//             xoff += inc;
//             stroke(0, 50);
//             push();
//             translate(x*scl, y*scl)
//             rotate(v.heading());
//             // line(0,0,scl,0);
//             pop();
         

		
// 		}  
// 		yoff += inc;
//         // zoff += inc;
//     }

//     for(i = 0; i < particle.length; i++) {

//         particle[i].follow(flowfield);
//         particle[i].show();
//         particle[i].edges()
//         particle[i].update();
//     }
    
//     fr.html(floor(frameRate()));

// }