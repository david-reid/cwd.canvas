window.onload = function() {
    console.log("HTML5 Canvas API for Games");

    let graphics = new Graphics("canvas");
    graphics.makeFullScreen();

    graphics.fillCanvas("#1bafdb");
    graphics.strokeRectangle(50,50, 150,100, "#ffffff", 5);
    graphics.fillCircle(300,100, 75, "#ffffff");
    graphics.strokeCircle(475,100, 75, "#ffffff", 5);
}