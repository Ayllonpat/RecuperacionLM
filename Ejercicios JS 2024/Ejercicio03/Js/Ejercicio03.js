document.addEventListener("DOMContentLoaded", function() {
    // Variable para controlar si ya hay una fila pendiente de validar
    let filaPendienteValidar = false;

    // Manejador de eventos para el botón "Añadir Fila"
    document.getElementById("anadirFila").addEventListener("click", function() {
        // Verificar si ya hay una fila pendiente de validar
        if (filaPendienteValidar) {
            anadirMensaje("Ya hay una fila pendiente de validar. Por favor, complete esa fila primero.", "warning");
            return;
        }

        // Obtener la tabla
        let tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];

        // Crear una nueva fila
        let fila = tabla.insertRow();

        // Añadir celdas de formulario a la fila
        let celdaBocadillo = fila.insertCell(0);
        let celdaPrecio = fila.insertCell(1);
        let celdaValidar = fila.insertCell(2);

        // Crear campos de formulario para el tipo de bocadillo y el precio
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

        // Crear botón de validación
        let btnValidar = document.createElement("button");
        btnValidar.textContent = "Validar Fila";
        btnValidar.classList.add("btn", "btn-info");
        celdaValidar.appendChild(btnValidar);

        // Manejador de eventos para el botón "Validar Fila" de esta fila
        btnValidar.addEventListener("click", function() {
            // Obtener el valor de los campos de formulario
            let valorBocadillo = inputBocadillo.value.trim();
            let valorPrecio = inputPrecio.value.trim();

            // Verificar si se completaron todos los campos
            if (valorBocadillo === "" || valorPrecio === "") {
                anadirMensaje("Por favor, complete todos los campos antes de validar la fila.", "warning");
                return;
            }

            // Verificar el formato del precio
            if (isNaN(valorPrecio) || parseFloat(valorPrecio) <= 0) {
                anadirMensaje("El precio debe ser un número positivo.", "warning");
                return;
            }

            // Convertir los campos de formulario en texto estático
            celdaBocadillo.textContent = valorBocadillo;
            celdaPrecio.textContent = valorPrecio + "€";

            // Eliminar el botón de validación
            celdaValidar.innerHTML = "";

            // Indicar que no hay fila pendiente de validar
            filaPendienteValidar = false;

            // Limpiar el mensaje de resultado
            anadirMensaje("", "info");
        });

        // Indicar que hay una fila pendiente de validar
        filaPendienteValidar = true;

        // Limpiar el mensaje de resultado
        anadirMensaje("", "info");
    });
});

// Función para añadir un mensaje a la página
function anadirMensaje(mensaje, tipo) {
    // Obtener el elemento "aviso" donde mostraremos los mensajes
    let aviso = document.getElementById("aviso");

    // Crear un elemento de alerta de Bootstrap
    let alerta = document.createElement("div");
    alerta.classList.add("alert");

    // Añadir clase de color de fondo según el tipo de mensaje
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
            alerta.classList.add("alert-primary");
            break;
    }

    // Asignar el mensaje al contenido del elemento de alerta
    alerta.textContent = mensaje;

    // Limpiar el contenido anterior del elemento "aviso"
    aviso.innerHTML = "";

    // Añadir el elemento de alerta al elemento "aviso"
    aviso.appendChild(alerta);
}
