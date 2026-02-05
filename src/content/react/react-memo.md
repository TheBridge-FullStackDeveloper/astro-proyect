---
title: React.memo
description: ""
pubDate: '02/04/2025'
collection: react
---

`React.memo` es una función que permite **memorizar un componente** para evitar re-renderizados innecesarios.

Un componente envuelto con `React.memo` solo se vuelve a renderizar si:
- Cambian sus props (comparación superficial)
- Cambia su estado interno (si lo tiene)
- Cambia el contexto que consume


## ¿Qué problema resuelve?

Si un componente padre se re-renderiza, por defecto los hijos también se renderizan.  
Aunque el hijo reciba las mismas props, se renderiza igualmente.

`React.memo` evita esto.


## Ejemplo sin React.memo

```js
function Child({ name }) {
  console.log("Render Child");
  return <p>Hola {name}</p>;
}
```

Si el padre se renderiza muchas veces, verás el log repetido aunque `name` no cambie.


## Ejemplo con React.memo

```js
import React from "react";

const Child = React.memo(({ name }) => {
  console.log("Render Child");
  return <p>Hola {name}</p>;
});
```

Ahora el hijo solo se renderiza si cambia `name`.


## ¿Por qué a veces no funciona?

Si pasas un objeto o función creado en cada render, React lo interpreta como “prop nueva”.

Ejemplo problemático:

```js
<Child user={{ name: "Sori" }} />
```

En cada render se crea un objeto nuevo.

Solución: memorizar con `useMemo`:

```js
const user = useMemo(() => ({ name: "Sori" }), []);
<Child user={user} />
```

Con funciones pasa lo mismo: usar `useCallback`.


## Cuándo usar React.memo

- Cuando el componente es pesado o se repite mucho
- Cuando el padre se re-renderiza frecuentemente
- Cuando las props del hijo suelen mantenerse iguales

No es necesario en apps pequeñas si todo va fluido.


## Resumen

- `React.memo` memoriza **componentes**
- Evita renders si las props no cambian
- Combina muy bien con `useCallback` y `useMemo`
