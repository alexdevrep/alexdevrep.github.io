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
    #titulo
    constructor(titulo,img,descripcion,tecnologias,enlaces){
        this.#titulo=titulo
        this.#img= img
        this.#descripcion=descripcion
        this.#tecnologias=tecnologias
        this.#enlaces=enlaces

    }
     // Métodos para acceder a las propiedades privadas
     getTitulo(){
        return this.#titulo
     } 
     getImg() {
        return this.#img
    }

    getDescripcion() {
        return this.#descripcion
    }

    getTecnologias(index) {
        return this.#tecnologias[index]
    }

    getEnlaces() {
        return this.#enlaces
    }
}

//Objetos de los proyectos
const expansorESP8266= new Proyectos(
    'Expansor I/O ESP8266',
    './imagenes/expansorESP8266.jpg',
    `
    Este proyecto tiene como objetivo aumentar la cantidad de entradas y salidas, tanto analógicas como digitales, de un microcontrolador ESP8266. 
    El ESP8266 es un potente módulo Wi-Fi ampliamente utilizado en aplicaciones de IoT (Internet de las Cosas) debido a su capacidad de conexión inalámbrica y su versatilidad. 
    Sin embargo, su número limitado de pines de entrada y salida puede ser una limitación para proyectos más complejos.

    Para superar esta limitación, se implementa un sistema de expansión utilizando componentes adicionales como multiplexores, 
    expansores de E/S (por ejemplo, PCF8574 para E/S digitales y el 74HC4067 para E/S analógicas) 

    El proyecto incluye el diseño del hardware necesario para la expansión, la configuración del ESP8266 para comunicarse con los componentes adicionales,
    y la programación del firmware para gestionar las nuevas entradas y salidas.
    `,
    ['./svg/arduino.svg','./svg/arduino.svg'],
    {github: 'https://github.com/alexdevrep'}
)
const paletizador= new Proyectos(
    'Paletizador de cajas',
    './imagenes/expansorESP8266.jpg',
    'Hola mundo esto es una prueba aqui explicamos el paletizador',
    ['./svg/arduino.svg','./svg/arduino.svg'],
    {github: 'https://github.com/alexdevrep'}
)
const blogWordpress= new Proyectos(
    'Blog sobre electrónica y Programación',
    './imagenes/expansorESP8266.jpg',
    'Hola mundo esto es una prueba aqui explicamos el blog de wordpress',
    ['./svg/arduino.svg','./svg/arduino.svg'],
    {github: 'https://github.com/alexdevrep'}
)
const kicadCrud= new Proyectos(
    'CRUD de footprints y modelos 3D para KiCaD',
    './imagenes/expansorESP8266.jpg',
    'Hola mundo esto es una prueba aqui explicamos el crud para kicad',
    ['./svg/arduino.svg','./svg/arduino.svg'],
    {github: 'https://github.com/alexdevrep'}
)
const atajosTeclado= new Proyectos(
    'Atajos de teclado personalizados',
    './imagenes/expansorESP8266.jpg',
    'Hola mundo esto es una prueba aqui explicamos los atajos de teclado',
    ['./svg/arduino.svg','./svg/arduino.svg'],
    {github: 'https://github.com/alexdevrep'}
)
const pcf8574= new Proyectos(
    'Mi propio ordenador Portátil',
    './imagenes/expansorESP8266.jpg',
    'Hola mundo esto es una prueba aqui explicamos el pcf8574',
    ['./svg/arduino.svg','./svg/arduino.svg'],
    {github: 'https://github.com/alexdevrep'}
)

//Array para las instancias
const listaProyectos=[expansorESP8266,kicadCrud,blogWordpress,pcf8574,paletizador,atajosTeclado,]
//Botón para ver los proyectos 
$(document).ready(() => {
    $('.card').click(function(event) {
        event.preventDefault();
        const id = $(this).closest('.card').attr('id');
        
        // Generamos la descripción detallada en base al proyecto seleccionado
        listaProyectos.forEach(function(proyecto, indice) {
            if (id == indice) {
                // Generamos el HTML dinámico con la información detallada de los proyectos
                const proyectoDetalle =
                `<div class="p-5 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                        <img src="${proyecto.getImg()}" alt="imagen del proyecto" class="card-img-top">
                        <h2 class="display-5 fw-bold">${proyecto.getTitulo()}</h2>
                        <p>${proyecto.getDescripcion()}</p>
                        <hr>
                        <p class="fw-bold">Tecnologías Utilizadas</p>
                        <ul>
                            <li>
                                <img src="${proyecto.getTecnologias(0)}" alt="Bootstrap" style="width:4rem;">
                            </li>
                        </ul>
                        <hr>
                        
                        <a href="https://github.com/alexdevrep" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Mi GitHub">
                            <button class="btn btn-secondary bg-dark">Ver proyecto en GitHub</button>
                        </a>
                        <button class="btn btn-secondary bg-dark" onclick="closeModal()">cerrar proyecto</button>
                    </div>
                </div>`;
                $('#proyectoDetalle').html(proyectoDetalle);
                $('#modal').show();
            }
        })
    });
})

function closeModal() {
    $('#modal').hide()
}

