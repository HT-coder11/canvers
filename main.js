var canvas = document.getElementById("myCanvas")
var car = canvas.getContext("2d")
var color = "red";
var width = 8
var amount = Math.floor((canvas.width * canvas.height) / 25000);



function oly(){
    car.beginPath()
    car.strokeStyle = "#EE334E"
    car.lineWidth = width
    car.arc(680, 200, 80, 0, 2*Math.PI)
    car.stroke()

    car.beginPath()
    car.strokeStyle = "black"
    car.lineWidth = width
    car.arc(500, 200, 80, 0, 2*Math.PI)
    car.stroke()

    car.beginPath()
    car.strokeStyle = "#0081C8"
    car.lineWidth = width
    car.arc(320, 200, 80, 0, 2*Math.PI)
    car.stroke()

    car.beginPath()
    car.strokeStyle = "#FCB131"
    car.lineWidth = width
    car.arc(410, 275, 80, 0, 2*Math.PI)
    car.stroke()


    car.beginPath()
    car.strokeStyle = "#00A651"
    car.lineWidth = width
    car.arc(590, 275, 80, 0, 2*Math.PI)
    car.stroke()
}

function pat(){
    car.beginPath()
    
    car.lineWidth = width

    for(var i = 0; i <50 ; i++){
        var clr=["red", "purple","teal","aqua","yellow","pink","green","orange","grey","golden","aquamarine"]
        var ran = Math.floor(Math.random() * 11);
        console.log(ran)
        car.strokeStyle = clr[ran];
        car.moveTo(400,500)
        car.lineTo(600, 500)
        car.rotate(90)
        car.lineTo(200, 200)
        car.closePath();
        car.stroke()
    }
    
}

//general function to make any shapes
function drawshapes(x, y, r, s){

    color = document.getElementById("clr").value;
    width = document.getElementById("wid").value;
    car.strokeStyle = color;
    car.lineWidth = width;
    car.translate(x, y)
    for(var i = 0; i <s; i++){
        // calculate the rotation
        var rotation = ((Math.PI * 2) / s) * i;
        if(i == 0){
            car.moveTo(r*Math.cos(rotation), r*Math.sin(rotation))
        }
        else{
            car.lineTo(r*Math.cos(rotation), r*Math.sin(rotation))
        }
    }
    car.closePath();
    car.stroke()
    car.resetTransform();
}

function hex(){

    var xPos = Math.floor(Math.random() * 900);
    var yPos = Math.floor(Math.random() * 500);
    drawshapes(xPos, yPos, 60,6)
}

function tris(){
    var xPos = Math.floor(Math.random() * 1000)
    var yPos = Math.floor(Math.random() * 600)
    drawshapes(xPos, yPos, 60, 3)
}



function clearCan() {
    car.clearRect(0, 0, canvas.width, canvas.height)
}

var mouseEvent = "empity"
var lastPosX , lastPosY 

canvas.addEventListener("mousedown", my_mouseDown)

function my_mouseDown(e){
   width = document.getElementById("wid").value;
   color =  document.getElementById("clr").value;
   car.strokeStyle = color;
   car.lineWidth = width;
   mouseEvent = "mouseDown"
   
}

canvas.addEventListener("mousemove", my_mouseMove)

function my_mouseMove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft
    current_position_of_mouse_y = e.clientY - canvas.offsetTop
    if(mouseEvent == "mouseDown"){
        car.beginPath()
        car.strokeStyle = color;
        car.lineWidth = width;
        car.moveTo(lastPosX, lastPosY)
        car.lineTo(current_position_of_mouse_x, current_position_of_mouse_y)
        car.stroke()

    }
    lastPosX = current_position_of_mouse_x;
    lastPosY = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseUp)

function my_mouseUp(){
    mouseEvent = "mouseup"
}

canvas.addEventListener("mouseleave", my_mouseLeave)

function my_mouseLeave(){
    mouseEvent = "mouseleave"
}