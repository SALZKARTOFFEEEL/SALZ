function setup() {
  params = getURLParams();
  console.log(params.url);
  
  createCanvas(windowWidth, windowHeight);
  
  
  textFont("Ubuntu");
  textAlign(CENTER);
  fill(253, 233, 98);
  noStroke();
}

function draw() {
  background(59, 48, 91);
  translate(0, height/2);
  
  textSize(32);
  text("Redirecting You", width/2, -128);
  
  textSize(40);
  text("BLAZIN' FAST", width/2, -64);
  
  textSize(16);
  text("to", width/2, -16);
  
  textSize(24);
  text(params.url, width/2, 32);
}