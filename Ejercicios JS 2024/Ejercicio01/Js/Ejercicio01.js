let main = document.querySelector("main");
let turno = "X";
let mensaje = document.getElementById("mensaje");
let limpiar = document.getElementById("limpiar");

main.addEventListener("click", marcarCasilla);
limpiar.addEventListener("click", limpiarCasillas);

function marcarCasilla(evento) {
    let boton = evento.target;

    if (boton.tagName !== "BUTTON" || boton === mensaje || boton === limpiar) {
        return;
    }

    if (boton.innerText === "") {
        boton.innerText = turno;

        if (turno === "X") {
            boton.style.backgroundColor = "#00913f";
            turno = "O";
        } else {
            boton.style.backgroundColor = "#FF0000";
            turno = "X";
        }

        mensaje.innerText = "Es el turno de " + turno;

        if (turno === "O") {
            mensaje.style.backgroundColor = "#FF0000";
        } else {
            mensaje.style.backgroundColor = "#00913f";
        }

        if (verificarGanador()) {
            mensaje.innerText = "¡Ganador: " + (turno === "X" ? "O" : "X") + "!";
            main.removeEventListener("click", marcarCasilla);
        }
    }
}

function verificarGanador() {
    let botones = document.getElementsByTagName("button");
    let combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combinacion of combinacionesGanadoras) {
        let [a, b, c] = combinacion;
        if (botones[a].innerText && botones[a].innerText === botones[b].innerText && botones[a].innerText === botones[c].innerText) {
            return true;
        }
    }
    return false;
}

function limpiarCasillas() {
    let botones = document.getElementsByTagName("button");

    for (let boton of botones) {
        if (boton !== mensaje && boton !== limpiar) {
            boton.innerText = "";
            boton.style.backgroundColor = "#FFFFFF";
        }
    }

    turno = "X";
    mensaje.style.backgroundColor = "#00913f";
    mensaje.innerText = "Es el turno de " + turno;
    main.addEventListener("click", marcarCasilla);
}
