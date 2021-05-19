class Coin{
    constructor(posX) {
     
        this.rx = posX; //setting the x posing where obstacle will be created  
        this.ry = height-random([180,380,580]);   //setting y position where obstacle will be created 
        this.spt=createSprite(this.rx, this.ry); //using rx,ry
        this.spt.shapeColor="green";
        this.spt.addImage(CoinImg);
        this.spt.scale=0.1;
        
      }




}






