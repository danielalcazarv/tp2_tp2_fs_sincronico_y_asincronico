import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptName = path.basename(__filename);


const packageJsonPath = path.join(__dirname, '../package.json');
const infoTxtPath = path.join(__dirname, '../info.txt');

try {
    const contenidoStr = fs.readFileSync(packageJsonPath, 'utf-8');
    const stats = fs.statSync(packageJsonPath);
    const size = stats.size;

    const info = {
        contenidoStr: contenidoStr,
        contenidoObj: JSON.parse(contenidoStr),
        size: size,
        scriptEjecutado: scriptName
    };

    console.log(info);

    fs.writeFileSync(infoTxtPath, JSON.stringify(info, null, '\t'));
    console.log('Archivo info.txt guardado con éxito en modo sincrónico!');

} catch (error) {
    console.error('Error:', error.message);
}