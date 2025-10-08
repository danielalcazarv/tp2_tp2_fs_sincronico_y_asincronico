import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptName = path.basename(__filename);

const packageJsonPath = path.join(__dirname, '../package.json');
const infoTxtPath = path.join(__dirname, '../info.txt');


fs.readFile(packageJsonPath, 'utf-8')
    .then(contenidoStr => {
        return fs.stat(packageJsonPath).then(stats => {
            const info = {
                contenidoStr: contenidoStr,
                contenidoObj: JSON.parse(contenidoStr),
                size: stats.size,
                scriptEjecutado: scriptName
            };
            console.log(info);
            return fs.writeFile(infoTxtPath, JSON.stringify(info, null, '\t'));
        });
    })
    .then(() => console.log('Archivo info.txt generado correctamente.'))
    .catch(error => console.error('Error:', error.message));