
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea por hacer' 
}

const argv = require('yargs')
                .command('crear', 'Crea la tarea por hacer', { descripcion })
                .command('actualizar', 'Actualizar el estado completado de una tarea por hacer', { descripcion,
                    completado
                })
                .command('borrar', 'Eliminar una tarea por hacer',{ descripcion })
                .help()
                .argv;

module.exports = {
    argv
}