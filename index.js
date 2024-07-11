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

    getTecnologias() {
         //Generamos los elementos de la lista de tecnologías
         const tecnologias = this.#tecnologias
         let tecnologiasUsadas=''
         Object.keys(tecnologias).forEach(clave=>{
                tecnologiasUsadas +=
                `
                   <a href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${clave}">
                       <img src="${tecnologias[clave]+".svg"}" alt="${clave}" style="width:4rem;">
                   </a>
                    
                `
            })
           return tecnologiasUsadas      
    }

    getEnlaces() {
        return this.#enlaces
    }
}

//Objetos de los proyectos
const expansorESP8266= new Proyectos(
    'Expansor I/O ESP8266',
    './imagenes/expansorESP8266.webp',
    `
    Este proyecto amplía las entradas y salidas del microcontrolador ESP8266,
    un módulo Wi-Fi popular en aplicaciones IoT, superando sus limitaciones de pines. 
    Utiliza componentes como el PCF8574 para E/S digitales y el 74HC4067 para E/S analógicas. 
    Incluye el diseño del hardware necesario, la configuración del ESP8266 para comunicarse 
    con estos componentes adicionales y la programación del firmware para gestionar las nuevas entradas y salidas. 
    Este sistema de expansión permite el desarrollo de proyectos más complejos y versátiles.
    `,
    {'arduino':'./svg/arduino'},
    {github: 'https://github.com/alexdevrep'}
)
const paletizador= new Proyectos(
    'Paletizador de cajas',
    '',
    `
    He desarrollado un proyecto de automatización para un paletizador de cajas utilizando OpenPLC, Factory I/O y el lenguaje Ladder.
    Este proyecto simula y controla el proceso de apilamiento de cajas en palets de manera eficiente y precisa. 
    Utilizando OpenPLC para la programación del controlador lógico programable y Factory I/O para la simulación del entorno industrial, 
    he creado un sistema que optimiza el flujo de trabajo y garantiza la correcta disposición de las cajas. 
    Este proyecto evidencia mi habilidad en la automatización industrial, programación en lenguaje Ladder y uso de herramientas avanzadas para la simulación y control de procesos industriales.
    `,
    {'OpenPLC':'./svg/openPLC','factory I/O':'./svg/FactoryIO'},
    {github: 'https://github.com/alexdevrep'}
)
const blogWordpress= new Proyectos(
    'Blog sobre electrónica y Programación',
    '',
    `
    Bienvenido a mi blog de WordPress, donde exploro el fascinante mundo de la electrónica y la programación.
    Aquí encontrarás tutoriales detallados, proyectos innovadores y consejos prácticos para entusiastas y profesionales. 
    Desde la programación de microcontroladores y el diseño de circuitos electrónicos hasta el desarrollo de aplicaciones web y la automatización industrial, 
    comparto mis conocimientos y experiencias para ayudarte a expandir tus habilidades. 
    Mi objetivo es crear una comunidad donde podamos aprender y crecer juntos en estos campos apasionantes.
    ¡Únete y descubre todo lo que puedes lograr con la electrónica y la programación!
    `,
    {'WordPress':'./svg/wordpress','mySQL':'./svg/mysql','php':'./svg/php'},
    {github: 'https://github.com/alexdevrep'}
)
const kicadCrud= new Proyectos(
    'CRUD de footprints y modelos 3D para KiCaD',
    '',
    `
    Aplicación CRUD con Laravel para gestionar rutas de huellas y modelos 3D de componentes para KiCad.
    La aplicación permite a los usuarios almacenar, actualizar, visualizar y eliminar registros de huellas de PCB y sus correspondientes modelos 3D, 
    facilitando la organización y acceso a estos recursos.
    Además, la interfaz intuitiva y funcionalidad robusta de la aplicación garantizan una experiencia de usuario fluida y eficiente. 
    Este proyecto demuestra mi capacidad para construir aplicaciones web complejas y mi habilidad en la utilización de Laravel 
    para resolver problemas específicos en el ámbito del diseño electrónico.
    `,
    {'mySQL':'./svg/mysql','bootstrap':'./svg/bootstrap','laravel':'./svg/laravel-svgrepo-com'},
    {github: 'https://github.com/alexdevrep'}
)
const atajosTeclado= new Proyectos(
    'Atajos de teclado personalizados',
    '',
    `
    He desarrollado un proyecto open source utilizando FastAPI que permite a los usuarios crear y gestionar atajos de teclado personalizados. 
    El teclado está controlado por un microcontrolador programado en C/C++ que se comunica con la computadora mediante el protocolo I2C.
    Esta aplicación facilita la configuración de combinaciones de teclas para realizar diversas acciones de manera rápida y eficiente. 
    Con una interfaz intuitiva y un backend robusto, los usuarios pueden definir, modificar y eliminar atajos de teclado según sus necesidades. 
    Este proyecto demuestra mi habilidad en el uso de FastAPI para construir aplicaciones web modernas,
    mi habilidad para la programación de sistemas embebidos y mi compromiso con la creación de herramientas útiles y accesibles para mejorar la productividad.
    `,
    {'arduino':'./svg/arduino','fastAPI':'./svg/fastapi-svgrepo-com'},
    {github: 'https://github.com/alexdevrep'}
)
const portatil= new Proyectos(
    'Mi propio ordenador Portátil',
    '',
    `
    Estoy desarrollando mi propio ordenador portátil utilizando una Orange Pi y una tablet antigua, conectadas mediante escritorio remoto. 
    Este proyecto combina hardware accesible y software eficiente para crear un dispositivo portátil funcional y personalizado. 
    La Orange Pi actúa como el núcleo del sistema, gestionando las operaciones principales, mientras que la tablet proporciona una interfaz de usuario intuitiva y portátil. 
    Todo ello alimentado con baterías de litio que cuentan con su propio sistema de gestión que impiden su deterioro a corto plazo.
    Al utilizar el escritorio remoto, he optimizado la comunicación y el rendimiento entre ambos dispositivos, demostrando mi habilidad en la integración de hardware y software para crear soluciones innovadoras y prácticas
    `,
    {'arduino':'./svg/arduino','linux':'./svg/linux'},
    {github: 'https://github.com/alexdevrep'}
)

//Array para las instancias
const listaProyectos=[expansorESP8266,kicadCrud,blogWordpress,portatil,paletizador,atajosTeclado,]
//Botón para ver los proyectos 
$(document).ready(() => {
    $('.card').click(function(event) {
        event.preventDefault()
        const id = $(this).closest('.card').attr('id')
        
        // Generamos la descripción detallada en base al proyecto seleccionado
        listaProyectos.forEach(function(proyecto, indice) {
            if (id == indice) {
                // Generamos el HTML dinámico con la información detallada de los proyectos
                const proyectoDetalle =
                `<div class="p-3 mb-4 rounded-3">
                    <div class="container-fluid py-2">
                        <h2 class="display-5 fw-bold">${proyecto.getTitulo()}</h2>
                        <div class="container-fluid py-2 d-flex">
                            <div id ="imagen" class="container-fluid py-2">
                                <img src="${proyecto.getImg()}" alt="imagen del proyecto" class="img-fluid rounded">
                            </div>
                            
                            <div class="container-fluid">
                                <p>${proyecto.getDescripcion()}</p>
                                <hr>
                                <p class="fw-bold iconos">Tecnologías Utilizadas</p>
                                <div class="iconos"> 
                                    ${proyecto.getTecnologias()}
                                </div>
                                <hr>
                                <div class="container-fluid d-flex botones" style="display:flex; justify-content:center; align-items:center; padding-top:1.4rem">
                                    <a href="https://github.com/alexdevrep" target="_blank" class="btn btn-secondary bg-dark btn-sm ">
                                        Ver en GitHub
                                    </a>
                                    <span style="width:1rem;"></span>
                                    <button class="btn btn-secondary bg-dark btn-sm" onclick="closeModal()">Cerrar proyecto</button>                       
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>`
                $('#proyectoDetalle').html(proyectoDetalle)
                $('#modal').show()
                 // Inicializamos los tooltips de Bootstrap
                 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                 var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                     return new bootstrap.Tooltip(tooltipTriggerEl)
                 })
            }
        })
    })
    
})

function closeModal() {
    $('#modal').hide()
}
function copiar(){
    let texto = "alexdevrep@gmail.com"
    navigator.clipboard.writeText(texto)
    $('.copiar').hide()
    $('.copyCheck').show()
    setTimeout(function(){
        $('.copiar').show()
        $('.copyCheck').hide() 
    },2500)
}
//Modo día/noche
$(document).ready(function(){
    $(".dia").click(()=>{
    $('.noche').show()
    $('.dia').hide() 
    $('body').css("background-color","black")
    $('div.bg-light').toggleClass("bg-light bg-dark")
    $(".proyectos").css("background-color", "black")
    $('div').css({
        "color":"white",
    })
    $('i').css("color","white")
    $('#html5').attr("src","/svg/html_white.svg")
    $('#bootstrap').attr("src","/svg/bootstrap_white.svg")
    $('#php').attr("src","/svg/php_white.svg")
    $('#mysql').attr("src","/svg/mysql_white.svg")
    $('.modal-content').css("background-color", "black")
    $('span.close-button').toggleClass("close-button night")
    $('body').addClass('dark-mode')
    })
})
$(document).ready(function(){
    $(".noche").click(()=>{
    $('.noche').hide()
    $('.dia').show() 
    $('body').css("background-color","white")
    $('div.bg-dark').toggleClass("bg-dark bg-light")
    $('div').css("color","black")
    $('.proyectos').css("background-color","white")
    $('#html5').attr("src","/svg/html5.svg")
    $('#bootstrap').attr("src","/svg/bootstrap.svg")
    $('#php').attr("src","/svg/php.svg")
    $('#mysql').attr("src","/svg/mysql.svg")
    $('.modal-content').css("background-color", "white")
    $('span.night').toggleClass("night close-button")
    $('body').removeClass('dark-mode')
    

    })
})



