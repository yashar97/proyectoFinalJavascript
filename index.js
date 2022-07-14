let contenedorProductos = document.getElementById("zonaDeProductos");

 



















//logica ecommerce

function cargarProductos(){

    raquetas.forEach(item => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<img class="card-img" src="${item.img}" alt="">
        <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="class-text">${item.precio}</p>
            <a href="#" class="boton-carrito">Agregar al Carrito</a>
        </div>`;
        contenedorProductos.appendChild(div);
    })
    
}

cargarProductos();