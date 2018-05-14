var absWidth = 1600;
var absHeight = 900;

function setup(){
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  //var canvas = createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
  //createCanvas(windowWidth, windowHeight);
  if(window.innerHeight>=window.innerWidth*9/16){
    var canvas = createCanvas(window.innerWidth, window.innerWidth*9/16);
  }else{
    var canvas = createCanvas(window.innerHeight*16/9, window.innerHeight);
  }
  
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  // canvas.parent('sketch-holder');
}
function draw(){
  drawGrid();
  stroke(155);
  fill(220) ; 
  var positionE = absToR([absWidth/2,absHeight/2]);
  
  var radiusE = absToR([absWidth,absHeight/2]);
  ellipse(positionE[0],positionE[1],radiusE[0],radiusE[1]);
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

//transformation between systems of reference
function rToAbs(real){
  return [absWidth*real[0]/width,absHeight*real[1]/height];

}
function absToR(abstract){
  return [width*abstract[0]/absWidth,height*abstract[1]/absHeight];
}
////////////////////////////////////////

// The following code can be used to draw a grid
function drawGrid() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=40) {
		line(x, -height, x, height);
		text(x, x+1, 12);
	}
	for (var y=-height; y < height; y+=40) {
		line(-width, y, width, y);
		text(y, 1, y+12);
	}
}