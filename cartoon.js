var canvas = document.getElementById("cartoon");
var context = canvas.getContext("2d");
var x = 20
var y = 0;

function drawFrame(){
    //清除画布上的内容
    context.clearRect(0,0,canvas.width,canvas.height);
    //重新开始绘画
    context.beginPath();

    context.rect(x,y,50,25);
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.stroke();
    //下次绘制将向下偏移1个像素
    y += 1;
    setTimeout("drawFrame()",20);
}

window.onload = drawFrame;