---
title: Fetching de datos en React
description: ""
pubDate: '12/03/2025'
collection: react
---

Las aplicaciones React suelen comunicarse con APIs para obtener o enviar datos.

Esto se hace normalmente usando `fetch` o `axios`.


## Fetch de datos con useEffect

```js
useEffect(() => {
  fetch("/api/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);
```


## Estados de carga y error

```js
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

```js
useEffect(() => {
  fetch("/api/users")
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      setLoading(false);
    })
    .catch(() => setError("Error al cargar"));
}, []);
```


## Renderizado condicional

```js
if (loading) return <p>Cargando...</p>;
if (error) return <p>{error}</p>;
```


## Buenas prácticas
- Mostrar loading
- Gestionar errores
- No hacer fetch en el render
