//console.log("**************** NASA ****************") ;
window.addEventListener('load' , obtenerDatos()) ;
//const nasa_key =  `Z53QfWvmEZKDmxg0KodQxldEqCjfdQo9DSdw3RZg`;
// const ruta = "https://api.nasa.gov/planetary/apod?api_key=Z53QfWvmEZKDmxg0KodQxldEqCjfdQo9DSdw3RZg";

function obtenerDatos() {
fetch(`https://api.nasa.gov/planetary/apod?api_key=Z53QfWvmEZKDmxg0KodQxldEqCjfdQo9DSdw3RZg`)
.then((respuesta) => respuesta.json())
.then((resultado) => mostrarDatos(resultado));
}

/*
function mostrarDatos(resultado) {
    console.log("********* resultado ******************") ;
    console.log(resultado) ;
    console.log("**************************************");
}
*/
 function mostrarDatos({date , explanation , title , media_type , url}) {

    const titulo = document.querySelector('#titulo');
    titulo.innerHTML = title;
    const fecha = document.querySelector('#fecha');
    fecha.innerHTML = date;
    const descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = explanation;

    const c_multimedia = document.querySelector('#c_multimedia');
    if (media_type == 'video') {
        c_multimedia.innerHTML = `<iframe class="embed-resposive-item" src="${url}"></iframe>`
    } else {
        c_multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`
    }
 }
 
