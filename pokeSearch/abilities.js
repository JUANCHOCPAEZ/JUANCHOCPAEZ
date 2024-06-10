function abilities() {
    //fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=893/`)
        .then(response => response.json())
        .then(data => {
            let boton = document.getElementById('botonSearch')
            boton.addEventListener('click', validarInput)
            
            function validarInput() {
                var nombre = document.getElementById("search").value.trim();
                if (nombre.length == 0) {
                  alert("Debes escribir el nombre o el número del Pokemon a buscar");
                  return false;
                } else {
                  variables();
                }}
            
            function variables() {
                nombre = data.results;
                id = data.id
                busqueda = document.getElementById('search')
                texto = busqueda.value.toLowerCase();
               
                if (isNaN(texto)) {
                borrarMoves();
                filtrarNombre();
                numeroPok(cod);
                }
                
                  else {
                    console.log("El valor es un número.");
                    console.log(texto)
                    cod=texto;
                    filtrarNombre(cod);
                    consultar(cod);
                    movimientos(cod);
                  }
            }

            function filtrarNombre() {
                borrar();
                for (let pokemon of nombre) {
                    search = pokemon.name
                    //      console.log(nombre)


                    url = pokemon.url
                    if (search.indexOf(texto) !== -1) {

                        console.log(url)
                        cod = url.slice(34, -1)
                        consultar(cod);

                        movimientos(cod);

                    
                    } else {

                    }

                }

            }

            function numeroPok() {
                let elementoIdIzq = document.getElementById('numberIzq')
                let elementoIdDer= document.getElementById('numberDer')
                let elementoIdBackIzq = document.getElementById('numberBackIzq')
                let elementoIdBackDer= document.getElementById('numberBackDer')
                elementoIdIzq.innerHTML += `#
                ${cod}`
                elementoIdDer.innerHTML += `#
                ${cod}`
                elementoIdBackIzq.innerHTML += `#
                ${cod}`
                elementoIdBackDer.innerHTML += `#
                ${cod}`
                console.log(cod)
            
        }

            function borrarMoves() {
                clean = ""

                elemento5 = document.getElementById('numberIzq')
                 elementoIdIzq = document.getElementById('numberIzq')
                 elementoIdDer= document.getElementById('numberDer')
                 elementoIdBackIzq = document.getElementById('numberBackIzq')
                elementoIdBackDer= document.getElementById('numberBackDer')
                elemento5.innerHTML = clean
                elementoIdIzq.innerHTML = clean    
                elementoIdDer.innerHTML = clean
                elementoIdBackIzq.innerHTML = clean
                elementoIdBackDer.innerHTML = clean
            }
        })
        .catch(err => console.log(err))
}

function borrar() {


    document.getElementById("form").reset();



}

abilities();
