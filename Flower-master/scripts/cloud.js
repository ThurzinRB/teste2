function cloud(x, y, z) {
    this.pos = createVector(x, y, z);
    this.vel = createVector(map(z,0,20,0,1), 0,0);
    this.scale = map(z,0,20,0,30);

    this.setup

    this.update = function () {
        this.pos.add(this.vel);
        if (this.pos.x>width+10){
            this.pos.x=-150;
        }
    }

    this.draw = function (){
        //print(this.pos.x);
        fill(255);
        image(img, this.pos.x,this.pos.y,this.pos.z*height*0.01,this.pos.z*height*0.005);
        //ellipse(this.pos.x,this.pos.y,this.pos.z);
    }
}