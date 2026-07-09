let canvas = document.getElementById("areaJuego");
let context = canvas.getContext("2d");

const alturaSuelo = 350;
const alturaPersonaje = 30;
const anchoPersonaje = 15;

const anchoLimon = 15
const altoLimon = 15

let personajeX = canvas.width/2;

let limonX = 0;
let limonY = 5;

function limpiarCanva(){
    context.clearRect(0,0,600,400)
}

function actualizarPantalla(){
    limpiarCanva();
    dibujarPersonaje();
    dibujarSuelo();
    dibujarLimon();
}

function iniciarEjecucion(){
    dibujarPersonaje();

    dibujarSuelo();

    dibujarLimon();
}

function dibujarPersonaje(){
    context.fillStyle = "pink";
    context.fillRect(personajeX,320,anchoPersonaje,alturaPersonaje);
}

function dibujarSuelo(){
    context.fillStyle = "green";
    context.fillRect(0,alturaSuelo,canvas.width,canvas.height);
}

function dibujarLimon(){
    context.fillStyle = "yellow";
    context.fillRect(limonX,limonY,anchoLimon,altoLimon);
}

function moverIzquierda(){
    personajeX = personajeX - 10
    actualizarPantalla();
}

function moverDerecha(){
    personajeX = personajeX + 10
    actualizarPantalla();
}

function bajarLimon(){
    limonY = limonY + 10
    actualizarPantalla();
}

