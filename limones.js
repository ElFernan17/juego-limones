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
let limonY = 0;

let puntaje = 0;
let vidas = 3;

let velocidadCaida = 200

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
    setInterval(bajarLimon,velocidadCaida)

    dibujarPersonaje();

    dibujarSuelo();

    aparecerLimon();
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
}

function moverDerecha(){
    personajeX = personajeX + 10
    actualizarPantalla();
}

function bajarLimon(){
    limonY = limonY + 10
    actualizarPantalla();
    detectarPiso();
    detectarAtrapado();
}

function detectarAtrapado(){
    if (limonX >= personajeX - 10 && limonX <= personajeX + 30 && limonY >= personajeY -10 && limonY <= personajeY + 50){
        aparecerLimon();
        puntaje = puntaje + 1

        let componente = document.getElementById("txtPuntaje");
    componente.textContent = puntaje;
    }
}

function detectarPiso(){
    if (limonY >= alturaSuelo - altoLimon){
        aparecerLimon();
        vidas = vidas - 1;
        let componente = document.getElementById("txtVidas");
    componente.textContent = vidas;
    }
}

function generarAleatorio(min,max){
    let random = Math.random();
    let numero = random * (max - min)

    let numeroEntero = Math.ceil(numero)
    numeroEntero = numeroEntero + min

    return numeroEntero
}


function aparecerLimon(){
    limonX = generarAleatorio(-1,canvas.width - anchoLimon);
    limonY = 0
    actualizarPantalla();
}