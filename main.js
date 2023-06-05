S = "";

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
}

function start()
{
    ObjectDetector = ml5.ObjectDetector('cocossd', modelLoaded);
    document.getElementById("SH").innerHTML = "Status: Detectando objetos.";
    document.getElementById("QO").value;
}

function modelLoaded()
{
    console.log("Modelo Carregado! ");
    S = true;
}

function draw()
{
    image(video, 0, 0, 480, 380);
}