let opts = {
    base: {
        demand: true,
        alias: 'b'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        opts,
        limite: { alias: 'l', default: 10 }
    })
    .command('crear', 'Crear un archivo resultado', opts)
    .help()
    .argv;


module.exports = {
    argv
}