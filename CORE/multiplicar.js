const fs = require('fs');
const colors = require('colors');

let listarTablas = (base, limite = 10) => {

    for (let j = base; j <= limite; j++) {
        console.log(`Tabla del ${j}`.green);

        for (let i = 1; i <= 10; i++) {
            console.log(`${j} * ${i} = ${j * i}`);
        }
        console.log('\n');
    }
}


let crearTabla = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla del ${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla del ${base}.txt`);
        })
    })
}



module.exports = {
    crearTabla,
    listarTablas
}