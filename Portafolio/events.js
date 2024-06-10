window.addEventListener('scroll', function () {
    //Declaración elementos por ID
    let animacionLenguajeText = this.document.getElementById('lenguajeText');
    let animacionJs = this.document.getElementById('js');
    let animacionHtml = this.document.getElementById('html');
    let animacionCss = this.document.getElementById('css');
    let animacionBootstrap = this.document.getElementById('bootstrap');
    let animacionJava = this.document.getElementById('java');
    let animacionSql = this.document.getElementById('mysql');
    let animacionPhp = this.document.getElementById('php');
    let animacionReact = this.document.getElementById('react');

    //Ubicación del elemento en la pantalla según donde queramos la animación
    let posicionTitle = animacionLenguajeText.getBoundingClientRect().top;
    // console.log(posicionTitle);
    let screenSize = window.innerHeight / 2.8;

    //Condicional de ejecución de animación
    if (posicionTitle < screenSize) {

        animacionLenguajeText.style.animation = 'tituloLenguajes 1s ease-out forward';
        animacionJs.style.animation = 'izqSup 1s ease-out';
        animacionHtml.style.animation = 'giro 1s ease-out';
        animacionCss.style.animation = 'giroInv 1s ease-out';
        animacionBootstrap.style.animation = 'derSup 1s ease-out';
        animacionJava.style.animation = 'izqInf 1s ease-out';
        animacionSql.style.animation = 'giro 1s ease-out';
        animacionPhp.style.animation = 'giroInv 1s ease-out';
        animacionReact.style.animation = ' derInf 1s ease-out';

    }
})

function hoverContainerLanguages() {

    document.getElementById('lenguajeText').style.animation = 'creceTitulo 1s ease-out forwards';
}

function outContainerLanguages() {
    document.getElementById('lenguajeText').style.animation = 'decreceTitulo 1s ease-out forwards';

}

function outImageLanguage() {
    document.getElementById('texthover').style.animation = 'textHoveroculto 0.1s fordwards'
    console.log("entra")
}

function hoverContainerPortafolio() {

    document.getElementById('projectsText').style.animation = 'creceTitulo 1s ease-out forwards';
}


function outContainerPortafolio() {
    document.getElementById('projectsText').style.animation = 'decreceTitulo 1s ease-out forwards';

}

function outImagePortafolio() {
    document.getElementById('projectsText').style.animation = 'textHoveroculto 0.1s fordwards'
    console.log("entra")
}

// esta funcion comprueba si un elemento esta visible en pantalla
function isVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

//Animación para llegar el texto
// cuando se carga la página...
window.addEventListener('DOMContentLoaded', (ev0) => {
    // asignamos un evento scroll...
    window.addEventListener('scroll', (ev1) => {
        // y a todos los elementos con la clase paused...
        document.querySelectorAll(".paused").forEach(elm => {
            if (isVisible(elm)) // que sean visibles...
                elm.classList.remove("paused"); // les quitamos la clase paused
        })
    });
});