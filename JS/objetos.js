const oUserLit = {
    nombre: "Pepe",
    apellidos: "Perez",
    edad: 22,
    genero:"H",

    saludar: function(){
        console.log(`Hola soy ${this.nombre}`)
    }
}

function User (nombre,apellidos,edad,genero){
    this.nombre = nombre
    this.apellidos = apellidos
    this.edad = edad
    this.genero = genero
    ++User.prototype.numUsers
/*     this.saludar2 = function(){console.log(`Hola soy ${this.nombre}`)} */
}

User.prototype.numUsers= 0
User.prototype.saludar= function(){console.log(`Hola soy ${this.nombre}
ya somos ${this.numUsers}`)}


//Formas de invocacion
//mostarA1()
//console.log()
//new User()
//call/apply

oUser = new User('Juan','Perez',33,'H')

oUser.saludar()
oUser2 = new User('PEPE','Perez',33,'H')
/* console.log(oUser)
console.log(oUserLit) */

oUserLit.saludar()

oUser2.saludar()