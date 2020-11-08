var bubbles = [];

function setup(){
  createCanvas(600,400);

}

function mousePressed(){
  var b = new Bubble(500,300,random(30,70));
  bubbles.push(b);
}

function draw(){
  noStroke();
  background(149,219,255);
    fill(133,114,250);
  ellipse(500,300,80,80);
  fill(149,219,255);
  ellipse(500,300,70,70);
  
  rectMode(CENTER);
  fill(133,114,250);
  rect(500,370,10,70);

  

  for(var i = 0; i < bubbles.length; i++){
  if(mousePressed){
  var wind = createVector(random(-0.019),random(-0.001,-0.009));
  bubbles[i].applyForce(wind);
  bubbles[i].update();
  bubbles[i].display();
  }
  }
}


