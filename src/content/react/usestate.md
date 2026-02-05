---
title: useState
description: ""
pubDate: '03/03/2025'
collection: react
---

`useState` es un **hook** que permite añadir **estado** a los componentes funcionales.

El estado representa información que **puede cambiar** y provoca un **re-render** del componente.

## ¿Qué es el estado?

El estado es información dinámica:
- Contadores
- Formularios
- Flags (true / false)
- Datos del usuario


## Sintaxis básica

```js
import { useState } from "react";

const [count, setCount] = useState(0);
```

- `count` → valor actual
- `setCount` → función para actualizarlo
- `0` → valor inicial


## Ejemplo: contador

```js
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

Cada vez que se llama a `setCount`, el componente se vuelve a renderizar.



## Estado booleano

```js
const [isOpen, setIsOpen] = useState(false);
```

Uso típico:
- Mostrar / ocultar elementos
- Modales
- Menús


## Estado en formularios

```js
function Form() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

Esto se llama **input controlado**.


## Buenas prácticas

- No modificar el estado directamente
- Usar el setter siempre
- Un estado por responsabilidad
