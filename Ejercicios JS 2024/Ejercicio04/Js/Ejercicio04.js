const pantalla = document.getElementById('pantalla');
let operacion = '';

function actualizarPantalla(valor) {
    pantalla.textContent = valor;
}

function limpiarPantalla() {
    operacion = '';
    actualizarPantalla('0');
}

function agregarDigito(digito) {
    if (operacion.length === 0 || operacion === '0') {
        operacion = digito;
    } else {
        operacion += digito;
    }
    actualizarPantalla(operacion);
}

function agregarOperador(operador) {
    if (operacion.length > 0 && !isNaN(parseInt(operacion[operacion.length - 1]))) {
        operacion += operador;
        actualizarPantalla(operacion);
    }
}

function calcularResultado() {
    if (operacion.length > 0 && !isNaN(parseInt(operacion[operacion.length - 1]))) {
        let resultado = eval(operacion);
        actualizarPantalla(resultado);
        operacion = resultado.toString();
    }
    if(operador){
        pantalla.limpiarPantalla;
    }
}

function adjuntarEventListeners() {
    document.querySelectorAll('.badge.bg-info').forEach(boton => {
        boton.addEventListener('click', () => agregarDigito(boton.textContent));
    });

    document.getElementById('mas').addEventListener('click', () => agregarOperador('+'));
    document.getElementById('menos').addEventListener('click', () => agregarOperador('-'));
    document.getElementById('igual').addEventListener('click', calcularResultado);
}

adjuntarEventListeners();
