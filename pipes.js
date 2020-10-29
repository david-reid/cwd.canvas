class Pipes {
    constructor(graphics, ball) {
        this.frameCount = 0;
        this.ball = ball;
        this.fx = graphics;
        this.elements = [];
        this.elements.push(new Pipe(this.fx));
    }

    draw() {
        this.elements.forEach( pipe => {
            pipe.draw();
        });
    }

    move() {
        this.frameCount++;
        if ( this.frameCount % 120 == 0 ) {
            this.elements.push(new Pipe(this.fx));
        }

        for ( let i = 0; i < this.elements.length; i++ ) {
            this.elements[i].move();
            this.elements[i].checkForCollision(this.ball);

            if ( this.elements[i].offscreen() ) {
                this.elements.splice(i,1);
            }
        }
    }
}

class Pipe {
    constructor(graphics) {
        this.top  = 0;
        this.bottom = 0;
        this.xpos = 0;
        this.width = 60;
        this.speed = 2;
        this.fx = graphics;
        this.color1 = "cccccc";
        this.color2 = "#555555";
        this.collision = false;
        this.reset();
    }

    reset() {
        let lowerLimit = this.fx.dimensions().height/3;
        this.top = Math.random(this.fx.dimensions().height/2) * 100 + lowerLimit;
        this.bottom = Math.random(this.fx.dimensions().height/2) * 100 + lowerLimit;
        this.xpos = this.fx.dimensions().width;
    }

    move() {
        this.xpos -= this.speed;
    }

    draw() {
        this.color1 = ( this.collision ) ? "#ff7619" : "#cccccc";
        this.gradient = this.fx.createTwoColorGradient(
            this.color1, this.color2, this.xpos,0, this.xpos+40,0);
        this.fx.fillRectangle(this.xpos, 0, this.width, this.top, this.gradient);
        this.fx.fillRectangle(
            this.xpos, this.fx.dimensions().height-this.bottom, this.width, this.bottom, this.gradient);
    }

    offscreen() {
        return this.xpos < 0 - this.width;
    }

    checkForCollision(ball) {
        this.collision = false;
        if ( ball.ypos < this.top || ball.ypos > this.fx.dimensions().height - this.bottom ) {
            if ( ball.xpos+ball.size > this.xpos && ball.xpos-ball.size < this.xpos + this.width ) {
                this.collision = true;
            }
        }
        return this.collision;
    }
}