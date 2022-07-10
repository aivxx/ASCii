const density = `Ñ@#W$9876543210?!sbc;:+=-,._`;

let artAi;

function preload(){
  artAi = loadImage("008500.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  //image(artAi, 0, 0, width, height);
  
  let w = width / artAi.width;
  let h = height / artAi.height;
  artAi.loadPixels();
  for (let i = 0; i < artAi.width; i ++) {
    for (let j = 0; j < artAi.height; j++) {
      const pixelIndex = (i + j * artAi.width) * 4;
      const r = artAi.pixels[pixelIndex + 0];
      const g = artAi.pixels[pixelIndex + 1];
      const b = artAi.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(avg);
      //square(i * w, j * h, w);
      
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      
      
      textSize(w);
      textAlign(CENTER, CENTER);
      text('G', i * w + w * 0.5, j * h + 5 * 0.5);
    }
  }
}