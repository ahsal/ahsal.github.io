var inc = 0.01;

function setup() {
createCanvas(600, 600);

}

function draw() {

	var yoff = 0;
	loadPixels();  
	for(y = 0; y < height; y++) {
		var xoff = 0;
       	for (x = 0; x < width; x++) {
		
			var index = (x + y * width) * 4;
			r = noise(xoff, yoff) * 255;
			pixels[index + 0] = r;
			pixels[index + 1] = r;
			pixels[index + 2] = r;
			pixels[index + 3] = 255;
			xoff += inc;
		
		}  
		yoff += inc;

	}
	//  noLoop();
    updatePixels();
}