var socket;
var canvas;

function setup(){
    
    socket = io.connect('http://localhost:3000');
    socket.on('mouse', newDrawing);
    
    canvas = createCanvas(1000,1000);
    canvas.position(0,0);
    canvas.style('z-index', '1');
    


}

function newDrawing(data){
    noStroke();
    fill(255,0,100);
    ellipse(data.x, data.y, 24, 24);
}

function mouseDragged(){
    console.log('Sending: ' + mouseX + ',' + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }
socket.emit('mouse', data);

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 24, 24);
   
    
}

function draw(){
    background(0);
}