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

window.onload = drawCanvas;