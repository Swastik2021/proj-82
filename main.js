var mouse_event = "empty";
var last_position_x, last_position_y ;
canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color= document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;
    radius = getElementById("radius").value
    mouse_event="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouse_event= "mouseUP"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouse_event= "mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_mouse_x= e.clientX - canvas.offsetLeft;
    current_position_mouse_y= e.clientY - canvas.offsetTop;
    if (mouse_event == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(last_position_x, last_position_y, radius, 0, 2* Math.PI);
        console.log("current position of x and y coordinates");
        console.log("x =" + current_position_mouse_x +"y =" + current_position_mouse_y)
        ctx.stroke()
    }
last_position_x=current_position_mouse_x;
last_position_y=current_position_mouse_y;
}