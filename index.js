import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const modo = process.argv[2];

if (!modo) {
    console.error('Debes ingresar: npm run test seguido de: -- (un espacio) y de un modo: ms | mac | maptc | mapaa');
    process.exit(1);
}

const scriptPath = path.join(__dirname, 'source', `${modo}.js`);

const scriptURL = pathToFileURL(scriptPath).href;

try {
    console.log(`Ejecutando modo: ${modo.toUpperCase()}`);
    await import(scriptURL);
} catch (error) {
    console.error(`Error al ejecutar el modo "${modo}":`, error.message);
}
