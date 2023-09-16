
//? DESKTOP MENU

let menuEmail = document.querySelector(".navbar-email");  /* SE SELECCIONA EL ELEMENTO  (EMAIL)  */ 
let desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);  //* cada vez que demos click al email se va a desplegar la funcion toggleDesktopMeNU

function toggleDesktopMenu(){                    //? inactive: display: none; esconde el menu
    desktopMenu.classList.toggle("inactive")     //* revisamos la clase desktop-menu y cada vez que le demos click al email

                                   //* si esta ACTIVADA LA CLASE inactive, se CANCELA LA CLASE, (se cancela sus estilos display; none;)

                                   //* si esta DESACTIVADA la clase INACTIVE, se ACTIVA LA CLASE (se esconde el menu con display: none;)
                                
    compras.classList.add("inactive");
                                }

                                
//? MOBILE-MENU


  let menuMobile = document.querySelector(".mobile-menu");
  let signal = document.querySelector(".signal");

  let compras = document.querySelector(".product-detail");   //? se crea la clase de las compras

  signal.addEventListener("click", toggleMobileMenu);


  function toggleMobileMenu(){

      let asideCerrado = compras.classList.contains("inactive"); //* pregunta si ese contenedor tiene la clase inactive

      // OPCION: compras.classList.add("inactive")

      if(!asideCerrado){                                   //* SI EL CONTENEDOR TIENE DESACTIVADO (false) inactive
          compras.classList.add("inactive");               //* La va a agregar 
      }

      menuMobile.classList.toggle("inactive");
  }



//? CARRITO COMPRAS


  let shoppingCart = document.querySelector(".shopping-cart");   //* donde se va a dirigir para cuando haga click aparezca

  shoppingCart.addEventListener("click", toggleAside);


function toggleAside(){          

    let mobileCerrado = menuMobile.classList.contains("inactive");  //? Pregunta si el mobile-menu tiene class inactive

    // OPCION: menuMobile.classList.add("inactive").        CADA VEZ QUE APRIETE UNO, SE DESACTIVA EL OTRO

    if(!mobileCerrado){                               //* Si el mobile-menu esta abierto, le aplica el display: none;
        menuMobile.classList.add("inactive");
    } 
    
    compras.classList.toggle("inactive");             //* cada vez que de click va a activar o desactivar inactive
}



//? AÑADIR PRODUCTOS 

  //* Se crean los objetos que tienen los articulos para vender 

    const productList = [];     //! Dentro del array se va añadiendo nuevos productos, mediante objetos

    productList.push({          // SE CREA Y EMPUJAN los objetos(productos) al array
        name: "Bike",
        price: 340000,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })

    productList.push({          
        name: "Pantalla",
        price: 440000,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })

    productList.push({          
        name: "Computadora",
        price: 3500000,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })

    productList.push({          
        name: "Audifonos",
        price: 190000,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })


//* for-of - for-in

  //for(product of productList){  //! product: Se dirige a cada objeto de la lista del array: product.name = Bike, pantalla


  // for(product in productList){}  //! product: se dirige a la ubicación(numeración) de los objetos del array = 0,1,2


//todo     Como es el contenedor principal (donde va todo) SE DEJA EN EL HTML Y NO SE CREA ACA 
const cardsContainer = document.querySelector(".cards-container")   



//? CREAR LISTA DE ELEMENTOS DESDE JS

function RenderProducts(arr){
for(product of arr){

    //? SE CREAN LOS ELEMENTOS 
    
      //* Se crea el primer div */
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");


      //* Se crea la imagen con su atributo 
      const imagen = document.createElement("img");      // se añade el atributo src a la imagen, y su value es el argumento
      imagen.setAttribute("src", product.image)         // de cada objeto creado con su valor image:  img src="argumento"


      //* Contenedor donde se va a ver el name, price y icon 
      const elementosDiv = document.createElement("div");
      elementosDiv.classList.add("product-info");


      //* Contenedor que almacena el name y price 
      const productosInfoDiv = document.createElement("div");


      //* Variables donde se van a cambiar el name y price 
      const  priceElement = document.createElement("p");
      priceElement.innerText = "$ " + product.price;     // El precio va a ser un texto, se concatena $ + price
      const nameElement = document.createElement("p");
      nameElement.innerText = product.name;
      

      //* Se crea el figure y el icono
      const figure = document.createElement("figure");
      const icon = document.createElement("svg");
      icon.setAttribute("src", "/HTML-Platzi/3.Ejercicio/Resources/bag.svg")  // al icono se le añade el atributo el svg


    //? SE AÑADEN LOS ELEMENTOS HIJOS A LOS PADRES 


      //* Se mete el icono dentro del figure
      figure.appendChild(icon);             // appendchild mete un solo valor (icon) dentro de su padre (figure)

      //* Se mete el name y price dentro de productosInfoDiv
      productosInfoDiv.append(nameElement, priceElement); // append mete varios valores (name y price) 

      //* Se mete productosInfoDiv y figure dentro de appendChild
      elementosDiv.appendChild(productosInfoDiv);  
      elementosDiv.appendChild(figure)

      //*Se mete la imagen y elementosDiv dentro de productCard (cada targeta de nuevo articulo)
      productCard.appendChild(imagen);
      productCard.appendChild(elementosDiv)


      //* Se pone el productCard(nuevo articulo) en el contenedor donde van todos 

      cardsContainer.appendChild(productCard)

    
  }
}

RenderProducts(productList)