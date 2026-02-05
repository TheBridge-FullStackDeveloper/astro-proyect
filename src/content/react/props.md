---
title: Props
description: ""
pubDate: '02/03/2025'
collection: react
---

Las **props** (propiedades) son la forma principal de **pasar información de un componente padre a un componente hijo**.

Funcionan como los parámetros de una función.

## ¿Para qué sirven las props?

- Enviar datos a componentes hijos
- Reutilizar componentes
- Configurar el comportamiento de un componente

## Ejemplo básico

```js
function Saludo(props) {
  return <h2>Hola {props.nombre}</h2>;
}
```

Uso del componente:

```js
<Saludo nombre="Juan" />
```

## Props como objeto

Las props llegan siempre como un objeto.

```js
function User(props) {
  return <p>Email: {props.email}</p>;
}
```

## Desestructuración de props

Es una práctica muy habitual para mejorar la legibilidad.

```js
function User({ email }) {
  return <p>Email: {email}</p>;
}
```

## Props son de solo lectura

Las props **no se pueden modificar** dentro del componente hijo.

❌ Incorrecto:

```js
props.nombre = "Otro nombre";
```

Si un dato debe cambiar, debe gestionarse con **estado**.

## Paso de funciones como props

También se pueden pasar funciones.

```js
function Button({ onClick }) {
  return <button onClick={onClick}>Click</button>;
}
```

Esto permite comunicación hijo → padre.

