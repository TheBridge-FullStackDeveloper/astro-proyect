---
title: Introduccion a React y JSX
description: ""
pubDate: '01/03/2025'
collection: react
---

**React** es una librería de JavaScript para construir interfaces de usuario basadas en **componentes reutilizables**.

Su objetivo principal es facilitar la creación de aplicaciones web **dinámicas**, **escalables** y **mantenibles**.

React se basa en el concepto de **SPA (Single Page Application)**, donde la página no se recarga completamente al navegar.


## ¿Por qué React?

Antes de React, la manipulación del DOM era compleja y poco eficiente.

React introduce:
- Un **modelo declarativo**
- Componentes reutilizables
- Un sistema eficiente de renderizado
- Separación de responsabilidades


## ¿Qué es un componente?

Un **componente** es una función que devuelve JSX y representa una parte de la interfaz.

```js
function Welcome() {
  return <h1>Hola React</h1>;
}
```

Cada componente:
- Es reutilizable
- Tiene su propia lógica
- Puede recibir datos

## JSX

JSX es una extensión de JavaScript que permite escribir HTML dentro de JavaScript.

```js
const element = <h1>Hola mundo</h1>;
```

Aunque parece HTML, **JSX es JavaScript** y se transforma internamente en llamadas a `React.createElement`.

## Reglas básicas de JSX

- Un solo elemento raíz
- Se usan llaves `{}` para JavaScript
- Los atributos usan `camelCase`

```js
function App() {
  const name = "Juan";

  return (
    <div>
      <h1>Hola {name}</h1>
    </div>
  );
}
```

## Diferencias con HTML

| HTML | JSX |
|----|----|
| class | className |
| for | htmlFor |
| onclick | onClick |

## Renderizado de componentes

Un componente se renderiza incluyéndolo como etiqueta:

```js
<App />
```

React se encarga de actualizar solo las partes necesarias del DOM.
