---
title: Redux
description: ""
pubDate: '10/03/2025'
collection: react
---

**Redux** es una librería para gestionar **estado global** en aplicaciones grandes.

Se utiliza cuando el estado es complejo o se comparte entre muchos componentes.


## ¿Qué problema resuelve Redux?

- Prop drilling excesivo
- Estado compartido complejo
- Flujo de datos difícil de seguir


## Conceptos principales
- Store
- Actions
- Reducers
- Dispatch


## Flujo de Redux
1. Componente dispara una acción
2. Reducer actualiza el estado
3. Store notifica a los componentes


## Redux Toolkit

Redux Toolkit simplifica Redux y es la forma recomendada actualmente.


## Ejemplo básico con Redux Toolkit

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    }
  }
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
```


## ¿Cuándo usar Redux?

- Apps grandes
- Estado compartido global
- Lógica compleja

Para apps pequeñas, `useContext` suele ser suficiente.
