song = "";
song1 = "";

function change() {
    window.location = "image.html";
}

function setup() {
    canvas = createCanvas(600 , 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,600,400);
}

function preload() {
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
}
function play() {
    song.play();
    song1.play();
}
function back() {
    window.location = "index.html";
}

