class Margin{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 800;
        this.height = 20;
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}