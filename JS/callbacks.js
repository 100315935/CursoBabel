function main(mostrar){
    const user = {
        nombre: "Lola",
        apellidos: "Bunny",
        edad: 100
    }
    mostrar(`
        El usuario es 
        ${user.nombre} ${user.apellidos}`
       ) 
}

function enMayusculas(pDato = "No se tu nombre"){
    console.log(pDato.toUpperCase)
}
function enMinusculas(pDato = "No se tu nombre"){
    console.log(pDato.toLowerCase)
}

/* main(enMayusculas); */

main((pDato=>console.log(pDato.toLowerCase())))