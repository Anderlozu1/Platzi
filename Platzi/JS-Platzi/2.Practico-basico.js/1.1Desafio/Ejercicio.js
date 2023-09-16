//? VARIABLES

  //* 1. Una variable es un espacio en memoria que contiene cierto tipo de dato y sirve para poder realizar acciones

  //* 2. Al inicializar damos a entender de que esa variable existe, al declarar le damos un valor a esa variable

  //! let: Permite cambiar el valor de un variable en el futuro
  //! const:NO lo hace

  //* 3. Al sumar números se hace de forma normal, y con strings estos se unen

      2 + 4
  let palabra1 = "Hola"
  let palabra2 = "Platzi"
    palabra1 + palabra2

  //*4. El operador suma + 

  //*5.

    let Nombre = "Anderson"         //String
    let Apellido = "Lozano"         //String
    let NombreUsuario = "Anderl0zu" //String
    let edad = 15                   //Number
    let correoElectronico = "ander@gmail.com"  //String
    let mayorEdad = false
    let dineroAhorrado = 760000
    let deudas = 535000

  //* 6.

    let NombreCompleto = Nombre + Apellido

    let DineroReal = dineroAhorrado - deudas


//? CONDICIONALES

  //* 7. La funcion es un bloque de codigo que sirve para ejecutar algo u reutilizar codigo en una y ejecutarlo en el futuro

  //* 8. Cuando necesitamos repetir una acción en nuestro codigo y encapsular cada parte de codigo guardado en funciones para ordenar el codigo

  //* 9. El PARAMETRO ES UNA VARIABLE, un argumento es la declaración del parametro

  //*10. 

    function infoUsuario(name, lastname, nickname){ //? LOS PARAMETROS SON VARIABLES 
        
        let completeName = name + " " + lastname
        console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".")
    }

    infoUsuario("Anderson", "Lozano", "anderlozu");     //argumentos 

//? CONDICIONALES
    
  //*11. Es aquella secuencia que si algo es verdadero se ejecuta, sino hace otra acción

  //*12. if - else - else if - switch

  //*13. Si ya que las funciones pueden encapsular CUALQUIER BLOQUE DE CODIGO, incluyendo condicionales 

  //*14. 

    let tipoDeSuscripcion = "Basic";

        if(tipoDeSuscripcion === "Free"){
            console.log("Solo puedes tomar los cursos gratis");
        } else if(tipoDeSuscripcion === "Basic"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        } else if(tipoDeSuscripcion === "Expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        } else if(tipoDeSuscripcion === "ExpertPlus"){
            console.log("Tú y alguien más pueden tomar TODOS los cursos de platzi por un año");
        }

    console.log(tipoDeSuscripcion);


    //*15.

        if(tipoDeSuscripcion === "Free"){
            console.log("Solo puedes tomar los cursos gratis");
            return;                              //? Return para que no aparezca el resultado y debajo la alerta
        }
        if(tipoDeSuscripcion === "Basic"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
            return;
        }
        if(tipoDeSuscripcion === "Expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            return;
        }
        if(tipoDeSuscripcion === "ExpertPlus"){
            console.log("Tú y alguien más pueden tomar TODOS los cursos de platzi por un año");
            return;
        }

        console.warn("Ese tipo de subscripción no existe");


//? CICLOS, BUCLES O LOOPS

    //*16. Es aquella opción de repetir cierto codigo hasta que se cumpla algo

    //*17. while, do while, for, for nos OBLIGA A DEFINIR que pasa al inicio y al final del codigo de nuestro ciclo

    //*18. Es un ciclo que siempre va a tener consternancia y nunca va a parar porque no hay una condicion

    //*19. Si 

    //*20. 

    let i = 0;

    while(i < 5){
        console.log("El valor de i es: " + i);
        return i++;
    }

    let a = 10;

    while(a >= 2){
        console.log("El valor de a es: " + a);
        return a--;
    }

    //*21.

    let Usuario_respuesta;

    while(Usuario_respuesta == 4){
        console.log("Felicidades")
    }
    console.log("No es la respuesta")


//? ARRAYS

    //* Es una lista de elementos:         let array = [2, "true", green];

    //* Los objetos contienen elementos:         let objeto = {nombre: "Juan", edad: 3, comida: [Pizza, Mango]}

    //* Array es cuando lo que haremos en un elemento es lo mismo que en todos los demas (no siempre))
    //* Objetos cuando los nombres de cada elemento son importantes para el algoritmo

    //! Los arrays contienen objetos y los objetos pueden contener arrays

    
    //? SACAR EL PRIMER ELEMENTO DE UN ARRAY


    let arrays1 = ["Fruta", "Verde", "Jugo"]

    function PrimerElemento(elemento){          //! elemento se refiere a la posición del array
        let elementos = elemento.shift()
        console.log(elementos)
    }

    PrimerElemento(arrays1);


    //? SEPARAR CADA ELEMENTO DE LOS ARRAYS

    let array1 = ["Jugo", "Pera", "Verde", "Fruta"]


function sacar_elementos(elements){    //! elements es el array1
  for(i = 0; i < elements.length; i++){ //* i: Es la numeración(posición) de cada elemento del array 0 = "Jugo"
    //* como 0 < 4 entonces se le suma a i, por lo que pasa al 2do elemento para imprimirlo

      console.log(elements[i]) //?Se imprime 1 solo con cada elemento i, si se imprime i muestra solo su numero
  }            
}

sacar_elementos(array1);


//! EJERCICIO IMPORTANTE, PASAR UN OBJETO A ARREGLO

let obj = {coche: "Deportivo", modelo: "Pagani",velocidadMax: "385km/h"};

//* (Object.values(objeto1))  :  El objeto SE CONVIERTE EN UN ARRAY, gracias a object.values y se guarda en un let


//* El array se guarda en un let
let arr = Object.values(obj)

function elem_sacar(obj){
    const arr = Object.values(obj)
    for(let a = 0; a < arr.length; a++){
        console.log(arr[i])
    }
}

elem_sacar(obj)
