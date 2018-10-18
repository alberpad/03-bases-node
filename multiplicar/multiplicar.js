const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        // if (!Number(base)) {
        //     reject(`La base "${base}" no es un número.`);
        //     return;
        // }
        // let data = '';
        // for (let i = 1; i <= 10; i++) {
        //     data += (`${base}*${i} = ${base*i}\n`);
        // };
        let data = calcularTabla(base, limite);
        if (!data) {
            reject(`La base "${base}" no es un número.`);

            return;
        }
        let archivo = `tabla-${base}.txt`;
        fs.writeFile(`./tablas/${archivo}`, data, (err) => {
            if (err) reject(err);
            else resolve(archivo);
        });
    })
};

let calcularTabla = (base, limite = 10) => {
    if (!Number(base)) {
        return;
    }
    let data = '';
    data = '==============================================\n'.blue;
    data += `==== Tabla del ${base} hasta el ${limite} ====\n`.bgBlue;
    data += '==============================================\n'.blue;

    for (let i = 1; i <= limite; i++) {
        data += (`${base}*${i} = ${base*i}\n`).green;
    };
    return data;
};
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = calcularTabla(base, limite);
        if (!data) {
            reject(`La base "${base}" no es un número.`);

            return;
        }
        console.log(data);
        resolve();
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}