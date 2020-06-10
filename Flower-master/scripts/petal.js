function petal(x, y, i) {
    this.pos = createVector(x, y)
    this.inclination=i
    this.radiusa=height*0.25;
    this.radiusb=height*0.05;
    this.dist=height*0.1;
    this.color = [255, 217, 15];
    this.colorb=random(0,100);
    
    this.draw= function(t){
        push();
        this.inclination+=t;
        //this.pos.y=ye;
        //rotate(t);
        strokeWeight(3);
        stroke(0,0,0);
        noStroke();
        translate(this.pos.x,this.pos.y);
        rotate(this.inclination);
        //print(this.inclination);
        fill(this.color[0],this.color[1],this.color[2])
        ellipse(this.dist,0,this.radiusa,this.radiusb);
        fill(0,0,0,this.colorb);
        ellipse(this.dist,0,this.radiusa,this.radiusb);
        pop();

    }

}