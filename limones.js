let canvas = document.getElementById("areaJuego");
let context = canvas.getContext("2d");

let alturaSuelo = 350
let alturaPersonaje = 30
let anchoPersonaje = 15


function iniciarEjecucion(){
    dibujarPersonaje();

    dibujarSuelo();
}

function dibujarPersonaje(){
    context.fillStyle = "pink";
    context.fillRect(canvas.width/2,320,anchoPersonaje,alturaPersonaje);
}

function dibujarSuelo(){
    context.fillStyle = "green";
    context.fillRect(0,alturaSuelo,canvas.width,canvas.height);
}