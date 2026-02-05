---
title: Scraping
description: ""
pubDate: '09/03/2024'
collection: nodejs
---

El **scraping** consiste en obtener información de páginas web de forma automatizada, simulando el comportamiento de un usuario o de un navegador.

Se utiliza para recolectar datos públicos disponibles en la web.

## Casos de uso habituales
- Comparadores de precios
- Listados de ofertas
- Monitorización de cambios en una web
- Extracción de información pública

## Herramientas más comunes
- **axios / fetch** → realizar peticiones HTTP
- **cheerio** → analizar HTML (similar a jQuery)
- **puppeteer** → navegador real (Chrome)

## Scraping estático vs dinámico
- **Estático**: HTML generado en servidor (axios + cheerio)
- **Dinámico**: contenido generado por JavaScript (puppeteer)

## Ejemplo con axios y cheerio
```js
const axios = require("axios");
const cheerio = require("cheerio");

const scrapeTitles = async () => {
  const { data } = await axios.get("https://example.com");
  const $ = cheerio.load(data);

  const titles = [];
  $("h1").each((i, el) => {
    titles.push($(el).text());
  });

  return titles;
};
```

## Ejemplo de uso en una API
```js
app.get("/scrape", async (req, res) => {
  const data = await scrapeTitles();
  res.json(data);
});
```

## Consideraciones legales y éticas
- Respetar `robots.txt`
- No saturar servidores
- Scraping solo de datos públicos
- Revisar términos de uso