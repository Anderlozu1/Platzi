//? Tipos de datos: -PRIMITIVOS:


//* string: texto
let a = "Hola"
//* number: numeros
let b = 12
//* boolean: verdadero o falso
let c = true
//! null: Tipo especial, contiene null, son valores vacios y ocurre cuando hay un valor faltante 

//! undefined: no esta definido

console.log(typeof a)          //* va a mostrar QUE TIPO DE DATO es la variable a


//? Tipos de variables

var d = "su alcance es de función global"
let e = "Pueden ser modificadas, puede haber un let con el mismo nombre pero no con diferente valor"
const f = "Lo mismo que let pero esta tiene un valor fijo y no se puede reasignar un valor"


//? funciones    BUENAS PRACTICAS SE DECLARA ANTES DEL CODIGO, IGUAL CON LAS VARIABLES


//*Declarativas                   se usa la palabra "FUNCTION AL INICIO", puede ser DECLARADA ANTES DE LA FUNCION

function miFuncion(){       //* dentro de los "()" va los parametros, que SON VARIABLES
    return 3;
}         


//* Expresión                        LA FUNCION INICIA CON VAR

var miFuncio = function(f1,f2){    //*La variable mifuncion es una funcion
    return f1 + f2 ;
}
let resultado = miFuncio(3, 8)

console.log(resultado)


//* Hoisting                         LA FUNCIÓN Y VARIABLES SE DECLARA ANTES DE QUE SE PROCESE EL CODIGO

result = miFuncion2("Jose", "Rojas");

function miFuncion2(nombre, apellido){
    return nombre + apellido;
}

console.log(result)


//? Scope global: lo que pasa en todo en global
//? Scope local: Lo que pasa solo en una función o lo que ocurre solo lo que está entre ciertas {}, no implica lo exterior


//* HOISTING               variables y funciones antes de que se procese el código

//console.log(miNombre)    undefined porque esta MANDANDOSE A LLAMAR una variable que no existe, pero está después
let miNombre = "Diego";


//hey();
function hey(){
    console.log("Hola" + noombre) //hola undefined: porque cuando se imprime, no encuentra una var antes con ese nombre
}                                 // ya que la funcion está declarada antes que la variable
var noombre = "Jose";


//? COERCIÓN = Forma en la que se pueden cambiar el tipo de dato

// Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
// Coerción explicita = es cuando obligamos a que cambie el tipo de valor.


//?Thuthy y falsy

//Ejemplos en los que Boolean devuelve Falso:
Boolean(0);        //false
Boolean(null);     //false
Boolean(NaN);      //false
Boolean(undefined);//false
Boolean(false);    //false
Boolean("");       //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también


//? Operadores:
  
  //  Operación: +, -, *, /, % = operador de modulo, ** potenciacion =asignación let a = 1

  //  Comparación: 3 == "3", true porque solo mira el valor, 3 === "3" false porque mira también el tipo
  //*              !            negación Ejemplo: !false = true
  //               5 > 3 
  //               8 < 9
  //               5 >= 3
  //               8 <= 9
  //               a && b        LAS DOS variables se tienen que cumplir para que sea TRUE
  //               a || b        si ALGUNA DE LAS DOS se cumple es TRUE 

  //* Incremento:  40++ = 41,         40+=2 = 42


//? IF, ELSE, ELSE IF

  if(3 < 4){                    
    console.log("Es verdadero")
  } else {                         // si 3 < 4 imprimir "Es verdadero", si no "No se cumplio "
    console.log("No se cumplio")
  }

  let var1 = 9;
  let var2 = 9;

  if(var1 === var2){ // si var1 y var2 son del mismo número y tipo de dato lo imprime
    console.log("Esto es verdadero")
  } else if (var1 == var2){
    console.log("Diferente tipo de dato") // si var1 y var2 son el mismo numero lo imprime
  } else {
    console.log("En realidad no es verdadero") // si son números diferentes lo imprime
  }

  
var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

anotador(tijera, tijera);

function anotador(user, compu){
    if(user == piedra && compu == tijera){
        console.log("Gana Usuario")
    } else if(user == papel && compu == piedra){
        console.log("Gana Usuario")
    } else if(user == tijera && compu == papel){
        console.log("Gana Usuario")
    } else{
        console.log("Gana Compu")
    }
}