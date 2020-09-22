window.onload = function() {
    console.log("HTML5 Canvas API for Games");

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    context.fillStyle = "#1bafdb";
    context.fillRect(0,0, canvas.width, canvas.height);

    context.lineWidth = 5;
    context.strokeStyle = "#ffffff";
    context.strokeRect(50,50, 150,100);

    context.fillStyle = "#ffffff";
    context.beginPath();
    context.arc(300,100, 75, 0, Math.PI*2);
    context.fill();

    context.lineWidth = 5;
    context.strokeStyle = "#ffffff";
    context.beginPath();
    context.arc(475,100, 75, 0, Math.PI*2);
    context.stroke();
}