canvas=
document.getElementById("mycanvas");
ctx= canvas.getContext("2D");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();