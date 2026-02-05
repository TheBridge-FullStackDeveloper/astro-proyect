---
title: useRef
description: ""
pubDate: '08/03/2025'
collection: react
---

`useRef` permite crear una **referencia mutable** que persiste entre renders sin provocar re-render.

Se utiliza principalmente para acceder al DOM.


## Sintaxis básica

```js
const inputRef = useRef(null);
```


## Acceso al DOM

```js
<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>
  Focus
</button>
```


## useRef vs useState

| useState | useRef |
|--------|--------|
| Provoca render | No provoca render |
| UI reactiva | Valor persistente |
| Datos visibles | Datos internos |


## Guardar valores entre renders

```js
const renderCount = useRef(0);
renderCount.current += 1;
```


## Casos de uso habituales
- Focus en inputs
- Timers
- Animaciones
- Valores anteriores
