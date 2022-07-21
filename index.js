let carritoDeCompras = [];

let contador = document.getElementById("contador");

let contenedorProductos = document.getElementById("zonaDeProductos");

let panelCarrito = document.getElementById("panelCarrito");


















function mostrarProductos(){

    raquetas.forEach(item => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<img class="card-img" src="${item.img}" alt="">
        <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="class-text">${item.precio}</p>
            <a href="#" id="producto${item.id}"class="boton-carrito">Agregar al Carrito</a>
        </div>`;    
        contenedorProductos.appendChild(div);

        

        let btnAgregar = document.getElementById(`producto${item.id}`);
        btnAgregar.addEventListener("click", () => {
            Swal.fire({
                title: 'Producto agregado al carrito',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              })
            agregarAlCarrito(item.id);
        });
        
       
    });

}

mostrarProductos();
function agregarAlCarrito(id){
    

    let productoAgregar = raquetas.find(element => element.id == id);
    productoAgregar.cantidad = 1;
    carritoDeCompras.push(productoAgregar);

    mostrarCarrito(productoAgregar);
    actualizarCarrito();

    // console.log(carritoDeCompras);

}

function mostrarCarrito(productoAgregar){

    let div = document.createElement("div");
    div.className = "productoEnCarrito";
    div.innerHTML = `<h5 class="card-title">${productoAgregar.nombre}</h5>
    <p class="class-text">${productoAgregar.precio}</p>
    <p id="${productoAgregar.id}">Und: ${productoAgregar.cantidad}</p>
    <button id="eliminar${productoAgregar.id}">eliminar</button>`;
    panelCarrito.appendChild(div);  

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`);

    btnEliminar.addEventListener("click", () => {
        
        carritoDeCompras = carritoDeCompras.filter(item => item.id != productoAgregar.id);

        console.log(carritoDeCompras);

        btnEliminar.parentElement.remove();

        actualizarCarrito();
        
    })

}

function actualizarCarrito(){

    contador.innerText = carritoDeCompras.length;


    


}

function recuperar(){

}