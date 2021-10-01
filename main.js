 music="";



function preload(){
   music=loadSound("music.mp3");
}


function setup(){
  canvas=createCanvas(400,300);
  canvas.position(476,230);
  video=createCapture(VIDEO);
  video.hide();

}


function draw(){
   image(video, 0, 0, 400, 300);

}


function PLAY(){
    music.play();
}