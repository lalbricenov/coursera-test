// var count =0;
function setup(){
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  //var canvas = createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
  //createCanvas(windowWidth, windowHeight);
  if(window.innerHeight>=window.innerWidth*9/16){
    var canvas = createCanvas(window.innerWidth, window.innerWidth*9/16);
  }else{
    var canvas = createCanvas(window.innerHeight*16/9, window.innerHeight);
  }
  
  oxygen2 = new Gas(100,300);
  oxygen2.initialize();
  
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  // canvas.parent('sketch-holder');
}
function draw(){
  //drawGrid();
  background(51);
  oxygen2.display();

  oxygen2.calculateEvents();
  oxygen2.advanceToNextCollision();
  // molecule1.updateVelocity();
  // molecule1.updatePosition();

  
  
  // if(molecule1.x-molecule1.r<0){
  //   molecule1.vX = -molecule1.vX;
  //   molecule1.x = molecule1.r;  
  // }else if(molecule1.x+molecule1.r>absWidth){
  //   molecule1.vX = -molecule1.vX;
  //   molecule1.x = absWidth-molecule1.r;  
  // }
  // if(molecule1.y-molecule1.r<0){
  //   molecule1.vY = -molecule1.vY;
  //   molecule1.y = molecule1.r;  
  // }else if(molecule1.y+molecule1.r>absHeight){
  //   molecule1.vY = -molecule1.vY;
  //   molecule1.y = absHeight-molecule1.r;  
  // }

  // stroke(155);
  // fill(220) ; 
  // var positionE = absToR([absWidth/2,absHeight/2]);
  
  // var radiusE = absToR([absWidth,absHeight/2]);
  // ellipse(positionE[0],positionE[1],radiusE[0],radiusE[1]);
  // textSize(absToY(64))
  // text('word', positionE[0],positionE[1]+radiusE[1]*0.62);
  //console.log(positionE[1]+radiusE[1]);
}
function windowResized() { 
  // resizeCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight); 
  if(window.innerHeight>=window.innerWidth*9/16){
    resizeCanvas(window.innerWidth, window.innerWidth*9/16);
  }else{
    resizeCanvas(window.innerHeight*16/9, window.innerHeight);
  }
  //resizeCanvas(windowWidth, windowHeight);
}

// The following code can be used to draw a grid
// function drawGrid() {
// 	stroke(200);
// 	fill(120);
// 	for (var x=-width; x < width; x+=40) {
// 		line(x, -height, x, height);
// 		text(x, x+1, 12);
// 	}
// 	for (var y=-height; y < height; y+=40) {
// 		line(-width, y, width, y);
// 		text(y, 1, y+12);
// 	}
// }