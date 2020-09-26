class Graphics {

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
    }

    dimensions() {
        return {
            x: 0, y: 0, width: this.canvas.width, height: this.canvas.height
        };
    }

    makeFullScreen() {
        window.document.body.style.width = "100vw";
        window.document.body.style.height = "100vh";
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    fillCanvas(color) {
        this.fillRectangle(0,0, this.canvas.width,this.canvas.height, color);
    }

    fillRectangle(x,y, width,height, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x,y, width, height);
    }

    fillCircle(x,y, size, color) {
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.arc(x,y, size, 0, Math.PI*2);
        this.context.fill();
    }

    strokeRectangle(x,y, width,height, color, lineWidth) {
        this.context.lineWidth = lineWidth;
        this.context.strokeStyle = color;
        this.context.strokeRect(x,y, width,height);
    }

    strokeCircle(x,y, size, color, lineWidth) {
        this.context.lineWidth = lineWidth;
        this.context.strokeStyle = color;
        this.context.beginPath();
        this.context.arc(x,y, size, 0, Math.PI*2);
        this.context.stroke();
    }
}