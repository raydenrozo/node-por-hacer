const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listadoTareas = porHacer.getListado();
        if (listadoTareas) {
            for (let listadoTarea of listadoTareas) {
                console.log('====Tareas por Hacer===='.green);
                console.log('Descripcion:'.bold, listadoTarea.descripcion);
                console.log('Estado: '.bold, listadoTarea.completado);
                console.log('========================'.green);
            }
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es conociedo');
        break;
}