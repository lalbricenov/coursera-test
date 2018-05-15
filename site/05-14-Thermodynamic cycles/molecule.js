function Molecule(x,y,vX,vY,m,r){
  this.m = m;
  this.x = x;
  this.y = y;
  this.vX = vX;
  this.vY = vY;
  this.r = r;
  this.T = this.m*(this.vX**2+this.vY**2)/3;
  this.collisionCount = 0;

  this.display = function(){
    stroke(255);
    fill(this.colorFromT(this.T));
    ellipse(absToX(this.x),absToY(this.y),absToX(this.r*2),absToY(this.r*2));
  }

  this.updateColor =function(){
    this.T = this.m*(this.vX**2+this.vY**2)/3;
  }
  this.updatePosition = function(dt){
    // console.log(dt);
    this.x = this.x + this.vX*dt;
    this.y = this.y + this.vY*dt;
  }

  this.updateT=function(){
    this.T = this.m*(this.vX**2+this.vY**2)/3;
  }

  this.colorFromT = function(){
    var redRgb = ((this.T<500)?255*this.T/500:255);
    var blueRgb = ((this.T<500)?255-255*this.T/500:0);
    return color(redRgb,50,blueRgb)
  }

  this.collidesX = function(minX,maxX){
    //collisions with vertical walls
    if(this.vX>0){
      return (maxX-this.r-this.x)/this.vX;
    }else if(this.vX!=0){
      return (minX+this.r-this.x)/this.vX;
    }else{
      return Infinity;
    }
  }
  this.collidesY = function(minY,maxY){
    //collisions with horizontal walls
    if(this.vY>0){
      return (maxY-this.r-this.y)/this.vY;
    }else if(this.vY!=0){
      return (minY+this.r-this.y)/this.vY;
    }else{
      return Infinity;
    }
  }
  
  this.bounceX = function(){
    this.vX = -this.vX;
  }
  this.bounceY = function(){
    this.vY = -this.vY;
  }

}