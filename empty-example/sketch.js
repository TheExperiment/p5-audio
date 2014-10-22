var mic, fft, didAnalyze;
var filter, filterFreq, filterWidth;

function setup() {
   createCanvas(710,400);
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
   background(200);
   
   filter = new p5.BandPass();
   filter.process(mic);
   
}

function draw() {
   
	
	var volume = mic.getLevel();
   var spectrum = fft.analyze();
	
// 	if ( didRiseAbove(volume) && !didAnalyze ) {

		
		var freq = map (80, 150);
  		filter.freq(freq);
  		filter.res(50);
  		
		background(200);
		didAnalyze = true;
		beginShape();
		for (i = 0; i<spectrum.length; i++) {
			vertex(i, map(spectrum[i], 0, 255, height, 0) );
		}
		endShape();
		
		console.log(spectrum.length);
// 	}
   
}

function didRiseAbove(volume) {
	var threshold = 0.1;
  	return (volume > threshold)
}

/*

// Adapted from Learning Processing, Daniel Shiffman
// learningprocessing.com
var input;
var analyzer;

function setup() {
  createCanvas(710, 200);
  background(255);

  // Create an Audio input
  input = new p5.AudioIn();

  input.start();
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  var volume = input.getLevel();

  // If the volume > 0.1,  a rect is drawn at a random location. 
  // The louder the volume, the larger the rectangle.
  var threshold = 0.1;
  if (volume > threshold) {
    stroke(0);
    fill(0, 100);
    rect(random(40, width), random(height), volume*50, volume*50);
  }

  // Graph the overall potential volume, w/ a line at the threshold
  var y = map(volume, 0, 1, height, 0);
  var ythreshold = map(threshold, 0, 1, height, 0);

  noStroke();
  fill(175);
  rect(0, 0, 20, height);
  // Then draw a rectangle on the graph, sized according to volume
  fill(0);
  rect(0, y, 20, y);
  stroke(0);
  line(0, ythreshold, 19, ythreshold);
}

*/