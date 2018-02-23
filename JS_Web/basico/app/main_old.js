// Eventos al cargar la página
//document > DOMContentLoaded
//window > load

(function(){
    //cuando document dispare el evento DomContentLoaded 
    //inicia el script
    document.addEventListener("DOMContentLoaded",main,false)
 //   window.addEventListener("load",main,false)
})();

(function(){
//funcion que se ejecuta automaticamente donde creas variables para 
//aislar del entorno global
let x;
})()


//Acceso al DOM
/* document.getElementById()
document.querySelector()
document.querySelectorAll() */





function main (){
    console.log("Documento cargado")
    console.log(document.querySelector('input'))
    console.log(document.querySelectorAll('button'))

    console.log(document.querySelector('#btn_1'))
    console.log(document.querySelector('#btn_2'))

    console.log(document.getElementById('btn_1'))
    console.log(document.getElementById('btn_2'))

    document.querySelector('#btn_1').addEventListener('click',btnSaludar,false)
    document.querySelector('#btn_2').addEventListener('click',btnRegistro,false)
    document.querySelector('#btn_3').addEventListener('click',btnIrGoogle,false)

    function btnSaludar(){
        /* window. */alert('Hola a todos')
    }

    function btnRegistro() {
        let user
        user= window.prompt("Dime tu nombre","Ej:Pepe")
    }

    //Metodos del BOM
    //Metodos posibles es el PDF
    //(alert,print,open,close,focus,resize,createPopup)
    function btnIrGoogle() {
        window.location.href = "https://www.google.com"
    }
}

