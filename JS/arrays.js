/* Info pa JS= MDN */

let aDatos = new Array(12,34,56,12)
let aNombres = ["Pepe","Juan","Luis",33]

console.log(aDatos)
console.log(aNombres)

console.log(typeof aDatos)
console.log(typeof aNombres)

console.log(aDatos.length)
console.log(aNombres.length)
/* 
Saca el ultimo elemento no el que le pasas
aDatos.pop(34) 
shift el primero*/

/* Añade el elemento al final */
aDatos.push(65)

console.log(aDatos.includes(12))
console.log(aNombres.includes(12))

console.log(aDatos)
console.log(aNombres)

//Procesamiento inperativo
let suma = 0
for (let i = 0; i < aDatos.length; i++) {
    const element = aDatos[i];
    suma += element
}
console.log(suma)

//Prog funcional

aDatos = aDatos.map(item=> ++item)
console.log(aDatos)

aDatos = aDatos.filter(item=> item> 50)
console.log(aDatos)

let sum = 0
aDatos.forEach((item)=>{sum+=item})
/*aDatos.forEach(item=>sum+=item) es igual*/
console.log(sum)