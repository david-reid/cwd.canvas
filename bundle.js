window.onload = function() {
    console.log("HTML5 Canvas API for Games");

    let graphics = new Graphics("canvas");
    graphics.makeFullScreen();

    let gradient = graphics.createTwoColorGradient(
        "#4c5c96","#1bafdb",0,0, 0,graphics.dimensions().height * 0.66);

    graphics.fillCanvas(gradient);
    graphics.strokeRectangle(50,50, 150,100, "#ffffff", 5);
    graphics.fillCircle(300,100, 75, "#ffffff");
    graphics.strokeCircle(475,100, 75, "#ffffff", 5);

    graphics.fillTriangle(125,300, 150, "#ffffff");
    graphics.strokeTriangle(300,300, 150, "#ffffff", 5);
    graphics.stroke(0,500, graphics.dimensions().width,500, "#ffffff", 15, [20,10]);
}