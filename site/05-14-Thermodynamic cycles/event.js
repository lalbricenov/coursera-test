function Event2Particles(t, particleA, particleB){
  this.t = t;//time of collision
  this.particleA = particleA;
  this.particleB = particleB;

  this.collisionCountA = particleA.collisionCount;
  this.collisionCountB = particleB.collisionCount;

  //determine if the event was invalidated
 

}
function EventPandW(t, nParticle,nWall,collisionCount){//0 means vertical wall,1 horizontal wall
  this.t = t;//time of collision
  this.nParticle=nParticle;
  this.nWall=nWall;

  this.collisionCountP = collisionCount;//collision count of the particle at the time of creation of the event
}
