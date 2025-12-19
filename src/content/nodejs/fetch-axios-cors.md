---
title: Fetch, Axios y CORS
description: ""
pubDate: '05/03/2025'
collection: nodejs
---

## Fetch y Axios
Son herramientas para hacer peticiones HTTP desde frontend o backend.

```js
axios.get("/api/users");
```

## CORS
CORS es un mecanismo de seguridad del navegador que controla peticiones entre dominios distintos.

## Error típico
Blocked by CORS policy

## Solución en Express
```js
const cors = require("cors");
app.use(cors());
```

También se puede limitar por origen:
```js
app.use(cors({ origin: "http://localhost:3000" }));
```
