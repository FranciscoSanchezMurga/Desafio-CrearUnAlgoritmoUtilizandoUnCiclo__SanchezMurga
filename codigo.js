/*
Diseñe una calculadora muy rudimentaria para mostrar el uso de los ciclos y condicionales.
*/

alert("Bienvenido a su calculadora simple!!");

let operacion;
let n1;
let n2;
let continuar;
let resultado;
do {
    operacion = prompt("¿Que operación quiere hacer?\nAsegurese de introducir valores permitidos, si no no podrá continuar.\n-Sumar dos números: Escriba +\n-Restar dos números: Escriba -\n-Multiplicar dos números: Escriba x\n-Dividir dos números: Escriba /");while (
        (operacion != "+" )
        &&
        (operacion != "-")
        &&
        (operacion != "x")
        &&
        (operacion != "/")
        ) 
            {
        operacion = prompt("¿Que operación quiere hacer?\nAsegurese de introducir valores permitidos, si no no podrá continuar.\n-Sumar dos números: Escriba +\n-Restar dos números: Escriba -\n-Multiplicar dos números: Escriba x\n-Dividir dos números: Escriba /");
    };
    n1 = parseFloat(prompt("Ingrese el primer número (n1):\nRecuerde que si no es un número esta ventana aparecerá de vuelta:"));
    n2 = parseFloat(prompt("Ingrese el segundo número (n2):\nRecuerde que si no es un número esta ventana aparecerá de vuelta:"));
    switch (operacion){
            case "+":
                alert("n1 + n2 = " + (n1+n2) );
                break;
            case "-":
                alert("n1 - n2 = " + (n1-n2) );
                break;
            case "x":
                alert("n1 x n2 = " + (n1*n2) );
                break;
            case "/":
                alert("n1 / n2 = " + (n1/n2) );  
                break;     
    };
    continuar = prompt("Si quiere cerrar la calculadora escriba 'si'. De lo contrario, escriba cualquier letra. ")
} while (continuar!="si");