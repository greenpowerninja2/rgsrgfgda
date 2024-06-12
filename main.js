img = "";
status = "";
objects = [];
alarm = "";
function preload() {
    alarm=loadSound("alarm.mp3");
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start(){
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function preload(){
    img = loadImage('dog_cat.jpg');
}

function modelLoaded() {
    console.log("Model Loaded!")
    status= true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
    
if(status != ""){
    document.getElementById("number_of_objects").innerHTML = "PERSON GONE🚨🚨🚨";
    alarm.play();
    objectDetector.detect(video, gotResult);
    for (i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "Status: Object Detected";
document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+objects.length;
    }
}
}

function play(){
    alarm.play();
}