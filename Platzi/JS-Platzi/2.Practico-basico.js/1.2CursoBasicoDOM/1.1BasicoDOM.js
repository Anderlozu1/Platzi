//? SELECCIONAR ELEMENTOS 

  //* document.querySelector("h1");         Devuelve el PRIMER ELEMENTO del html que cumpla la condición (cualquier h1)
  //* document.querySelectorAll("h1");      Devuelve TODOS LOS H1, a pesar de que tengan clases 
  // document.getElementById();            Devuelve la REFERENCIA DEL ELEMENTO segun su ID (#buttonred)
  // document.getElementsByName();         Devuelve el name (que contiene el html), lo mismo que el ID pero con name
  // document.getElementsByClassName();
  // document.getElementsByTagName();
  // document.getElementsByTagName();


//? DIRIGIRNOS A ELEMENTOS HTML DESDE JS, MEDIANTE SU ELEMENTO, CLASES O ID QUE TENGAN  

  //todo TODOS los elementos h1

    let tituloh1 = document.querySelector("h1");

  //todo TODOS los elementos CON LA CLASE .parrafito

    let parrafito = document.querySelector(".parrafito");

  //todo El elemento con EL ID de #pid

    let pid = document.querySelector("#pid");

    console.log(tituloh1);  //Muestra el html


    console.log({       //! SE COLOCAN LLAVES PARA IMPRIMIR VARIOS ELEMENTOS A LA VEZ
      tituloh1,
      parrafito,            //? Muestra CADA PROPIEDAD de cada elemento
      pid
    })

    
    let ingresar = document.querySelector("input"); 
    console.log(ingresar.value)                        // Lo que escriba en el input se va a mostrar en consola

  
    parrafito = document.querySelectorAll("p") // se refiere a TODOS LOS P
    console.log(parrafito)                     //? MUESTRA 2 P

  

//* ESCRIBIR HTML DESDE JS

  //* REEMPLAZAR TEXTO
    // nombreVar.innerHTML = "Cambio"     CAMBIAR EL VALOR DE UN ELEMENTO DEL HTML mediante una VARIABLE, tambien ENTIENDE HTML
    // nombreVar.innerText = "Hola <hr>"  Solo sirve para CAMBIAR TEXTO

  //* ATRIBUTOS

    // nombreVar.getAttribute("class")    MUESTRA EL VALOR que contiene ESE ELEMENTO, Eje: CLASS = "Rojo", IMPRIME ROJO 
    // nombreVar.setAttribute("juice")    Establece EL VALOR DE UN ATRIBUTO A UN ELEMENTO INDICADO

  //* LISTAS DE CLASES 

    // nombreVar.classList.add("Nuevo")   Se dirige a  LAS LISTAS DE LA CLASE DE ESE ELEMENTO y AGREGA UNA NUEVA CLASE
    // nombreVar.classList.remove("title") ELIMINA LA CLASE QUE SELECCIONEMOS del elemento
    // nombreVar.classList.toggle("")     SUCEDA ALGO cada vez que AGREGUEMOS O QUITEMOS UNA CLASE //! si la clase no esta ejecutada, se ejecuta, si esta ejecutada, no ejecuta 
    // nombreVar.classList.contains("")   devuelve TRUE O FALSE según si está la clase


  //? REEMPLAZAR LETRAS INCLUYENDO CODIGO HTML:
    tituloh1.innerHTML = "Soy un titulo <br> cambiado desde JS"    

  //? IMPRIME LAS CLASES QUE TIENE EL ELEMENTO: 
    console.log(tituloh1.getAttribute("class"));               // Las clases que tiene

  //? AGREGA UN ATRIBUTO CON SU VALOR:
    tituloh1.setAttribute("id", "jugo")                        // <h1 id="jugo" ></h1>           

  //? AÑADE LA CLASE A LA LISTA DE CLASES DE ELEMENTO
    tituloh1.classList.add("Nuevo");                           // class="Nuevo"

  //? ELIMINA LA CLASE QUE ESCRIBIMOS DEL ELEMENTO 
    tituloh1.classList.remove("title")


//* CREAR ELEMENTOS:   La img no se muestra en el HTML pero si en el JS

  //* REEMPLAZAR ELEMENTOS 
  // element.replaceWith(img)                     REEMPLAZA EL ELEMENTO POR LA IMAGEN, SOLO deja adjuntar un elemento (img)
  // element.appendChild(img)
  // element.append(img)                          ADJUNTA EL IMG después del ULTIMO ELEMENTO, deja adjuntar varios elementos (img, p, h2)


  //? Se crea un elemento en blanco con ID para que después se reemplace por una imagen
  let unico = document.getElementById("unico")

  //? Se crea el elemento con la imagen, que se guarda en esa variable   (NO EXISTE EN EL HTML)
  let imagen = document.createElement("img");  

  //? Se crea el atributo para colocar la url de la imagen 
  imagen.setAttribute("src", "https://th.bing.com/th/id/OIP.Zb4WrifdmyladQnwjuPf4wHaFG?pid=ImgDet&rs=1")

  console.log(imagen);

  //? Se reemplaza la clase unico por la imagen 
  unico.replaceWith(imagen)



//* CALCULADORA - EVENTOS CON USUARIOS



  let espacio1 = document.getElementById("espacio1")
  let espacio2 = document.getElementById("espacio2")

  let boton = document.getElementById("boton")
  let result = document.querySelector("#result")

  // Se hace una funcion para que se ejecuta
                                              
    function agregarInput(){     //!Cuando se cambia algo en el input, la funcion es llamada desde el HTML por onchange="agregarInput()"
      console.log("sa")
    }


//* addEventListener()          HACE QUE DESDE EL MISMO JS SEPA QUE HACER (con los argumentos que le damos(codigo))
// event.preventDefault =  Cancela el evento default de un elemento, Eje: form envía siempre con un botón una dirección, por eso lo cancela


                                                           //! si es funcion NO SE LE COLOCA ()
    //element.addEventListener("evento", codigo/funcion);       EN EL EVENTO PONEMOS LO QUE VA A HACER, CLICK, CHANGE, REMOVE

    boton.addEventListener('click', pressBoton)     //? cuando el boton se precione, va a ejecutar la funcion pressBoton

   
      function pressBoton(){          //! VALUE es el valor que el USUARIO LE DA AL ESCRIBIR
        let resultado = Number(espacio1.value) + Number(espacio2.value) //lo que se escriba en los dos espacios se va a concatenar
        result.innerHTML = "Resultado: " + resultado;    }


  
        //! EVENTOS addEventListener():  https://developer.mozilla.org/es/docs/Web/Events



