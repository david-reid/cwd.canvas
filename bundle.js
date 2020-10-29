let graphics;
let clouds;
let mountains;
let ball;
let pipes;

window.onload = function() {
    console.log("HTML5 Canvas API for Games");
    graphics = new Graphics("canvas");
    graphics.makeFullScreen();
    clouds = new Clouds(graphics);
    mountains = new Mountains(graphics);
    ball = new Ball(graphics);
    pipes = new Pipes(graphics, ball);
    addEventListener("keydown", keyPressed);
    setInterval(update, 1000/60);
}

function update() {
    moveEverything();
    drawEverything();
}

function drawEverything() {
    let gradient = graphics.createTwoColorGradient(
        "#4c5c96","#1bafdb",0,0, 0,graphics.dimensions().height * 0.66);
    graphics.fillCanvas(gradient);
    clouds.draw();
    mountains.draw();
    pipes.draw();
    ball.draw();
}

function moveEverything() {
    pipes.move();
    ball.move();
}

function keyPressed(event) {
    if ( event.keyCode == 32 ) {
        ball.up();
    }
}