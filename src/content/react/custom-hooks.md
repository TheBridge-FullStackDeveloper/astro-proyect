---
title: Custom Hooks
description: ""
pubDate: '09/03/2025'
collection: react
---

Los **custom hooks** permiten extraer lógica reutilizable en funciones reutilizables.

Su nombre debe empezar siempre por `use`.


## ¿Cuándo crear un custom hook?

- Lógica repetida
- Código complejo
- Separar lógica de UI


## Ejemplo de custom hook

```js
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url]);

  return data;
};
```


## Uso del custom hook

```js
const users = useFetch("/api/users");
```


## Ventajas
- Código más limpio
- Reutilización
- Mejor mantenimiento
- Separación de responsabilidades
