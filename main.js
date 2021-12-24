status = ""

function setup ()  {
canvas = createCanvas(300,300)
canvas.position(530,350)
video = createCapture(VIDEO)
video.hide()
}



function draw () {
    image(video,0,0,300,300)
}



function start() {
    cocossd = ml5.objectDetector("cocossd",modelloaded)
    document.getElementById("status").innerHTML="Status: Detecting Objects"
    results = document.getElementById("objectname").value
}

function modelloaded () {
    console.log("The Model has been loaded")
    status==true
}