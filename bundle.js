window.onload = function() {
    console.log("HTML5 Canvas API for Games");

    let graphics = new Graphics("canvas");
    graphics.makeFullScreen();

    let gradient = graphics.createTwoColorGradient(
        "#4c5c96","#1bafdb",0,0, 0,graphics.dimensions().height * 0.66);
    graphics.fillCanvas(gradient);

    let clouds = new Clouds(graphics);
    let mountains = new Mountains(graphics);

    clouds.draw();
    mountains.draw();
}