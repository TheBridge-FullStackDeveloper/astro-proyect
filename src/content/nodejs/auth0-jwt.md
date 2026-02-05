---
title: Auth0 y JWT
description: ""
pubDate: '10/03/2024'
collection: nodejs
---
La **autenticación** es el proceso mediante el cual una aplicación verifica la identidad de un usuario antes de permitirle acceder a determinados recursos.

En aplicaciones backend con Node.js es muy habitual utilizar **JWT (JSON Web Token)**, ya sea de forma manual o apoyándose en servicios externos como **Auth0**.

## ¿Qué es un JWT?

Un **JWT** es un token cifrado que contiene información del usuario y permite identificarlo sin necesidad de guardar sesiones complejas en el servidor.

Características principales:
- Es **autocontenido** (lleva la información dentro)
- Tiene **fecha de caducidad**
- Se puede verificar usando un **secreto**
- Se envía en cada petición autenticada


## Flujo típico de autenticación con JWT

1. El usuario hace login
2. El servidor valida las credenciales
3. Se genera un JWT
4. El token se guarda en la sesión o en el cliente
5. En cada petición protegida se verifica el token



## Generación del token

En este ejemplo se utiliza la librería `jsonwebtoken` y un secreto cifrado almacenado en un archivo de configuración.

### Función `generateToken`

Esta función genera un token que contiene el `id` del usuario y caduca en una hora.

```js
const jwt = require('jsonwebtoken');
const hashedSecret = require('../crypto/config.js');

const generateToken = (user) => {
  return jwt.sign(
    {
      user: user.id,
    },
    hashedSecret,
    { expiresIn: '1h' }
  );
};
```

### ¿Qué hace esta función?
- Inserta el identificador del usuario en el payload
- Firma el token con un secreto
- Define un tiempo de expiración
- Devuelve el JWT generado



## Almacenamiento del token en sesión

En este enfoque, el token se guarda en la **sesión del servidor**, normalmente tras el login:

```js
req.session.token = generateToken(user);
```

Esto permite que el backend controle el acceso sin exponer el token directamente al frontend.



## Middleware `isAuthenticated`

Este middleware comprueba si existe un token en la sesión.

```js
const isAuthenticated = (req, res, next) => {
  if (req.session.token) next();
  else next('route');
};
```

### ¿Para qué sirve?
- Verifica si el usuario está autenticado
- Si hay token → continúa
- Si no hay token → salta la ruta protegida

Es útil para proteger rutas sin validar aún el contenido del token.



## Verificación del token

Antes de permitir el acceso a rutas protegidas, es necesario **verificar que el token es válido**.

### Middleware `verifyToken`

```js
const verifyToken = (req, res, next) => {
  const token = req.session.token;

  if (!token) {
    return res.status(401).json({ message: 'token no generado' });
  }

  jwt.verify(token, hashedSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'token invalido' });
    }

    req.user = decoded.user;
    next();
  });
};
```

### ¿Qué hace este middleware?
- Comprueba que existe un token
- Verifica la firma y la expiración
- Extrae el usuario del token
- Lo añade a `req.user`
- Permite continuar si es válido


## Uso en rutas protegidas

Ejemplo de ruta protegida usando ambos middlewares:

```
app.get('/profile', isAuthenticated, verifyToken, (req, res) => {
  res.json({
    message: 'Acceso permitido',
    userId: req.user
  });
});
```

Solo los usuarios autenticados con token válido podrán acceder.


## Relación con Auth0

**Auth0** actúa como proveedor externo de autenticación:

- Gestiona login y registro
- Devuelve un JWT
- El backend solo debe verificar el token

En lugar de generar el token manualmente, Auth0 lo proporciona y se valida con su clave pública.

Ventajas:
- No gestionas contraseñas
- Seguridad profesional
- Compatible con OAuth
- Ideal para proyectos reales


## Resumen

- JWT permite autenticar usuarios sin sesiones complejas
- El token contiene información del usuario
- Se genera al hacer login
- Se verifica en cada petición protegida
- Auth0 automatiza todo este proceso

Este enfoque es ampliamente utilizado en APIs REST modernas.