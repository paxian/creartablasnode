const argv = require('./CONFIG/yargs').argv;
const { crearTabla, listarTablas } = require('./CORE/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTablas(argv.base, argv.limite);
        break;

    case 'crear':
        crearTabla(argv.base)
            .then(nombreArchivo => console.log('Archivo creado', colors.green(nombreArchivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

// console.log(argv);

// console.log(argv.limite);