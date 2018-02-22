const user = {
    nombre: "Pepe",
    apellidos: "Perez",
    edad: 22
}

user.genero= 'H';
user.genero='M';

const mostrarA1 = pData1 => {
    pData1.genero='H'
    console.log(pData1)
}

mostrarA1(JSON.parse(JSON.stringify(user)))
mostrarA1(Object.assign(pData1))


console.log(user)

