console.log('Hola Mundo')
/* 
Tipos (elementales=inmutables) de JavaScript son
- String
- Number
- Boolean

- undifined(null)

(referenciado y mutable)
-object(null)

-function
-date
-math
-json
-regExp
-error
*/


var nombreAlumno = "Pepe"
var edadAlumno = 22
var isAlumno = true

var oNombreAlumno = new String('Pepa')
var oEdadAlumno = new Number(21)
var oIsAlumno = new Boolean(false)

console.log(typeof nombreAlumno)
console.log(typeof edadAlumno)
console.log(typeof isAlumno)

console.log(nombreAlumno)
console.log(edadAlumno)
console.log(isAlumno)

console.log(typeof oNombreAlumno)
console.log(typeof oEdadAlumno)
console.log(typeof oIsAlumno)

console.log(oNombreAlumno)
console.log(oEdadAlumno)
console.log(oIsAlumno)

console.log(oNombreAlumno.toString())
console.log(oEdadAlumno.valueOf())
console.log(oIsAlumno.valueOf())