class Main{

    constructor(){
        this.user ={
            nombre: localStorage.getItem("nombre")
        }
        this.tarea=""
        this.aTareas=JSON.parse(localStorage.getItem("tareas")) ? JSON.parse(localStorage.getItem("tareas")) : []
        this.vista = {
            boton:document.querySelector('#btn_2'),
            input:document.querySelector('#text_1'),
            resultado:document.querySelector('#res_1'),
            btnAdd:document.querySelector('#btn_1'),
            inTarea:document.querySelector('#text_2'),
            tareas:document.querySelector('#tar_1'),
        }
/*         document.addEventListener("DOMContentLoaded",this.defineListeners.bind(this),false); */
       /*  bind.this: siempre que haya un this dentro de la funcion debe 
        saber que se refiere al objeto en momento de carga,no de ejecucion */
/* 
        Otra forma es usar arrowfunctions que no tienen el problema del this */
/*         document.addEventListener("DOMContentLoaded",()=>{this.defineListeners},false); */
    
    this.vista.boton.addEventListener('click',this.btnRegistro.bind(this),false)
    this.vista.btnAdd.addEventListener('click',this.btnAdd.bind(this),false)
    this.mostrarNombre();

    }

    btnRegistro() {
        this.user.nombre=this.vista.input.value
        console.log(this.user.nombre)
/*         this.vista.resultado.innerHTML= `<p>Hola ${this.user.nombre}</p>` */
        //STORAGE LOCAL
        localStorage.setItem("nombre", this.user.nombre)
        this.mostrarNombre()

    }

    mostrarNombre(){
        if(this.user.nombre){
            this.vista.resultado.innerHTML= `<p>Hola ${this.user.nombre}</p>` 
            this.vista.resultado.classList.add("rojo")
        }
    }

    btnAdd() {
        this.tarea= this.vista.inTarea.value
        this.aTareas.push(this.tarea)
        localStorage.setItem("tarea", JSON.stringify(this.aTareas))
        this.mostrarTareas()

    }

    mostrarTareas(){
        if(this.aTareas){
            let lista
            lista= "<ul>"
            this.aTareas.forEach(item=>lista+=`<li>${item}</li>`)
            lista += "</ul>"
            this.vista.tareas.innerHTML= lista
        }

    }
    

}
(function(){
    document.addEventListener("DOMContentLoaded",()=>{oMain=new Main()},false)
})();



