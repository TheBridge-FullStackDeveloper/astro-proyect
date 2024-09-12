import { defineCollection } from 'astro:content';
import fs from 'fs';
import path from 'path';

// Función para leer los directorios dentro de la carpeta 'content'
const collectionsDir = path.join(process.cwd(), 'src/content');
const collectionNames: string[] = fs.readdirSync(collectionsDir).filter((file) =>
  fs.statSync(path.join(collectionsDir, file)).isDirectory()
);

// Crear dinámicamente las colecciones
const collections = Object.fromEntries(
    collectionNames.map((name) => [
        name,
        defineCollection({
            type: 'content',
        }),
    ])
);

export { collections, collectionNames };
