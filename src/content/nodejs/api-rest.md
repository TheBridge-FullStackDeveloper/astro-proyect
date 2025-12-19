---
title: API Rest
description: ""
pubDate: '04/03/2025'
collection: nodejs
---

Una **API REST** permite la comunicación entre cliente y servidor usando HTTP y siguiendo una serie de convenciones.

## Principios REST
- Uso de métodos HTTP
- URLs que representan recursos
- Comunicación sin estado (stateless)
- Respuestas en formato JSON

## Métodos HTTP
| Método | Acción |
|------|-------|
| GET | Obtener datos |
| POST | Crear |
| PUT | Actualizar |
| DELETE | Eliminar |

## Ejemplo de endpoints
| Método | Ruta | Acción |
|------|-----|-------|
| GET | /users | Obtener usuarios |
| POST | /users | Crear usuario |
| GET | /users/:id | Obtener uno |
| PUT | /users/:id | Actualizar |
| DELETE | /users/:id | Eliminar |

## Ejemplo de controlador
```js
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
```
