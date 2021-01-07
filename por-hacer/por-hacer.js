const fs = require('fs');

let listadoPorHacer = [];

/**
 * @param guardarDB método para escribir información el el formato json. Se necesita convertir a json
 */
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se puedo grabar', err)
    })
}

/**
 * @param cargarDB método cargar los datos existentes en le json. No hay necesidad de convertir arreglo
 */
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

/**
 * @returns listadoPorHacer primero carga los datos del listado y luego lo devuelve
 */
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const actualizar = (descripcion, completado)=>{
    cargarDB();
    //devuelve la posición de la primera coincidencia con la descripción
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion)   ;
    if(index >=0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;
}

const borrar = (descripcion) =>{
    cargarDB();
    let booelan = false;
    listadoPorHacer = listadoPorHacer = listadoPorHacer.filter( tarea => {
        booelan = true;
        return tarea.descripcion !== descripcion;
    });
    
    guardarDB();
    return booelan;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}