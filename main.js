 music="";
 leftWristx=0;
 rightWristx=0;

 leftWristy=0;
 rightWristy=0;

function preload(){
   music=loadSound("music.mp3");
}


function setup(){
  canvas=createCanvas(400,300);
  canvas.position(476,230);
  video=createCapture(VIDEO);
  video.hide();

  poseNet= ml5.poseNet(video , modelLoaded);
  poseNet.on("pose", gotResult);
}


function draw(){
   image(video, 0, 0, 400, 300);


   fill("#ff391e");
   stroke("#ff391e");
   circle(leftWristx, leftWristy, 20);
}


function PLAY(){
    music.play();
    music.setVolume(1);
    music.rate(1);
}


function modelLoaded(){
   console.log("model is loaded");
}


function gotResult(results){
    if(  results.length > 0){
      console.log(results);
      leftWristx=results[0].pose.leftWrist.x;
      leftWristy=results[0].pose.leftWrist.y;
      console.log("leftWristx: " +leftWristx+ " leftWristy: " +leftWristy);

      
      rightWristx=results[0].pose.rightWrist.x;
      rightWristy=results[0].pose.rightWrist.y;
      console.log("rightWristx: " +rightWristx+ " rightWristy: " +rightWristy);
    }  
}
