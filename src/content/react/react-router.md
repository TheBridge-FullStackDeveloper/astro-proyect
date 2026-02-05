---
title: React Router
description: ""
pubDate: '07/03/2025'
collection: react
---

**React Router** permite gestionar la navegación en aplicaciones React sin recargar la página.

Es la librería estándar para crear rutas en **Single Page Applications (SPA)**.


## ¿Por qué necesitamos routing?

En una SPA:
- No hay recarga de página
- El contenido cambia según la URL
- React decide qué componente renderizar

## Instalación
```js
npm install react-router-dom
```


## Configuración básica

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
```


## Navegación con Link

```js
import { Link } from "react-router-dom";

<Link to="/profile">Perfil</Link>
```


## Rutas dinámicas

```js
<Route path="/users/:id" element={<User />} />
```

Acceso al parámetro:

```js
import { useParams } from "react-router-dom";

const { id } = useParams();
```


## Rutas protegidas

Se pueden proteger rutas comprobando autenticación antes de renderizar.


## Buenas prácticas
- Centralizar las rutas
- Usar rutas semánticas
- Evitar lógica compleja en el router
