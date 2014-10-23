var mic, fft, didAnalyze;
var filter, filterFreq, filterWidth;


function setup() {
   createCanvas(710,400);
   
   background(200);
  	
   mic = new p5.AudioIn();
   mic.start();
    
   
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
   
	
	var volume = mic.getLevel();
   var spectrum = fft.analyze();
	
// 	if ( didRiseAbove(volume) && !didAnalyze ) {
  		
		background(200);
		didAnalyze = true;
		beginShape();
		for (i = 0; i<spectrum.length; i++) {
			vertex(i, map(spectrum[i], 0, 255, height, 0) );
		}
		endShape();
// 	}
   
}

function didRiseAbove(volume) {
	var threshold = 0.1;
  	return (volume > threshold)
}