import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptName = path.basename(__filename);

const packageJsonPath = path.join(__dirname, '../package.json');
const infoTxtPath = path.join(__dirname, '../info.txt');

const procesarArchivos = async () => {
    try {
        const contenidoStr = await fs.readFile(packageJsonPath, 'utf-8');
        const stats = await fs.stat(packageJsonPath);

        const info = {
        contenidoStr: contenidoStr,
        contenidoObj: JSON.parse(contenidoStr),
        size: stats.size,
        scriptEjecutado: scriptName
        };

        console.log(info);

        await fs.writeFile(infoTxtPath, JSON.stringify(info, null, '\t'));
        console.log('Archivo info.txt guardado con éxito usando async/await!');
    } catch (error) {
        console.error('Error:', error.message);
    }
};

procesarArchivos();