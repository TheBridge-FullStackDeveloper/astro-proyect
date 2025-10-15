---
title: Supertest
description: ""
pubDate: '01/03/2024'
collection: nodejs
---

## ¿Qué es Supertest?

<a href="https://github.com/visionmedia/supertest" target="_blank">Supertest</a> es una biblioteca para realizar pruebas de servidores HTTP en Node.js. Se utiliza comúnmente junto con frameworks de prueba como **Jest** o **Mocha**. Supertest permite realizar solicitudes HTTP y hacer afirmaciones sobre las respuestas, facilitando la prueba de las API de manera sencilla y efectiva.

## Características Principales

- **Fácil de Usar**: Proporciona una API sencilla para hacer solicitudes HTTP.
- **Integración con Jest**: Se puede usar fácilmente con Jest para pruebas de integración.
- **Soporte para Promesas**: Permite utilizar promesas para manejar solicitudes asíncronas.
- **Asserts Ricos**: Proporciona métodos para hacer afirmaciones detalladas sobre las respuestas.

## Instalación

Puedes instalar Supertest a través de npm o yarn. Asegúrate de tener Jest o el framework de prueba que prefieras instalado también.

```bash
# usando npm
npm install --save-dev supertest

# usando yarn
yarn add --dev supertest
```

## Configuración

Para usar Supertest, necesitas tener un servidor HTTP que esté escuchando en un puerto. Si estás usando Express, un ejemplo de configuración básica sería:

```javascript
// server.js
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

module.exports = app;
```

Luego, puedes iniciar el servidor en otro archivo (por ejemplo, `index.js`):

//no-try-code
```javascript
// index.js
const app = require('./server');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Primer Test con Supertest

A continuación, se muestra cómo realizar una prueba básica utilizando Jest y Supertest. Crea un archivo de prueba, por ejemplo, `server.test.js`:

```javascript
const request = require('supertest');
const app = require('./server');

describe('GET /api', () => {
  it('debería responder con un mensaje Hello World', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello World!');
  });
});
```

### Explicación:

* `request(app)`: Crea una instancia de Supertest con tu aplicación Express.
* `.get('/api')`: Realiza una solicitud GET a la ruta especificada.
* `expect`: Utiliza Jest para hacer afirmaciones sobre la respuesta.

## Pruebas Asíncronas

Supertest funciona bien con pruebas asíncronas utilizando `async/await` como en el ejemplo anterior. Asegúrate de usar `async` en la función de prueba para poder usar `await`.

## Pruebas de Otras Métodos HTTP

Supertest también permite probar otros métodos HTTP como POST, PUT y DELETE. Aquí hay un ejemplo de cómo probar un método POST:

```javascript
app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}!` });
});

// Test para el método POST
describe('POST /api/data', () => {
  it('debería responder con un mensaje personalizado', async () => {
    const response = await request(app)
      .post('/api/data')
      .send({ name: 'John' }); // Enviando el cuerpo de la solicitud
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Hello, John!');
  });
});
```

## Manejo de Errores

Puedes probar situaciones de error asegurándote de que tu API responda correctamente. Por ejemplo, puedes probar un endpoint que devuelve un error 404:

```javascript
app.get('/api/notfound', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Test para un error 404
describe('GET /api/notfound', () => {
  it('debería responder con un error 404', async () => {
    const response = await request(app).get('/api/notfound');
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Not Found');
  });
});
```

## Conclusión

Supertest es una herramienta poderosa y fácil de usar para realizar pruebas de API en Node.js. Su integración con Jest facilita la creación de pruebas robustas y efectivas. Con Supertest, puedes probar las respuestas de tus API de forma sencilla y asegurarte de que funcionen como se espera.


## Recursos adicionales

* <a href="https://github.com/visionmedia/supertest" target="_blank">Documentación Oficial de Supertest</a>
* <a href="https://jestjs.io/docs/getting-started" target="_blank">Jest - Documentación Oficial</a>