function Bubble(x,y,d){
  this.pos = createVector(x,y);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.diameter = d;

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);

  }

  this.display = function(){
    noStroke();
      fill(255,80);
      ellipse(this.pos.x, this.pos.y,d);
  }
}
