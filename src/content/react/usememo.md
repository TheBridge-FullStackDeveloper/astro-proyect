---
title: useMemo
description: ""
pubDate: '04/04/2025'
collection: react
---

`useMemo` es un hook que permite **memorizar un valor calculado** para no recalcularlo en cada render.

Se usa cuando tienes:
- Cálculos costosos (reduce, filtros grandes, ordenaciones)
- Valores derivados que no deberían recalcularse si no cambia su origen


## ¿Qué problema resuelve?

Cada vez que un componente se renderiza, **todo el código del componente se ejecuta de nuevo**.  
Si dentro tienes un cálculo pesado, ese cálculo se repetirá aunque no haya cambiado nada relevante.


## Sintaxis

```js
const value = useMemo(() => {
  // cálculo
  return resultado;
}, [dependencias]);
```

- La función devuelve el valor calculado
- El cálculo solo se repite si cambian las dependencias


## Ejemplo sin useMemo

```js
function Cart({ items }) {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return <p>Total: {total}</p>;
}
```

Si el componente se re-renderiza por cualquier motivo, el `reduce` se ejecuta otra vez.


## Ejemplo con useMemo

```js
import { useMemo } from "react";

function Cart({ items }) {
  const total = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price, 0);
  }, [items]);

  return <p>Total: {total}</p>;
}
```

Ahora el total solo se recalcula si cambia `items`.


## Buenas prácticas

- Úsalo cuando el cálculo sea **realmente costoso**
- No lo uses por defecto: puede hacer el código menos legible
- Ojo con las dependencias: si cambian en cada render, no optimizas nada


## Resumen

- `useMemo` memoriza **valores**
- Reduce cálculos innecesarios
- Se recalcula solo cuando cambian las dependencias
