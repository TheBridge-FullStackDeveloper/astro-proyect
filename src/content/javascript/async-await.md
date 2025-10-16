---
title: Async-await
description: ""
pubDate: '01/13/2024'
collection: javascript
---

## Uso de async y await en JavaScript

El uso de `async` y `await` en JavaScript proporciona una manera más clara y concisa de trabajar con funciones asíncronas y promesas. Esto ayuda a escribir código más legible y mantener la sincronización en operaciones asíncronas de manera más eficiente.

## Funciones Asíncronas (async)

Las funciones marcadas con la palabra clave async permiten utilizar la palabra clave await dentro de ellas, lo que facilita el manejo de operaciones asíncronas de manera síncrona y secuencial.

```javascript
async function obtenerDatosUsuario(id) {
  try {
    let respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let datos = await respuesta.json();
    console.log(datos);
    return datos;
  } catch (error) {
    console.error('Error al obtener los datos del usuario:', error);
    throw error;
  }
}
obtenerDatosUsuario(10);
```

* `async function obtenerDatosUsuario(id) { ... }` define una función asíncrona llamada obtenerDatosUsuario que devuelve una promesa.
* `await fetch(...)` espera a que la función `fetch` obtenga los datos del usuario desde una API.
* `await respuesta.json()` espera a que los datos de la respuesta HTTP se conviertan en formato JSON.

## Palabra Clave `await`

La palabra clave `await` se usa dentro de funciones marcadas como `async` y pausa la ejecución de la función hasta que la promesa sea resuelta o rechazada. Esto evita el anidamiento excesivo de promesas y hace que el código sea más legible.

```javascript
async function obtenerDatosUsuario(id) {
  try {
    let respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error('Error al obtener los datos del usuario:', error);
    throw error;
  }
}
async function imprimirUsuario(id) {
  try {
    let usuario = await obtenerDatosUsuario(id);
    console.log(`Nombre: ${usuario.name}`);
    console.log(`Email: ${usuario.email}`);
  } catch (error) {
    console.error('Error al imprimir usuario:', error);
  }
}

imprimirUsuario(1);
```
* `await obtenerDatosUsuario(id)` espera a que la función `obtenerDatosUsuario` termine y devuelve los datos del usuario.
* Después de obtener los datos del usuario, se imprimen el nombre y el correo electrónico del usuario en la consola.

### Beneficios de `async` y `await`

* **Código más claro**: Evita el anidamiento excesivo de promesas, lo que mejora la legibilidad del código.
* **Manejo de errores simplificado**: Permite usar bloques try...catch para manejar errores de manera más natural.
* **Sincronización**: Permite escribir código asíncrono de manera secuencial, similar al estilo de código síncrono.

### Consideraciones

* Las funciones marcadas con `async` siempre devuelven una promesa. Pueden devolver un valor o lanzar un error.
* `await` solo puede usarse dentro de funciones marcadas como `async`.