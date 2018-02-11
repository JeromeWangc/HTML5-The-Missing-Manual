function drawCanvas() {
    //获取canvas元素
    var canvas = document.getElementById("drawingCanvas");
    //获取2d绘图上下文
    var context = canvas.getContext("2d");
    //设置线条宽度和颜色
    context.lineWidth = 20;
    context.strokeStyle = "rgb(205,40,40)";

    //第一条直线 使用方头
    context.moveTo(10,50);
    context.lineTo(400,50);
    context.lineCap = "butt";
    context.stroke();

    //绘制第二条直线 使用长方头
    //开始新的绘制路径 绘制新的线段
    context.beginPath();
    context.moveTo(10,120);
    context.lineTo(400,120);
    context.lineCap = "round";
    context.stroke();

    //绘制第三条直线
    context.beginPath();
    context.moveTo(10,190);
    context.lineTo(400,190);
    context.lineCap = "square";
    context.stroke();
}

function drawTriangle() {
    //获取canvas元素
    var canvas = document.getElementById("drawingCanvas");
    //获取2d绘图上下文
    var context = canvas.getContext("2d");

    context.moveTo(250,50);
    context.lineTo(50,250);
    context.lineTo(450,250);
    //context.lineTo(450,250);
    context.closePath();

    //填充内部
    context.fillStyle = "blue";
    context.fill();

    //绘制轮廓
    context.lineWidth = 10;
    context.strokeStyle = "red";
    context.stroke();
    //直接填充一个矩形区域
    context.fillRect(10,10,30,20);
    //绘制一个矩形
    context.strokeRect(100,100,50,30);
}

function drawRound() {
    //获取canvas元素
    var canvas = document.getElementById("drawingCanvas");
    //获取2d绘图上下文
    var context = canvas.getContext("2d");
    //圆形的各种参数
    var centerX = 150;
    var centerY = 200;
    var radius = 100;
    var startingAngle = 1.25 * Math.PI;
    var endingAngle = 1.75 * Math.PI;
    //绘制弧形
    context.arc(centerX,centerY,radius,startingAngle,endingAngle);
    context.stroke();
}

function drawBezier(){
    var canvas = document.getElementById("drawingCanvas");
    var context = canvas.getContext("2d");
    //起点
    context.moveTo(62,242);
    
    var control1_x = 187;
    var control1_y = 32;
    var control2_x = 429;
    var control2_y = 480;
    var endingX = 365;
    var endingY = 133;

    context.bezierCurveTo(control1_x,control1_y,control2_x,control2_y,endingX,endingY);
    context.stroke();
}

window.onload = drawBezier;