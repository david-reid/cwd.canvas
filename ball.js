class Ball {
    
    constructor(graphics) {
        this.xpos = 60;
        this.ypos = graphics.dimensions().height/2;
        this.size = 25;
        this.fx = graphics;
        this.xvel = 0;
        this.yvel = 0;
        this.gravity = 0.1;
        this.lift = -8;
    }

    draw() {
        let gradient = this.fx.createTwoColorGradient(
            "#ff4500", "#ff7619", this.xpos, this.ypos + this.size, this.xpos,this.ypos
        );
        this.fx.fillCircle(this.xpos, this.ypos, this.size, gradient);
    }

    move() {
        this.yvel += this.gravity;
        if ( this.yvel < this.lift ) {
            this.yvel = this.lift;
        }
        this.xpos += this.xvel;
        this.ypos += this.yvel;
        if ( this.ypos <= 0 ) {
            this.ypos = 0;
            this.yvel = 0;
        }
        if ( this.ypos >= this.fx.dimensions().height - this.size ) {
            this.ypos = this.fx.dimensions().height - this.size;
            this.yvel = 0;
        }
    }

    up() {
        this.yvel += this.lift;
    }
}