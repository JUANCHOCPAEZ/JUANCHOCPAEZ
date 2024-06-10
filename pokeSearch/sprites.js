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
