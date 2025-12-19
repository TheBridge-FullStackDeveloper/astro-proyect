---
title: Middlewares
description: ""
pubDate: '03/03/2025'
collection: nodejs
---

Un **middleware** es una función que se ejecuta **antes de que una petición llegue al controlador**.

Permite interceptar, modificar o validar la petición.

## Flujo de una petición
Cliente → Middleware → Middleware → Controlador → Respuesta

## Usos comunes
- Autenticación
- Validación de datos
- Logs
- Manejo de errores
- Control de CORS

## Ejemplo de middleware
```js
const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "No autorizado" });
  }
  next();
};
```

## Aplicación del middleware
```js
app.use(authMiddleware);
```
