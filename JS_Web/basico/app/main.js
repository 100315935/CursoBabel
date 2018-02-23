class Main{

    constructor(){

        document.addEventListener("DOMContentLoaded",this.defineListeners.bind(this),false);
       /*  bind.this: siempre que haya un this dentro de la funcion debe 
        saber que se refiere al objeto en momento de carga,no de ejecucion */
/* 
        Otra forma es usar arrowfunctions que no tienen el problema del this */
/*         document.addEventListener("DOMContentLoaded",()=>{this.defineListeners},false); */
    }
    defineListeners(){
        console.log("Documento cargado")
        console.log(document.querySelector('#btn_1'))
        console.log(document.querySelector('#btn_2'))
        document.querySelector('#btn_1').addEventListener('click',this.btnSaludar,false)
        document.querySelector('#btn_2').addEventListener('click',this.btnRegistro,false)
        document.querySelector('#btn_3').addEventListener('click',this.btnIrGoogle,false)
    }
    btnSaludar(){
        /* window. */alert('Hola a todos')
    }
    btnRegistro() {
        let user
        user= window.prompt("Dime tu nombre","Ej:Pepe")
    }
    btnIrGoogle() {
        window.location.href = "https://www.google.com"
    }

}
(function(){new Main()})();
/*     document.addEventListener("DOMContentLoaded",()=>{oMain=new Main()},false) */




