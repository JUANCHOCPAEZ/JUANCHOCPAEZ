function movimientos(cod) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${cod}`)
        .then(response => response.json())
        .then(data => {

            move = data.abilities;
            type = data.types;
            height = data.height;
            weight = data.weight;
            borrarMoves();
            moves();
            tipos();
            dimensiones();
            peso();

            function borrarMoves() {
                clean = ""
                elemento1 = document.getElementById('moves')
                elemento1.innerHTML = clean
                elemento2 = document.getElementById('types')
                elemento2.innerHTML = clean
                elemento3 = document.getElementById('dimensions')
                elemento3.innerHTML = clean
                elemento4 = document.getElementById('peso')
                elemento4.innerHTML = clean

            }

            function moves() {

                for (let abilitys of move) {
                    search = abilitys.ability
                    let nameAbility = search.name
                   
                    let element = document.getElementById('moves')
                    element.innerHTML += `
                    ${nameAbility.toUpperCase()}.`
                    
                }
            }

            function tipos() {

                for (let tipo of type) {
                    let busTipo = tipo.type
                    nameTipo = busTipo.name

                    console.log(busTipo)
                    let TipoName = search.name


                    let elemento = document.getElementById('types')
                    elemento.innerHTML += `Tipo:
                ${nameTipo.toUpperCase()}. &nbsp  &nbsp  &nbsp  `

                    /*       for (i = 0; largo <= 0; i++) {
                               console.log(largo)
                               let element = document.getElementById('habilidades')
                               element.innerHTML += `
                           <li>${moviName[0]}</li>`
                           }*/
                }
            }

            function dimensiones() {
                let elementodim = document.getElementById('dimensions')
                elementodim.innerHTML += `Altura:
                ${height}0cm`
                
            }

            function peso() {
                let elementopeso = document.getElementById('peso')
                elementopeso.innerHTML += `Peso:
                ${weight}00gr`
            }

        })

    .catch(err => console.log(err))
}