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
	var energy = [];
   energy[0] = fft.getEnergy(90);
   energy[1] = fft.getEnergy(123.47);
   energy[2] = fft.getEnergy(146.83);
   energy[3] = fft.getEnergy(196.00);
   energy[4] = fft.getEnergy(392.00);
   
//    ellipse(width/2, constrain(height-energy*height, 0, height), 10, 10)
   console.log(energy)
//    endShape();
}

//G2 90hz / B2 123.47hz / D3 146.83hz / G3 196.00 hz / B3 246.94hz / G4 392.00