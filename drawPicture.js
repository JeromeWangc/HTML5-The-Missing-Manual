var canvas = document.getElementById("drawPicture");
var context = canvas.getContext("2d");
//新建图像对象
var img = new Image();
//在图像加载完成后绘图
img.onload = function () {
    //将图像缩放
    context.drawImage(img,0,0,300,200);
    //在原图片的（0，0）处截取800*787以200*150大小呈现在（500，0）
    context.drawImage(img,0,0,800,787,500,0,200,150);
}
//加载图片
img.src = "drawPicture.jpg";