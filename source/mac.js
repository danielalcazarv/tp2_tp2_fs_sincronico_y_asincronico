import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptName = path.basename(__filename);

const packageJsonPath = path.join(__dirname, '../package.json');
const infoTxtPath = path.join(__dirname, '../info.txt');


fs.readFile(packageJsonPath, 'utf-8', (errorLectura, contenidoStr) => {
    if (errorLectura) {
        return console.error('Error al leer el archivo package.json:', errorLectura.message);
    }

    fs.stat(packageJsonPath, (errorStat, stats) => {
        if (errorStat) {
            return console.error('Error al obtener las estadísticas del archivo:', errorStat.message);
        }

    const info = {
        contenidoStr: contenidoStr,
        contenidoObj: JSON.parse(contenidoStr),
        size: stats.size,
        modoGrabacion: scriptName
    };

    console.log(info);

    fs.writeFile(infoTxtPath, JSON.stringify(info, null, '\t'), (errorEscritura) => {
        if (errorEscritura) {
            return console.error('Error al guardar el archivo info.txt:', errorEscritura.message);
        }
        console.log('Archivo info.txt guardado con éxito usando callbacks!');
        });
    });
});