// practica personal
const data = [
    {
        id: 1,
        nombre: "Juan",
        edad: 25,
        profesion: "Desarrollador",
        ciudad: "Madrid"
    },
    {
        id: 2,
        nombre: "Ana",
        edad: 30,
        profesion: "Diseñadora",
        ciudad: "Barcelona"
    },
    {
        id: 3,
        nombre: "Carlos",
        edad: 28,
        profesion: "Analista de datos",
        ciudad: "Valencia"
    },
    {
        id: 4,
        nombre: "Sofía",
        edad: 22,
        profesion: "Marketing Digital",
        ciudad: "Sevilla"
    },
    {
        id: 5,
        nombre: "Miguel",
        edad: 35,
        profesion: "Ingeniero",
        ciudad: "Bilbao"
    }
  ];

const printData = () => {
    // busco el espacio del HTML donde voy a meter los datos
    const container = document.querySelector('.trabajadores')

    // recorro el array
    data.forEach(trabajador => {
        const newTrabajador = document.createElement('div')

        newTrabajador.innerHTML = `
        <p>ID del empleado: ${trabajador.id}</p>
        <p>Nombre: ${trabajador.nombre}  -  Edad: ${trabajador.edad}</p>
        <p>Profesión: ${trabajador.profesion}</p>
        <p>Ciudad: ${trabajador.ciudad}</p>`

        // voy imprimiendo cada objeto del array
        container.appendChild(newTrabajador)
    })

}

printData();