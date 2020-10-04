class Cloud {
    constructor(xpos,ypos, graphics) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.fx = graphics;
        this.smallRadius = 30;
        this.bigRadius = 40;
    }

    draw() {
        let gradient = this.fx.createTwoColorGradient("#555555", "#ffffff",
            this.xpos, this.ypos + this.smallRadius, this.xpos, this.ypos);

        this.fx.fillCircle(this.xpos,this.ypos, this.smallRadius, gradient);
        this.fx.fillCircle(this.xpos+this.bigRadius,this.ypos, this.bigRadius, gradient);
        this.fx.fillCircle(this.xpos+this.bigRadius*2,this.ypos, this.smallRadius, gradient);
    }
}

class Clouds {
     constructor(graphics) {
         let ypos = graphics.dimensions().height*0.1;
         let cloudWidth = Math.ceil(graphics.dimensions().width/8);
         let numberOfClouds = Math.ceil(graphics.dimensions().width / cloudWidth) + 1;
         this.elements = [];
         let offset = 0;

         for ( let i = 0; i < numberOfClouds; i++ ) {
             offset = ( i % 2 == 0 ) ? 25 : 0;
             this.elements.push(new Cloud(i*cloudWidth,ypos+offset,graphics));
         }
     }

     draw() {
         this.elements.forEach(cloud => {
             cloud.draw();
         });
     }
}