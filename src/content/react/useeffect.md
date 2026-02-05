---
title: useEffect
description: ""
pubDate: '04/03/2025'
collection: react
---

`useEffect` es un hook que permite ejecutar **efectos secundarios** en los componentes de React.

Un efecto secundario es cualquier acción que ocurre **fuera del renderizado**, como:
- Peticiones HTTP
- Acceso al DOM
- Suscripciones
- Timers


## ¿Cuándo se ejecuta useEffect?

Depende del **array de dependencias**.

### useEffect sin dependencias
Se ejecuta **en cada render**.

```js
useEffect(() => {
  console.log("Se ejecuta siempre");
});
```


### useEffect con array vacío
Se ejecuta **una sola vez**, al montar el componente.

```js
useEffect(() => {
  console.log("Solo al montar");
}, []);
```

### useEffect con dependencias
Se ejecuta cuando cambia una dependencia.

```js
useEffect(() => {
  console.log("count ha cambiado");
}, [count]);
```


## Ejemplo: fetch de datos

```js
useEffect(() => {
  fetch("https://api.example.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);
```

Este patrón es muy común para cargar datos iniciales.


## Limpieza de efectos (cleanup)

Algunos efectos necesitan limpieza, como timers o listeners.

```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

El `return` se ejecuta cuando el componente se desmonta.


## Errores comunes

- Olvidar dependencias
- Crear bucles infinitos
- Actualizar estado sin control

Siempre revisa el array de dependencias.
