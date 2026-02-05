---
title: API Rest
description: ""
pubDate: '04/03/2025'
collection: nodejs
---

Una **API REST** (Representational State Transfer) es una forma de diseñar servicios web que permite la comunicación entre un cliente (frontend, Postman, otra API…) y un servidor mediante HTTP.

Es el tipo de API más utilizado en aplicaciones web modernas.

## Principios REST
Una API REST bien diseñada cumple los siguientes principios:

- **Uso de métodos HTTP** para definir acciones
- **URLs que representan recursos**, no acciones
- **Stateless**: el servidor no guarda estado entre peticiones
- **Formato JSON** como estándar de intercambio de datos

## Métodos HTTP más comunes
| Método | Uso |
|------|-----|
| GET | Obtener datos |
| POST | Crear un recurso |
| PUT | Actualizar un recurso completo |
| PATCH | Actualizar parcialmente |
| DELETE | Eliminar |

## Ejemplo de recursos
Un recurso representa una entidad del sistema:

- `/users`
- `/products`
- `/orders`

Incorrecto:

```js
/getUsers
/createUser
```

Correcto:
```js
GET /users
POST /users
```

## Ejemplo de endpoints REST
| Método | Ruta | Acción |
|------|-----|-------|
| GET | /users | Obtener todos |
| POST | /users | Crear usuario |
| GET | /users/:id | Obtener uno |
| PUT | /users/:id | Actualizar |
| DELETE | /users/:id | Eliminar |

## Ejemplo de controlador
```js
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
```

## Códigos de estado HTTP
Usar correctamente los códigos de estado es parte de REST:

- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 404 Not Found
- 500 Internal Server Error
