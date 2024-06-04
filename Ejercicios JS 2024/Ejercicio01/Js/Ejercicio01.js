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

    else {

        boton.innerText = turno;

        turno == "X" ? turno = "O" : turno = "X";   
        
        mensaje.innerText = mensaje.innerText.slice(0, (mensaje.innerText.length - 1)) + turno;
        
        if(mensaje.innerText.turno="O"){
            mensaje.style.backgroundColor="#FF0000";
        }else{
            mensaje.style.backgroundColor="#00913f"
        }
        if(boton.turno="X"){
            boton.style.backgroundColor="#00913f";
        }else if(boton.turno="O"){
            boton.style.backgroundColor="#FF0000";
        }
    }
}

function limpiarCasillas() {

    let botones = document.getElementsByTagName("button");

    for (boton of botones) {

        if (boton !== mensaje && boton !== limpiar) {

            boton.innerText = "";
            boton.style.backgroundColor = "#FFFFFF";
            mensaje.style.backgroundColor="#00913f"
            mensaje.innerText = mensaje.innerText.slice(0, (mensaje.innerText.length - 1)) + turno;
        }
        else {

            return;
        }
    }
}