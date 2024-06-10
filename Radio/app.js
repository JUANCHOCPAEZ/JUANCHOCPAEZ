function iniciar() {
    let play = document.getElementById('play')
    play.classList.toggle('fa-play-circle');
    play.classList.toggle("fa-pause-circle");



}

function togglePlay() {
    if (player.paused) {
        iniciar();
        return player.play();
    } else {
        iniciar();
        return player.pause();
    }
}

function loadMusic(ruta) {
    let source = document.getElementById('source')
    let folder = "music"; //Carpeta donde tenemos almancenada la musica
    source.src = folder + "/" + ruta + ".mp3"



    reproduccionActual("Reproduciendo: " + ruta)
    player.load()
    iniciar()
    togglePlay()




}

const songs = [{
        id: 1,
        nombre: "Hurt - Johnny Cash"

    },
    {
        id: 2,
        nombre: "Kashmir - Led Zepellin"
    },
    {
        id: 3,
        nombre: "L.A. Woman - The Doors"
    },
    {
        id: 4,
        nombre: "Free Bird - Lynard Skynard"
    },
    {
        id: 4,
        nombre: "Comfortbly Numb - Pink Floyd"
    },
];

// Ahora dibujamos la tabla
const $cuerpoTabla = document.querySelector("#tabla");
// Recorrer todos los productos
songs.forEach(producto => {
    // Crear un <tr>
    const $tr = document.createElement("tr");
    // Creamos el <td> de nombre y lo adjuntamos a tr
    let $tdNombre = document.createElement("td");
    $tdNombre.textContent = producto.nombre; // el textContent del td es el nombre
    $tr.appendChild($tdNombre);
    // El td de precio

    // Finalmente agregamos el <tr> al cuerpo de la tabla

    document.getElementById("cuerpoTabla").appendChild($tr)
    $tr.setAttribute("border", "2");

    // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
});

var listadoMusica = document.getElementById('cuerpoTabla')
listadoMusica.onclick = (e) => {
        const itemClick = e.target
        reproduccionActual("Reproduciendo: " + itemClick.innerText)
        loadMusic(itemClick.innerText)
        player.play()



    }
    //Funcion para control del volumen
const volumen = document.getElementById("volumen")
volumen.oninput = (e) => {
    const vol = e.target.value
    player.volume = vol

}


//Funcion para mostrar el nombre del arhivo actual en reproduccion
function reproduccionActual(texto) {
    document.getElementById('currentPlay').innerText = texto
    let actual = texto

}

//Funcion para que al dar click sobre la barra de progeso se permita adelantar
progress.addEventListener('click', adelantar);

function adelantar(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * player.duration;
    player.currentTime = scrubTime;
    console.log(e);
}


//función para convertir horas y minutos a segundos
function secondsToString(seconds) {

    let hour = Math.floor(seconds / 3600);
    hour = (hour < 10) ? '0' + hour : hour;
    hour += ":"

    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10) ? '0' + second : second;
    return hour + minute + ':' + second;
}
//función que muestra el tiempo trascurrido de la canción 
const updateProgress = () => {
    if (player.currentTime > 0) {
        //tomamos el reproductor
        x = document.getElementById('player')
            //tomamos el tiempo actual de reproducción 
        let a = x.currentTime
            //quitamos los decimales al valor de a y lo encapsulamos en b
        let b = Math.trunc(a)
            //mostramos en el campo timer, el valor de B luego de ser usado por la función SecondsToString
        document.getElementById("timer").innerHTML = secondsToString(b) + " segundos.";


    }

}

//Función para reproducir la canción anterior
function prevMusic() {
    texto = document.getElementById('currentPlay').innerText
    reproduccionActual(texto)
    let nameSong = texto.slice(15)
    switch (nameSong) {

        case 'Hurt - Johnny Cash':
            console.log(nameSong)
            loadMusic('Comfortbly Numb - Pink Floyd')
            break;

        case 'Kashmir - Led Zepellin':
            console.log(nameSong)
            loadMusic('Hurt - Johnny Cash')
            break;

        case 'L.A. Woman - The Doors':
            console.log(nameSong)
            loadMusic('Kashmir - Led Zepellin')
            break;

        case 'Free Bird - Lynard Skynard':
            console.log(nameSong)
            loadMusic('L.A. Woman - The Doors')
            break;

        case 'Comfortbly Numb - Pink Floyd':
            console.log(nameSong)
            loadMusic('Free Bird - Lynard Skynard')
            break;
    }
}
//Función para reproducir la canción anterior
function nextMusic() {
    texto = document.getElementById('currentPlay').innerText
    reproduccionActual(texto)
    let nameSong = texto.slice(15)
    switch (nameSong) {

        case 'Hurt - Johnny Cash':
            console.log(nameSong)
            loadMusic('Kashmir - Led Zepellin')
            break;

        case 'Kashmir - Led Zepellin':
            console.log(nameSong)
            loadMusic('L.A. Woman - The Doors')
            break;

        case 'L.A. Woman - The Doors':
            console.log(nameSong)
            loadMusic('Free Bird - Lynard Skynard')
            break;

        case 'Free Bird - Lynard Skynard':
            console.log(nameSong)
            loadMusic('Comfortbly Numb - Pink Floyd')
            break;

        case 'Comfortbly Numb - Pink Floyd':
            console.log(nameSong)
            loadMusic('Hurt - Johnny Cash')
            break;
    }
}