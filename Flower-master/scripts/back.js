function back() {
    this.cloud = []
    this.color = [128, 218, 235]

    this.setup = function () {
        for (var i = 0; i < 20; i++) {
            cloud[i] = new cloud(random(0, width), random(0, height), random(0, 20));
        }


    }

    this.draw = function (img) {
        background(this.color[0], this.color[1], this.color[2]);
        for (var i = 0; i < 20; i++) {
            cloud[i].update();
            cloud[i].draw(img);
        }
    }
}