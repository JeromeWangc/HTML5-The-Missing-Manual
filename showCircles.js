var circles = [];
var colors = ["green","blue","red","yellow","magenta","orange","brown","purpe","pink"];
var canvas = document.getElementById("hello");
var context = canvas.getContext("2d");
context.globalAlpha = 0.85;
context.strokeStyle = "black";

function Circle (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.isSelected = false;
}

function addRandomCircle() {
    var radius = Math.floor(Math.random * 50) + 10;
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    var radius = Math.floor(Math.random() * 50 ) + 10;
    var color = colors[Math.floor(Math.random() * colors.length)];
    var circle = new Circle(x,y,radius,color);
    circles.push(circle);
    drawCircles();
}

function drawCircles(){
    context.clearRect(0,0,canvas.width,canvas.height);
    for (var i = 0; i < circles.length; i++){
        var circle = circles[i];
        console.log(circle.color)
        context.beginPath();
        context.arc(circle.x,circle.y,circle.radius,0,Math.PI * 2);
        context.fillStyle = circle.color;
        context.fill();
        context.stroke();
    }
}

