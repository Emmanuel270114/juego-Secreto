
let numeroSecreto = 0;
console.log(numeroSecreto);
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Esto te permite conectarte al HTML y poder modificarlo por medio de Java Script
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    //Con el parseInt transformamos el tipo de dato que se ingresa (string) a un entero
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*
    //Con el typeof nos da el tipo de dato que se ingreso
    console.log(typeof(numeroUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroUsuario);
    //El triple igual no solo compara que sea el mismo valor, sino que tambien sea del mismo tipo de dato
    console.log(numeroSecreto === numeroUsuario);
    */
    //console.log(numeroSecreto);
    console.log(intentos);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        //Lo que ahce la sig. línea es quitar el atributo de deshabilitado al boton de Nuevo Jeugo para que funcione
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //El usuario no acertó.
        if(numeroUsuario < numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es mayor');
        }else{
        asignarTextoElemento('p', 'El numero secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    //Lo que hacemos aquí, es que vamos a poner la caja del numero en blanco cada vez que da click en intento.
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    //valorCaja.value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.');
    }else{
        //Si el numero generado ya esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //Ocupamos la recursividad para que nos genere un nuevo numero psudoaleaatorio 
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Numero Secreto!');
    asignarTextoElemento('p', `Indica un numero entre el 1 y el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiaremos la caja del numero
    limpiarCaja();
    //indicar mensaje de inicio (intervalo de numeros)
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el botón de Nuevo Juego
    //Ahora le estamos diciendo que con setAttribute, vuelva a deshabilitar el botón pero le tenemos que poner los 2 atributos que pide, sino no funciona.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


//Ejercicios de práctica para el desafío.
/*
//Funcion que muestra "Hola Mundo" en la consola del navegador
function mostrarMensaje(){
    console.log("Hola Mundo.");
}
mostrarMensaje();

//Función que pide su nombre al usuario y lo pone en consola.
function mostrarNombre(nombre){
    console.log(`¡Hola,${nombre}!`);
}
let nombre = prompt("Ingrese su nombre por favor: ");
mostrarNombre(nombre);

//Funcion que recibe un numero de parametro y devuelve el doble de ese numero en consola.
function dobleNumero(numero1){
    numero1 = (numero1)*2;
    console.log(`El doble de su numero es: ${numero1}.`);
}
let numero1 = parseInt(prompt("Ingrese un número: "));
dobleNumero(numero1);

//Funcion que recibe 3 numeros como parametros y devuelve el promedio
function promedio(num2,num3,num4){
    let promedio = (num2 + num3 + num4) / 3;
    console.log(`El promedio de los 3 numeros es: ${promedio}.`);
}
let num2 = parseInt(prompt("Ingrese el 1er numero: "));
let num3 = parseInt(prompt("Ingrese el 2do numero: "));
let num4 = parseInt(prompt("Ingrese el 3er numero: "));
promedio(num2,num3,num4);

//Funcion que devuelve el mayor de 2 numeros
function numMayor(num5,num6){
    if(num5 > num6){
        console.log(`El numero mayor es: ${num5}.`);
    }else{
        console.log(`El numero mayor es: ${num6}.`);
    }
}
let num5 = parseInt(prompt("Ingrese el 1er numero: "));
let num6 = parseInt(prompt("Ingrese el 2do numero: "));
numMayor(num5,num6);

//Funcion que recibe un numero como parametro y devuelve el resultado de multiplicarlo por sí mismo.
function numMult(){
    let multiplicacion = num7*num7;
    console.log(`El resultado es: ${multiplicacion}.`);
}
let num7 = parseInt(prompt("Ingrese el numero a multiplicar: "));
numMult(num7);

//Parte 3 de Desafíos
//Función que te calcula el IMC por parametros de altura en metros y peso en kilos
function masaCorporal(altura,peso){
    let imc = peso / Math.pow(altura,2);
    console.log(`Su IMC es: ${imc}.`);
}
let altura = prompt("Ingrese su altura en metros: ");
let peso = prompt("Ingrese su peso en kilos: ");
masaCorporal(altura,peso);

//Función que calcula el factorial de un numero
function factorial(num8){
    let facto = 1;
    for (let i = 1; i <= num8; i++) {
        facto = facto * i;
    }
    console.log(`El factorial de ${num8} es: ${facto}.`);
}
let num8 = parseInt(prompt("Ingrese un número: "));
factorial(num8);

//Funcion que devuelve la conversión de dolares a pesos MX
function conversionMoneda(dolar){
    let res = dolar * 17.13;
    console.log(`La conversión de ${dolar} dolar(es) es: ${res}.`);
}
let dolar = parseInt(prompt("Ingrese la cantidad de dolares a convertir a pesos MX: "));
conversionMoneda(dolar);

//Función que muestra el area y perimetro de una sala rectangular
function areaYperimetro(altura1,base){
    let area = base * altura1;
    let perimetro = (base * 2) + (altura1 * 2);
    console.log(`El area es: ${area} y el perimetro es: ${perimetro}.`); 
}
let altura1 = parseInt(prompt("Ingrese la altura de la sala: "));
let base = parseInt(prompt("Ingrese la base de la sala: "));
areaYperimetro(altura1,base);

//Función que devuelve el area de una sala circular
function areaYperimetroCircular(radio){
    let area = 3.14 * (Math.pow(radio,2));
    let perimetro = 3.14 * (radio * 2);
    console.log(`El area es: ${area} y el perimetro es: ${perimetro}.`); 
}
let radio = parseInt(prompt("Ingrese el radio de la sala: "));
areaYperimetroCircular(radio);

//Funcion que devuelve la tabla de multiplicar de un numero
function tablaMultiplicar(num9){
    for(let i = 0; i <= 10; i++){
        let mult = i * num9;
        console.log(`${num9} * ${i} = ${mult}`);
    }
}
let num9 = parseInt(prompt("Ingrese un numero: "));
tablaMultiplicar(num9);

//Parte 4 de Desafíos
//Creamos un arreglo vacío
let listaVacia = [];
console.log(`Elementos del arreglo: ${listaVacia.length}`);
//Creamos un arreglo con datos ya desde el inicio
let lenguajesDeProgramacion = ['JavaScript',' C',' C++',' Kotlin',' Python'];
//console.log(`Elementos del arreglo lenguajesDeProgramacion: ${lenguajesDeProgramacion}`);
//Agregamos datos al arreglo anterior con push
lenguajesDeProgramacion.push(' Java',' Ruby',' GoLang');
//console.log(`Elementos del arreglo lenguajesDeProgramacion: ${lenguajesDeProgramacion}`);
//Creamos una función que muestre los datos del arreglo
function mostrarNombres(){
    console.log(`Elementos del arreglo lenguajesDeProgramacion: ${lenguajesDeProgramacion}`);
}
mostrarNombres();
//Creamos una función para que muestre los elementos del arreglo de forma inversa
function mostrarNombresInverso(){
    console.log(`Elementos del arreglo lenguajesDeProgramacion de forma inversa: `);
    for(let i = lenguajesDeProgramacion.length-1; i >= 0; i--) {
        console.log(`${lenguajesDeProgramacion[i]}`);
    }
}
mostrarNombresInverso();
//Función que calcula el promedio de una lista de numeros
let arrNum = [10,200,13,-4,50];
let suma = 0;
function promedioNumeros(arrNum){
    for (let i = 0; i < arrNum.length; i++) {
        suma = suma + arrNum[i];
    }
    let promedio1 = suma / arrNum.length;
    console.log(`El promedio es: ${promedio1}.`);
}
promedioNumeros(arrNum);
//Función que muestra cual es el número más grande y el más pequeño de una arreglo
function mayorYmenor(arrNum){
    let numeroMayor = arrNum[0];
    let numeroMenor = arrNum[arrNum.length-1];
    for (let i = 0,j = arrNum.length; i < arrNum.length, j >= 0; i++,j--) {
        if (arrNum[i] > numeroMayor){
            numeroMayor = arrNum[i];
        }
        if(arrNum[j] < numeroMenor){
            numeroMenor = arrNum[j];
        }
    }

    console.log(`El numero mayor es: ${numeroMayor}`);
    console.log(`El numero menor es: ${numeroMenor}`);

}
mayorYmenor(arrNum);
//Función que devuelve la suma de todos los elementos de un arreglo
function sumaDelArreglo(arrNum){
    let sumaTotal = 0;
    for (let i = 0; i < arrNum.length; i++) {
        sumaTotal = sumaTotal + arrNum[i];
    }
    console.log(`La suma total del arreglo es: ${sumaTotal}.`);
}
sumaDelArreglo(arrNum);
//Función que devuelve la posición del numero en el arreglo
function posicionArreglo(arrNum,num10){
    for (let i = 0; i < arrNum.length; i++) {
        if(num10 == arrNum[i]){
            console.log(`La posición del numero en el arreglo es: ${i}.`);
            break;
        }else if(i == arrNum.length-1){
            console.log(`La posición del numero en el arreglo es: -1.`);
        }
    }
}
let num10 = parseInt(prompt(`Los datos del arreglo son: ${arrNum} \n Ingrese un numero para saber su posicion: `));
posicionArreglo(arrNum,num10);
//Función que suma los elementos de 2 listas de numeros
let arrNum2 = [10,5,-7,50,21];
function suma2Arreglos(arrNum,arrNum2){
    let sumaArreglos = [];
    for (let i = 0; i < arrNum.length; i++) {
        sumaArreglos[i] = arrNum[i] + arrNum2[i];
    }
    console.log(`La suma de cada uno de los elementos es: ${sumaArreglos}.`);
}
suma2Arreglos(arrNum,arrNum2);
//Función que devuelve el cuadrado de cada numero de un arreglo
function cuadradoArreglo(arrNum2){
    let cuadArr = [];
    for (let i = 0; i < arrNum2.length; i++) {
        cuadArr[i] = Math.pow(arrNum2[i],2);
    } 
    console.log(`El resultado es: ${cuadArr}`);
}
cuadradoArreglo(arrNum2);
*/