
const fs = require('fs');
const colors = require('colors');

let listadoPorHcer = [];

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHcer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHcer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const getListado = () => {
    cargarDB();
    return  listadoPorHcer;
};

const cargarDB = () => {

    try {
        listadoPorHcer = require('../db/data.json');
    } catch (error) {
        listadoPorHcer = [];
    }
    
}

const guardarDB = () => {
    return new Promise( (resolve, reject) => {

        let data = JSON.stringify(listadoPorHcer);

        fs.writeFile(`db/data.json`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
            console.log(`The file has been saved!`);
        });
    });
}

const crear = (descripcion) => {
    
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHcer.push(porHacer);
    guardarDB();
    return porHacer;
};
const borrar = (descripcion) => {
    cargarDB();
    nuevoListadoPorHcer = listadoPorHcer.filter( (tarea) => {
        return tarea.descripcion !== descripcion; 
    });
    if (nuevoListadoPorHcer.length === listadoPorHcer.length) {
        return false;
    } else {
        listadoPorHcer = [];
        listadoPorHcer.push(nuevoListadoPorHcer)
        guardarDB();
        return true;
    }
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}