function Gas(N,temp){
  this.N = N;
  this.molecules = [];
  this.t = 0;//tiempo
  this.T = temp;
  this.maxX=absWidth*3/4;
  this.minX=absWidth*1/4;
  this.maxY=absHeight*3/4;
  this.minY=absHeight*1/4;
  this.boxWidth = this.maxX-this.minX;
  this.boxHeigth = this.maxY-this.minY;
  this.collisionEventsQueue = new PriorityQueue({ comparator: function(a, b) { return a.t - b.t; }});

  this.initialize = function(){
    for(i=0;i<N;i++){
      // console.log("Here.")
      var molecule = new Molecule(this.minX+this.boxWidth*random(),this.minY+this.boxHeigth*random(),5*random(),5*random(),32,18);//in the units of the program
      this.molecules.push(molecule);
    }
  }

  this.display = function(){
    for(i=0;i<N;i++){
      this.molecules[i].display();
    }
  }

  this.updateVelocities = function(){
    for(i=0;i<N;i++){
      this.molecules[i].updateVelocity();
    }
  }
  this.updatePositions = function(){
    for(i=0;i<N;i++){
      this.molecules[i].updatePosition();
    }
    // for(i=0;i<N;i++){
    //   if(molecule1.x-molecule1.r<0){
    //     molecule1.vX = -molecule1.vX;
    //     molecule1.x = molecule1.r;  
    //   }else if(molecule1.x+molecule1.r>absWidth){
    //     molecule1.vX = -molecule1.vX;
    //     molecule1.x = absWidth-molecule1.r;  
    //   }
    //   if(molecule1.y-molecule1.r<0){
    //     molecule1.vY = -molecule1.vY;
    //     molecule1.y = molecule1.r;  
    //   }else if(molecule1.y+molecule1.r>absHeight){
    //     molecule1.vY = -molecule1.vY;
    //     molecule1.y = absHeight-molecule1.r;  
    //   }
    // }
    
  }

  this.calculateEvents =function(){
    for(i=0;i<N;i++){
      var moleculei=this.molecules[i];
      var tVertical = moleculei.collidesX(this.minX,this.maxX);
      var tHorizontal = moleculei.collidesY(this.minY,this.maxY);
      var collisionEvent;
      //determine the lowest time of collision for this particle with the walls
      if(tVertical<tHorizontal){
        //collision with a vertical wall
        collisionEvent = new EventPandW(tVertical+this.t,i,0,moleculei.collisionCount);//0 for vertical
      }else{
        //collision with a horizonta wall
        collisionEvent = new EventPandW(tHorizontal+this.t,i,1,moleculei.collisionCount);//0 for vertical
      }

      this.collisionEventsQueue.queue(collisionEvent);
    }
  }

  this.isAValidEvent = function(event){
    return this.molecules[event.nParticle].collisionCount<=event.collisionCountP;
  }
  this.advanceToNextCollision = function(){
    nextEvent = this.collisionEventsQueue.dequeue();
    while(!(this.isAValidEvent(nextEvent))){//While the event is not a valid one
      nextEvent=this.collisionEventsQueue.dequeue();
    }
    //update positions and time
    for(i=0;i<N;i++){
      this.molecules[i].updatePosition(nextEvent.t-this.t);
    }
    this.t = nextEvent.t;
    //update velocities and collision number
    if(nextEvent.nWall==0){
      this.molecules[nextEvent.nParticle].bounceX();
    }else{
      this.molecules[nextEvent.nParticle].bounceY();
    }
    this.molecules[nextEvent.nParticle].updateColor();
    this.molecules[nextEvent.nParticle].collisionCount++;
  }

}