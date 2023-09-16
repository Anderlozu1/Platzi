//? ARRAYS: Son unas cajas que guardan varia información u tipo de datos

  let teclados = ["MSI", "Razer", "Logitech"]

  teclados.length               // Cantidad elementos en el array

  //* Ingresar elementos a un array
  teclados.push("Chino")             // AGREGAR elemento al array en la ULTIMA posición
  teclados.pop()                     //! ELIMINAR el ultimo elemento del array
  teclados[1] = "Redragon"           // AGREGAR elemento en una posición definida
  

  teclados.unshift("Trust")          // AGREGAR elemento al array en la PRIMERA posición
  let elemento = teclados.shift()      //! ELIMINA u EXTRAE el primer elemento del array
                                    // en la var elemento se va a mostrar el primer valor extraido del array teclados


  let encontrar = teclados.indexOf("Redragon") // indexOf: escribiendo el NOMBRE del elemento muestra la posición 
  console.log(encontrar);                      // este dato de la posición se guarda en una variable


  console.log(teclados[1])             // Redragon ya que el orden es: MSI-1, Redragon-2, 
                                       // porque razer fue cambiado por redragon

  console.log(teclados)

  teclados.splice(2, 1); //elimina el elemento tercero y 1 solo valor
  console.log(teclados)



//? CICLOS / LOOPS:



    // for: Recorre un bloque de código varias veces
    // for/in: Recorre las propiedades de un objeto, posicion: 0 / 1 / 2
    // for/of: Recorre los valores de un objeto iterable: valores
    // while: Recorre un bloque de código mientras se cumple una condición específica
    // do/while: Lo mismo que while

    let estudiantes =["Maria", "Sergio", "Rosa", "Daniel"];  //Se crea el array con nombre de los estudiantes 

    function Saludar(estudiante){           //Se crea la función saludar con el parametro estudiante
      console.log(`Hola ${estudiante}`)    
    }

 //* for
                                              // i se interpreta como el valor de posición en el array
    for(var i = 0; i<estudiantes.length; i++){    // Se crea la variable i, si el contenido de el array es > a i, suma 1
      Saludar(estudiantes[i])                     // y se ejecuta la función la saludar, luego sigue el bucle pq 1<4
    }

  //* for of = let jovenes, se interpreta como el index [0, 1, 2]

    for(let jovenes of estudiantes){       // Se crea la variable jovenes, que va a contener de forma singular estudiantes 
      Saludar(jovenes)                     // Y va a hacer la función junto a los valores de jovenes (array estudiantes)
    }

  //*while = mientras lo que pase sea verdad, se va a generar el loop

    function Saludo(students){
      console.log(`Hola ${students}`)
    }

    while(estudiantes.length > 0){    //mientras la cantidad del array estudiantes sea mayor a 0
      var students = estudiantes.shift();   // En la var students se va a sacar cada etudiante para saludar, 
                                            //? Osea que por cada estudiante, el array más se acerca a 0 

      Saludo(students)                  // Se llama la funcion 
    } 



//? OBJETOS



  //* Ejemplo objeto

    let Coche1 = {
    nombre: "Chevrolet",
    modelo: 2016,
    tipo: "Deportivo",

  //*Concatenar 

    DetallesAuto: function(){(`Coche: ${nombre}, ${tipo}`)}
  }

  //* Sacar un solo valor del objeto

    console.log(Coche1.modelo);

  //* FUNCION CONSTRUCTORA: Funcion global, y que la persona solo necesite cambiar los parametros para su variable

    function Computadora(marca, puntuacion, precio){   //los parametros son como las variables para cada uno
      this._marca = marca;
      this._puntuacion = puntuacion;       //this: es una variable especifica que se refiere al objeto (parametro)
      this._precio = precio;
    }

    //TODO Los valores de NuevaCompu son los que reemplazan los objetos de la funcion Computadora
    let NuevaCompu = new Computadora("MSI", 4.4, "$2.200"); 
    console.log(NuevaCompu)


//? ARRAYS CON OBJETOS:   con los {} se entiende que es array con objetos

        let articulos = [
          {nombre: "Bici",    precio: 100000},
          {nombre: "Tv",      precio: 1500000},
          {nombre: "Libro",   precio: 45000},
          {nombre: "Celular", precio: 690000},
          {nombre: "Laptop",  precio: 2900000},
          {nombre: "Teclado", precio: 240000},
          {nombre: "Audifonos", precio: 130000}
        ]

  //? map = genera un array donde no hay objetos adentro sino que solo estan los nombres de los articulos

    // Se hace una funcion que retorne SOLO los NOMBRES de los articulos del array dentro de nombreArticulos
    // articulo es el {objeto} y junto a este nos referimos al valor u dato que necesitamos sacar
    let nombreArticulos = articulos.map(function(articulo){
      return articulo.nombre;
    })

    console.log(nombreArticulos)


  //? filter esta agregando a la variable articulosFiltrados mediante una funcion solo los articulos mayores 
        //* crea un array y Devuelve TODOS los elementos del array que cumplan con la condición dada

        //* filtra el cierto tipo de dato que le demos

    // articulos.filter para referirnos al array y filtrar el dato
    let articulosFiltrados = articulos.filter(function(modelo){
      return modelo.precio > 1000000
    })
                      
    console.log(articulosFiltrados);


  //? find = Encontrar algo entre el array, Devuelve el PRIMER elemento del array que cumpla con la condición dada

    // Le decimos que encuentre dentro del array articulos, un valor que sea "teclado" y lo guarde en let Encontrar

    let Encontrar = articulos.find(function (articulo){
      return articulo.nombre === "Teclado"
    })

    console.log(Encontrar)


  //? forEach = NO manda a llamar el array , solo lo imprime de forma directa
        //* Ejecuta lo que le definamos una vez por cada elemento de nuestro array

      // El array articulos, mandas a imprimir solo los nombres

      articulos.forEach(function(articulo){
        console.log(articulo.nombre)
      })

  //? some = Si hay algun elemento de todo el array menos de 200k, da true, sino da false 
        //* Comprueba si al menos un elemento del array cumple con la condición que le damos

    let ArticulosBaratos = articulos.some(function(articulo){
      return articulos.precio <= 200000
    })