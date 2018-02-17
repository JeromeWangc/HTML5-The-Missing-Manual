var canvas = document.getElementById("drawPicture");
var context = canvas.getContext("2d");
//新建图像对象
var img = new Image();
//在图像加载完成后绘图
img.onload = function () {
    context.drawImage(img,0,0);
}
//加载图片
img.src = "drawPicture.jpg";