
function random (){
        var cod = Math.floor(Math.random() * 1025 + 1);
        console.log(cod)
         
     consultar(cod);
     movimientos(cod)
     borrarMoves();
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

  function consultar(cod) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${cod}`)
        .then(response => response.json())
        .then(data => {

            numero = data.id

            nombre = data.name
            imagen = data.sprites.front_default
            shiny = data.sprites.front_shiny
            generalBack = data.sprites.back_default
            backShiny = data.sprites.back_shiny
            femaleShiny = data.sprites.front_shiny_female
            imagenfemale = data.sprites.front_female
            borrarMoves();

            let elementNombreIzq = document.getElementById('nombreIzq')
            elementNombreIzq.innerHTML = nombre.toUpperCase()
            let elementNombreBackIzq = document.getElementById('nombreBackIzq')
            elementNombreBackIzq.innerHTML = nombre.toUpperCase()
            let elementNombreDer = document.getElementById('nombreDer')
            elementNombreDer.innerHTML = nombre.toUpperCase()
            let elementNombreBackDer = document.getElementById('nombreBackDer')
            elementNombreBackDer.innerHTML = nombre.toUpperCase()
            document.getElementById('imagenBackIzq').src = shiny
            /*var miDivs = document.querySelector(".nombre");
            console.log(data.name)
            for (var i = 0; i < miDivs.length; i++) {
                miDivs[i].innerHTML = data.name[i];
            }*/
            document.getElementById('imagenIzq').src = imagen
            document.getElementById('imagenDer').src = imagenfemale
            document.getElementById('imagenBackDer').src = femaleShiny

            // document.getElementById('backShiny').src = backShiny
           
            //      document.getElementById('post').src = generalBack

            console.log("devuelvo el numero" + numero)
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
            //document.getElementById('fema2373lefont').src = data.imagenfemale
            
           
           
            //-----consol---- hover imagen principal
        

            function hoverPrincipal() {

                let imagen = document.getElementById('imagen')
                imagen.addEventListener('mouseover', back, false)

            }

            function outPrincipal() {

                let imagen = document.getElementById('imagen')
                imagen.addEventListener('mouseout', font, false)
            }

            function font() {
                document.getElementById('imagen').src = imagen
            }

            function back() {
                document.getElementById('imagen').src = generalBack
            }
            //--------- hover imagen femenina
            function hoverfemale() {

                let imagen = document.getElementById('femalefont')
                if (imagen == null) {
                    document.getElementById('femalefont').src = 'FoundNot.png'
                }
                imagen.addEventListener('mouseover', femaleback, false)


            }

            function outfemale() {

                let imagen = document.getElementById('femalefont')
                imagen.addEventListener('mouseout', femalefont, false)
            }

            function femalefont() {
                let a = document.getElementById('femalefont').src = data.sprites.front_female
                if (a == null) {
                    document.getElementById('femalefont').src = 'images/notFound2.png'

                }
            }

            function femaleback() {
                let a = document.getElementById('femalefont').src = data.sprites.back_female

                if (a == null) {
                    document.getElementById('femalefont').src = 'notFound.png'

                }
            }
            //--------- hover imagen shiny 
            function hovershiny() {

                let imagen = document.getElementById('shinyFont')
                imagen.addEventListener('mouseover', shinyback, false)

            }

            function outshiny() {

                let imagen = document.getElementById('shinyFont')
                imagen.addEventListener('mouseout', shinyfont, false)
            }

            function shinyfont() {
                document.getElementById('shinyFont').src = data.sprites.front_shiny
            }

            function shinyback() {
                document.getElementById('shinyFont').src = data.sprites.back_shiny
            }


            //--------- hover imagen shiny femenina

            function hoverfemaleshiny() {

                let imagen = document.getElementById('femaleShiny')
                imagen.addEventListener('mouseover', femaleShinyback, false)

            }

            function outfemaleshiny() {

                let imagen = document.getElementById('femaleShiny')
                imagen.addEventListener('mouseout', femaleShinyfont, false)
            }

            function femaleShinyfont() {
                let a = document.getElementById('femaleShiny').src = data.sprites.front_shiny_female
                if (a == null) {
                    document.getElementById('femaleShiny').src = 'images/notFound2.png'

                }
            }

            function femaleShinyback() {
                let a = document.getElementById('femaleShiny').src = data.sprites.back_shiny_female

                if (a == null) {
                    document.getElementById('femaleShiny').src = 'notFound.png'

                }
            }
            /* femalefont();
             femaleShinyfont();*/
            //  hoverPrincipal()
            //outPrincipal()
            //outfemale()
            //hoverfemale()
            //hovershiny();
            //outshiny();
            //hoverfemaleshiny();
            //outfemaleshiny();


        })

        .catch(err => console.log(err))
}
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
                    ${nameAbility.toUpperCase()}.</br>> `
                    
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