
function calcularGrados(densInicial, densFinal) {

    if (isNaN(densInicial) || isNaN(densFinal) || densInicial <= 0 || densFinal <= 0 || densInicial <= densFinal) {
        return -1; 
    }

    let grados = (densInicial - densFinal) / 7.5; 
    return grados.toFixed(2); 
}

function anadirMensaje(mensaje, tipo) {

    let aviso = document.getElementById("aviso");

    let alerta = document.createElement("div");
    alerta.classList.add("alert");

    switch (tipo) {
        case "error":
            alerta.classList.add("alert-danger");
            break;
        case "info":
            alerta.classList.add("alert-info");
            break;
        case "success":
            alerta.classList.add("alert-success");
            break;
        default:
            alerta.classList.add("alert-primary");
            break;
    }

    alerta.textContent = mensaje;

    aviso.innerHTML = "";

    aviso.appendChild(alerta);
}

function botonCalcularPulsado() {

    let densInicial = parseFloat(document.getElementById("densInicial").value);
    let densFinal = parseFloat(document.getElementById("densFinal").value);

    let grados = calcularGrados(densInicial, densFinal);

    if (grados !== -1) {
        anadirMensaje("Su cerveza tendrá " + grados + " grados", "success");
    } else {
        anadirMensaje("Datos erróneos", "error");
    }
}

function botonLimpiarPulsado() {

    document.getElementById("densInicial").value = "";
    document.getElementById("densFinal").value = "";

    anadirMensaje("", "info");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnCalcular").addEventListener("click", botonCalcularPulsado);
    document.getElementById("btnLimpiar").addEventListener("click", botonLimpiarPulsado);
});