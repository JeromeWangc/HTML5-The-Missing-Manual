var imgd = document.getElementById("wall");
var canvas = document.getElementById("drawPicture");
var context = canvas.getContext("2d");
//粗体 大小 字体
context.font = "bold 20px Arial";

//新建图像对象
var img = new Image();
//在图像加载完成后绘图
img.onload = function () {
    //将图像缩放
    context.drawImage(img,0,0,300,200);
    context.beginPath();
    //在原图片的（0，0）处截取800*787以200*150大小呈现在（500，0）
    context.drawImage(img,0,0,800,787,500,0,200,150);
    context.beginPath();
    //文本参照行
    context.textBaseline = "top";
    //文本填充颜色
    context.fillStyle = "black";
    //填充文本
    context.fillText("I'm stuck in a canvas. Someone let me out!",0,250);
    context.beginPath();
    //设置阴影颜色和透明度
    context.shadowColor = "black";
    //设置阴影的模糊程度 数值越大越模糊
    context.shadowBlur = 15;
    //设置阴影相对文字的偏离位置
    context.shadowOffsetX = 15;
    context.shadowOffsetY = 15;
    context.font = "bold 40px Verdana,sans-serif";
    context.lineWidth = "1";
    context.strokeStyle = "red";
    context.strokeText("I'm an OUTLINE",0,300);

    context.beginPath();
    //创建图案对象
    var pattern = context.createPattern(imgd,"repeat");
    //设置填充
    context.fillStyle = pattern;
    context.rect(0,400,500,300);
    context.fill();

}
//加载图片
img.src = "drawPicture.jpg";