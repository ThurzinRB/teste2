function flower(x, y) {
    this.pos = createVector(x, y);
    this.y=y;
    this.radius = height * 0.2;
    this.color = [58, 33, 0];
    this.petal = [];
    this.t=-0.001;
    this.dt=0.001;

    this.setup = function () {
        //push();
        for (var i = 0; i < 51; i++) {

            this.petal[i] = new petal(x,y,i*2*PI/1.618);
        }
        //pop();
        rectMode(CENTER);
    }

    this.draw = function (n) {
        //this.pos.y=map(mouseY,0,height,this.y+height*0.3,this.y-height*0.3)

        strokeWeight(3);
        stroke(0);
        fill(0, 137, 6);
        noStroke();
        rect(x,(height+y)/2,height*0.025,height-y)
        //stroke(0, 137, 6)
        //trokeWeight(height*0.05);
        //line(x,y,x,height);
        //push();
        noStroke();
        if(n>51) n=51;
        for (var i = 0; i < n; i++) {
            this.petal[i].draw(this.t);
        }
        //this.t+=this.dt
        //print(this.t);
        fill(this.color[0], this.color[1], this.color[2])
        ellipse(this.pos.x, this.pos.y, this.radius);
        //pop();
        
        
    }


}