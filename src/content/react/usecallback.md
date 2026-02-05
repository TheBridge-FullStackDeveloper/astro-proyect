---
title: useCallback
description: ""
pubDate: '03/04/2025'
collection: react
---

`useCallback` es un hook que permite **memorizar una función** para evitar que se cree una nueva en cada render.

Es especialmente útil cuando:
- Pasas funciones como props a componentes hijos
- Usas `React.memo` y quieres evitar renders innecesarios


## ¿Qué problema resuelve?

En React, cuando escribes:

```js
const handleClick = () => console.log("click");
```

Esa función se **crea de nuevo** en cada render.  
Si la pasas a un hijo, el hijo puede pensar que “ha cambiado una prop” (porque la referencia de la función cambia).


## Sintaxis

```js
const fn = useCallback(() => {
  // lógica
}, [dependencias]);
```

La función solo cambia si cambian sus dependencias.


## Ejemplo sin useCallback

```js
function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("click");
  };

  return <Child onClick={handleClick} />;
}
```

`handleClick` se crea de nuevo en cada render.


## Ejemplo con useCallback

```js
import { useCallback, useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("click");
  }, []);

  return <Child onClick={handleClick} />;
}
```

Ahora `handleClick` mantiene la misma referencia mientras no cambien las dependencias.


## Dependencias y errores comunes

Si la función usa variables del estado, hay que añadirlas a dependencias:

```js
const handleInc = useCallback(() => {
  setCount(count + 1);
}, [count]);
```

Alternativa recomendada para evitar dependencias:

```js
const handleInc = useCallback(() => {
  setCount((prev) => prev + 1);
}, []);
```


## Resumen

- `useCallback` memoriza **funciones**
- Evita cambios de referencia innecesarios
- Muy útil junto con `React.memo`
