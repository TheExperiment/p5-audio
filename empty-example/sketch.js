var mic, fft;

function setup() {
   createCanvas(710,400);
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
   background(0);

   var spectrum = fft.analyze();

   // beginShape();
//    for (i = 0; i<spectrum.length; i++) {
//     vertex(i, map(spectrum[i], 0, 255, height, 0) );
//    }
	
   var energy = fft.getEnergy(248);
   ellipse(width/2, constrain(height-energy*height*5, 0, height), 10, 10)
   console.log(energy)
   endShape();
}