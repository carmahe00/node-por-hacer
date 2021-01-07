const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias:'c',
    demand: true,
    desc: 'Marca como completado o pendiente la tarea'
    
}
const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea',{
        descripcion,
        completado
    })
    .command('borrar', 'Elimina le objeto de la base de datos',{
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}