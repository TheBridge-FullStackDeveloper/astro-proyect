---
title: Diseño modular
description: ""
pubDate: '01/03/2025'
collection: nodejs
---

El **diseño modular** es una forma de estructurar aplicaciones dividiéndolas en partes pequeñas, independientes y reutilizables. Cada módulo tiene una **responsabilidad clara**, lo que facilita el mantenimiento, las pruebas y la escalabilidad del proyecto.

En aplicaciones backend con Node.js y Express, el diseño modular es fundamental para evitar archivos gigantes y código difícil de entender.

## Ventajas del diseño modular
- Código más limpio y legible
- Facilita el trabajo en equipo
- Mejora la reutilización
- Permite escalar la aplicación
- Hace los tests más sencillos

## Separación de responsabilidades
Una buena práctica es separar:
- Rutas
- Controladores
- Modelos
- Middlewares
- Servicios
- Configuración

## Ejemplo de estructura modular
```
src/
├── app.js
├── server.js
├── routes/
│   └── users.routes.js
├── controllers/
│   └── users.controller.js
├── models/
│   └── User.model.js
├── middlewares/
│   └── auth.middleware.js
├── services/
│   └── users.service.js
├── config/
│   └── db.js
└── tests/
    └── users.test.js
```

Cada carpeta cumple una función concreta y evita mezclar lógica.
