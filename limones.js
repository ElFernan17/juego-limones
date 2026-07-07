let canvas = document.getElementById("areaJuego");
let context = canvas.getContext("2d");

const alturaSuelo = 350
const alturaPersonaje = 30
const anchoPersonaje = 15

let personajeX = canvas.width/2

function limpiarCanva(){
    context.clearRect(0,0,600,400)
}

function actualizarPantalla(){
    limpiarCanva();
    dibujarPersonaje();
    dibujarSuelo();
}

function iniciarEjecucion(){
    dibujarPersonaje();

    dibujarSuelo();
}

function dibujarPersonaje(){
    context.fillStyle = "pink";
    context.fillRect(personajeX,320,anchoPersonaje,alturaPersonaje);
}

function dibujarSuelo(){
    context.fillStyle = "green";
    context.fillRect(0,alturaSuelo,canvas.width,canvas.height);
}

function moverIzquierda(){
    personajeX = personajeX - 10
    actualizarPantalla();
}