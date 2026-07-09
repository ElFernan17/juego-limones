let canvas = document.getElementById("areaJuego");
let context = canvas.getContext("2d");

const alturaSuelo = 360;
const alturaPersonaje = 60;
const anchoPersonaje = 40;

const anchoLimon = 20
const altoLimon = 20

let personajeX = canvas.width/2;
let personajeY = alturaSuelo - alturaPersonaje

let limonX = 200;
let limonY = -10;

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
    context.fillRect(personajeX,personajeY,anchoPersonaje,alturaPersonaje);
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
    detectarColision();
}

function moverDerecha(){
    personajeX = personajeX + 10
    actualizarPantalla();
    detectarColision();
}

function bajarLimon(){
    limonY = limonY + 10
    actualizarPantalla();
}

function detectarColision(){
    if (limonX >= personajeX - 10 && limonX <= personajeX + 30 && limonY >= personajeY -10 && limonY <= personajeY + 50){
        alert("atrapado!!")
    }
}

