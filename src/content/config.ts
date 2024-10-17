import { defineCollection, z } from 'astro:content';
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
            schema: z.object({
                title: z.string(),
                description: z.string(),
                pubDate: z.coerce.date().transform((date) => {
                    const timeZone = 'Europe/Madrid'; // Cambia a tu zona horaria
                    const formattedDate = new Intl.DateTimeFormat('es-ES', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        timeZone: timeZone,
                    }).format(date);

                    return formattedDate; // Esto devolverá DD/MM/YYYY
                }),
                collection: z.string()
            })
        }),
    ])
);

export { collections, collectionNames };
