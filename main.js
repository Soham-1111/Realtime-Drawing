function setup(){
    canvas= createCanvas(510, 425);
    canvas.position(800,300);
    video= createCapture(VIDEO);
    video.size(500, 600);
    video.position(45, 225);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);
    
}
noseX= 0;
noseY= 0;
leftWristX= 0;
rightWristX= 0;
difference= 0;

function draw(){
    background('#666a75');
    fill('#e8431e');
    stroke('#e8431e');
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("Model successfully loaded!");
}

function gotResult(results){
if(results.length > 0){
    console.log(results);
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    leftWrist= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;
    difference= floor(leftWristX - rightWristX);
    document.getElementById("sides").innerHTML= "The length of each side of the square is " + difference; 
    console.log(leftWristX , rightWristX);

    
}
}


