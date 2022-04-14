narizx="";
narizy="";
function preload(){
nariz=loadImage('nariz.png')
}
function setup(){
    lienso=createCanvas(300,300);
    lienso.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelocargado);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(nariz,narizx,narizy,50,50);
    fill(0, 255, 228);
stroke(33, 53, 144);
rect(0,0,500,20);
rect(0,280,500,20);
rect(0,0,20,500);
rect(280,0,20,500);

fill(255, 0, 0);
stroke(136, 11, 11);
circle(290,290,40);
circle(10,10,40);
circle(10,290,40);
circle(290,10,40);
}
function tomarfoto(){
save('foto.png');
}
function modelocargado(){
    console.log('posenet se a cargado');
}
function gotPoses(results){
    if(results.length>0){
        narizx=results[0].pose.nose.x-25;
        narizy=results[0].pose.nose.y-25;  
    }
}