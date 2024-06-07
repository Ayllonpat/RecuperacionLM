document.addEventListener("DOMContentLoaded", function() {

    let num1 = 0;
    let num2 = 0;
    let opera;

    function darNumero(numero){
        if(num1==0 && num1 !== '0'){
            num1 = numero;
        }else{
            num1 += numero;
        }
        refrescar();
    }

    function operar(valor){
        if (num1 == 0){
            num1 = parseFloat(document.getElementById("pantalla").value);
        }
        num2 = parseFloat(num1);
        num1= 0;
        opera = valor;
    }

    function esIgual(){
        num1 = parseFloat(num1);
        switch (opera){
            case 1:
                num1 += num2;
            break;
            case 2:
                num1 = num2 - num1;
            break;
        }
        refrescar();
        num2 = parseFloat(num1);
        num1 = 0;
    }

    function refrescar(){
        document.getElementById("pantalla").value = num1;
    }
})