let personas =[ {
    nombre: "Alejandro",
    Apellido: "Lopez",
    edad: 50,
}, {
    nombre: "Benjamin",
    Apellido: "Paredes",
    edad: 20,
}, {
    nombre: "Cristian",
    Apellido: "Cuevas",
    edad: 19,
}, {
    nombre: "Maria",
    Apellido: "Jose",
    edad: 89,
}, {
    nombre: "Pepe",
    Apellido: "Cataratas",
    edad: 33,
}, {
    nombre: "Michelle",
    Apellido: "Morales",
    edad: 20,
}

]

personas.forEach(function(persona){
    console.log(`Hola mi nombre es ${persona.nombre}, y tengo ${persona.edad} años`)
});
