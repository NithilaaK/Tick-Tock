var hr, mn, sc;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("black"); 

  noFill();

  translate(238, 230);

  strokeWeight(7); 
  
  stroke("blue");   
  var hrMap = map(hour() % 12, 0, 11, 0, 360);
  arc(0, 0, 200, 200, 270, hrMap);

  stroke(2, 253, 16);
  var mnMap = map(minute(), 0, 59, 0, 10);  
  arc(0, 0, 186, 186, 270, mnMap);

  stroke("red");
  var scMap = map(second(), 0, 59, 0, 360);   
  arc(0, 0, 172, 172, 270, scMap);

  console.log(hr + ":" + mn + ":" + sc);

  push();
  rotate(scMap);
  line(0, 0, 60, 0); 
  pop();

  push();
  rotate(mnMap);
  stroke(2, 253, 16);
  line(0, 0, 58, 0); 
  pop();

  push();
  rotate(hrMap);
  stroke("blue");
  line(0, 0, 45, 0); 
  pop();

  drawSprites();
}
