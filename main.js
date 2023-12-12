 var status = "";
   function preload()  {
    img= loadImage('dog_cat.jpg');
}
function setup()    {
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Object Detected:";
}
function modelLoaded()  {
    console.log("CocoSSD has been initialized");
   status= true;
   objectDetector.detect(img, gotResult);
}
function gotResult()    {
    if( error){
        console.log( error);
    }
    console.log(results);
}
function draw() {
    image (img, 0, 0, 640, 420);
    stroke('red');
    fill('red');
    text ("Dog", 45, 75);
    noFill()
    rect(30, 60, 450, 350);
     
    fill('red');
    text("Cat", 350, 120);
    noFill();
    rect(300,80,290, 320);
}
