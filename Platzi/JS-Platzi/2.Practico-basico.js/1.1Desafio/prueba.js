//?IF - ELSE 


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
1 = "1"


//?SWITCH

var experiencia_user = 9;
var no_posible = 3;

switch(experiencia_user){
    case no_posible:
        console.log("El usuario no tiene la experiencia requerida");
        break;
    case experiencia_user:
        console.log("El usuario tiene la experiencia requerida");
        break;
    default: 
    console.log("Error en el sistema ")
}


//? WHILE

let solution = ["Maria", "Jose", "Manuel"];
let solution = ["Yoshua", 3, 2, "Diana"]

function solution(estudiantes, deathCount, nuevo){
    while(deathCount > 0){          // Se eliminan todos los números mayores a 0, y se repite el loop
        estudiantes.pop();
        deathCount--;
    }
}
    estudiantes.push(nuevo);
    return estudiantes;



//todo SELECCIONAR UNA OPCION DE SUB DE PLATZI Y PAREJARLA CON SU DESCRIPCION

let type_sub = ["Free", "Basic", "Expert", "ExpertDuo"];

let caracteristicas = ["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
    
let option = "Expert";
    
//* i: va a contar la posición de cada elemento de type_sub
//* si 0 < 4, i se le va a sumar +1 y va a revisar si option (Que eligió el usuario) es igual a type_sub con su posicion
    
//* Imprime el tipo de sub con su posición [2], y lo mismo la característica [2] que DEBE ESTAR ORGANIZADO
for(let i = 0; i < type_sub.length; i++){
    if(option == type_sub[i]){
        console.log(`Estas suscrito al plan ${type_sub[i]}, en el cual ${caracteristicas[i]}`);
    }
}