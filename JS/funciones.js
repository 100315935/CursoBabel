function mostrar1 (pData) {
    console.log(pData)
}

if(true){
    let localEdad = 222
    const año =1992
    console.log(año)
}


/* var oDatos1 = new Object
var oDatos2 = {}

var mostrar2 = new Function() */

var mostrar3 = function(pData1, pData2){
    console.log(pData1,pData2)
}
/* ARROW FUNCTION (ES6) */
/* Se pueden quitar {} si es una linea  */
var mostrarA2 = (pData1, pData2) => console.log(pData1,pData2)
/* Si es un solo parametro se puede quitar () */
var mostrarA1 = pData1 => console.log(pData1)




var nombre = 'Lucia'
var edad = 23

mostrar1(nombre, edad)
mostrar3(nombre, edad)
mostrarA1(nombre)