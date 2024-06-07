let filaPendienteValidar = false;

    document.getElementById("anadirFila").addEventListener("click", anadirFila) 

    function anadirFila(){

        if (filaPendienteValidar) {
            anadirMensaje("Ya hay una fila pendiente de validar. Por favor, complete esa fila primero.", "warning");
            return;
        }

        let tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];

        let fila = tabla.insertRow();

        let celdaBocadillo = fila.insertCell(0);
        let celdaPrecio = fila.insertCell(1);
        let celdaValidar = fila.insertCell(2);

        let inputBocadillo = document.createElement("input");
        inputBocadillo.setAttribute("type", "text");
        inputBocadillo.classList.add("form-control");
        inputBocadillo.setAttribute("placeholder", "Tipo de Bocadillo");
        celdaBocadillo.appendChild(inputBocadillo);

        let inputPrecio = document.createElement("input");
        inputPrecio.setAttribute("type", "number");
        inputPrecio.setAttribute("step", "0.01");
        inputPrecio.classList.add("form-control");
        inputPrecio.setAttribute("placeholder", "Precio");
        celdaPrecio.appendChild(inputPrecio);

        let btnValidar = document.createElement("button");
        btnValidar.textContent = "Validar Fila";
        btnValidar.classList.add("btn", "btn-info");
        celdaValidar.appendChild(btnValidar);

        btnValidar.addEventListener("click", validar);

        function validar(){
            let valorBocadillo = inputBocadillo.value.trim();
            let valorPrecio = inputPrecio.value.trim();
    
            if (valorBocadillo === "" || valorPrecio === "") {
                anadirMensaje("Por favor, complete todos los campos antes de validar la fila.", "warning");
                return;
            }
    
            if (isNaN(valorPrecio) || parseFloat(valorPrecio) <= 0) {
                anadirMensaje("El precio debe ser un número positivo.", "warning");
                return;
            }
    
            celdaBocadillo.textContent = valorBocadillo;
            celdaPrecio.textContent = valorPrecio + "€";
    
            celdaValidar.innerHTML = "";
    
            filaPendienteValidar = false;
    
        }

        filaPendienteValidar = true;
        
    };

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
        case "warning":
            alerta.classList.add("alert-warning");
            break;
        default:
            
            break;
    }

    alerta.textContent = mensaje;

    aviso.innerHTML = "";

    aviso.appendChild(alerta);
}
