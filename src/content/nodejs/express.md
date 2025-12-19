---
title: Express
description: ""
pubDate: '02/03/2025'
collection: nodejs
---

**Express** es un framework minimalista para Node.js que permite crear servidores web y APIs de forma sencilla y flexible.

Es la base de la mayoría de proyectos backend en JavaScript.

## ¿Qué ofrece Express?
- Gestión de rutas HTTP
- Uso de middlewares
- Manejo de peticiones y respuestas
- Integración con bases de datos
- Soporte para APIs REST

## Ejemplo básico de servidor
```js
const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;
```

Express actúa como intermediario entre el cliente y la lógica del servidor.
