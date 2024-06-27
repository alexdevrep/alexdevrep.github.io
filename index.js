/*
    Javascript para el portfolio de alexdevrep

*/

//Botón para ver el currículum
$(document).ready(()=>{
    $("#view-cv").click(()=>{
        window.open("./cv/Europass - Curriculum_Alejandro_Díaz_05_24.pdf", "_blank")
    })
})

//Botón para descargar el currículum
$(document).ready(()=>{
    $("#download-cv").click(()=>{
        const link = document.createElement("a")
        link.href="./cv/Europass - Curriculum_Alejandro_Díaz_05_24.pdf"
        link.download="Europass - Curriculum_Alejandro_Díaz_05_24.pdf"
        link.click()
    })
})

/*
    Clase para crear la información de los proyectos
*/

class Proyectos{
    #img;
    #descripcion;
    #tecnologias;
    #enlaces;
    constructor(img,descripcion,tecnologias,enlaces){
        this.#img= img
        this.#descripcion=descripcion
        this.#tecnologias=tecnologias
        this.#enlaces=enlaces

    }
     // Métodos para acceder a las propiedades privadas (opcional)
     getImg() {
        return this.#img
    }

    getDescripcion() {
        return this.#descripcion
    }

    getTecnologias() {
        return this.#tecnologias
    }

    getEnlaces() {
        return this.#enlaces
    }
}

//Objetos de los proyectos
const expansorESP8266= new Proyectos(
    './imagenes/expansorESP8266.jpg',
    'Hola mundo esto es una prueba',
    ['./svg/arduino.svg','./svg/arduino.svg'],
    {github: 'https://github.com/alexdevrep'}
)
const paletizador= new Proyectos(
    './imagenes/expansorESP8266.jpg',
    'Hola mundo esto es una prueba aqui explicamos el paletizador',
    ['./svg/arduino.svg','./svg/arduino.svg'],
    {github: 'https://github.com/alexdevrep'}
)
const blogWordpress= new Proyectos(
    './imagenes/expansorESP8266.jpg',
    'Hola mundo esto es una prueba aqui explicamos el blog de wordpress',
    ['./svg/arduino.svg','./svg/arduino.svg'],
    {github: 'https://github.com/alexdevrep'}
)
const kicadCrud= new Proyectos(
    './imagenes/expansorESP8266.jpg',
    'Hola mundo esto es una prueba aqui explicamos el crud para kicad',
    ['./svg/arduino.svg','./svg/arduino.svg'],
    {github: 'https://github.com/alexdevrep'}
)
const atajosTeclado= new Proyectos(
    './imagenes/expansorESP8266.jpg',
    'Hola mundo esto es una prueba aqui explicamos los atajos de teclado',
    ['./svg/arduino.svg','./svg/arduino.svg'],
    {github: 'https://github.com/alexdevrep'}
)
const pcf8574= new Proyectos(
    './imagenes/expansorESP8266.jpg',
    'Hola mundo esto es una prueba aqui explicamos el pcf8574',
    ['./svg/arduino.svg','./svg/arduino.svg'],
    {github: 'https://github.com/alexdevrep'}
)

//Array para las instancias
const listaProyectos=[expansorESP8266,kicadCrud,blogWordpress,pcf8574,paletizador,atajosTeclado,]
//Botón para ver los proyectos 
$(document).ready(()=>{
    $('.card').click(function(event) {
        event.preventDefault()
        const id = $(this).closest('.card').attr('id');
        
        //Generamos la descripción detallada en base al proyecto seleccionado
        listaProyectos.forEach(function(proyecto,indice){
            if(id == indice){
                console.log(proyecto)
                //Generamos el HTML dinámico con la información detallada de los proyectos
                const proyectoDetalle =
                `<p class="descripcion">${proyecto.getDescripcion()}</p>`
                $('#proyectoDetalle').html(proyectoDetalle).show()
            }
        })
        
    })
    
})
