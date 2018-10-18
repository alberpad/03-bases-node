const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');
console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then()
            .catch((err) => console.log(err));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch((err) => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];