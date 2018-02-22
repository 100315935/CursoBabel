//Solo en ES6
//Esto es de "mentirijillas"

class User{
    // numUsers

    constructor (nombre,apellidos,edad,genero){
        this.nombre = nombre
        this.apellidos = apellidos
        this.edad = edad
        this.genero = genero
        /* ++numUsers */
    /*     this.saludar2 = function(){console.log(`Hola soy ${this.nombre}`)} */
    }
    saludar(){console.log(`Hola soy ${this.nombre}
    ya somos muchos`)}
}

class Alumno extends User {
    constructor(nombre,apellidos,edad,genero,curso){
        super(nombre,apellidos,edad,genero)
        this.curso = curso
    }
    saludar(){console.log(`Hola soy ${this.nombre}
    ya somos muchos alumnos`)}
}

oUser1 = new User('Juan','Perez',33,'H')
oAlumno = new Alumno('Pepito','Perez',2,'H','Angular')
oAlumno.notas = [9,10,10]
oAlumno2 = new Alumno('Derek','Perez',2,'H','Angular')
console.log(oAlumno)
console.log(oAlumno2)
oUser1.saludar()
oAlumno.saludar()