var mouseevent="empty"
var last_position_x,last_position_y
var current_position_x,current_position_y
var canvas=document.getElementById("myCanvas")
var ctx= canvas.getContext("2d"); //get reference of canvas
ctx.beginPath()
ctx.strokeStyle="Purple"
ctx.lineWidth=5



canvas.addEventListener("mousedown", my_mousedown);
 function my_mousedown(e) 
  { mouseevent="mousedown" 
}

canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(e) 
  { mouseevent="mouseup" 
}

canvas.addEventListener("mouseleave", my_mouseleave);
 function my_mouseleave(e) 
  { mouseevent="mouseleave" 
}

canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e) 
  { current_position_x=e.clientX - canvas.offsetLeft;
    current_position_y=e.clientY - canvas.offsetTop;
    
      if (mouseevent="mousedown") {
    ctx.beginPath()
    ctx.strokeStyle="Red"
    ctx.lineWidth=2
    ctx.moveTo(last_position_x,last_position_y)
    ctx.lineTo(current_position_x,current_position_y)
    ctx.stroke()
  }
  last_position_x=current_position_x
  last_position_y=current_position_y



}