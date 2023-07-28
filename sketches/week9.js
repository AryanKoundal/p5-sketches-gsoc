function setup(){
    createCanvas(500, 500, WEBGL);
    noStroke();
    noLoop();
}

function preload(){
  imgSource = loadImage('../assets/flag.jpeg');
}


function draw() {
    background(32);
    let mX = mouseX - width / 2;
    let mY = mouseY - height / 2;
    imageLight(imgSource);
    plane(400,400);
}