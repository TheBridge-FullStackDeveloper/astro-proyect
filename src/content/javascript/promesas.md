---
title: Promesas en Javascript
description: ""
pubDate: '01/12/2024'
collection: javascript
---

Las promesas son objetos utilizados para la programación asíncrona en JavaScript. Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca. Proporcionan una manera más limpia y robusta de manejar el código asíncrono en comparación con los callbacks.

### Características principales

1. **Estado de una promesa**: 

    * *Pending (pendiente)*: Estado inicial, antes de que se complete o se rechace la promesa.
    * *Fulfilled (cumplida)*: La operación asociada con la promesa se completó con éxito.
    * *Rejected (rechazada)*: La operación asociada con la promesa falló.

2. **Métodos principales**:

    * `then()`: Se utiliza para manejar el caso cuando una promesa es cumplida.
    * `catch()`: Se utiliza para manejar el caso cuando una promesa es rechazada.
    * `finally()`: Se ejecuta siempre después de `then()` o `catch()`, independientemente de si la promesa fue cumplida o rechazada.

```javascript
/* Crear una función que retorna una promesa */
function doSomething() {
    return new Promise((resolve, reject) => {
        /* Operación asíncrona (ejemplo simulado con setTimeout) */
        setTimeout(() => {
            let success = true; /* Supongamos que la operación fue exitosa */
            if (success) {
                resolve("¡Éxito!"); /* La promesa se cumple */
            } else {
                reject("¡Error!"); /* La promesa se rechaza */
            }
        }, 2000); /* Simulamos una operación que toma 2 segundos */
    });
}

/* Uso de la promesa */
doSomething()
    .then((result) => {
        console.log("Resultado:", result); /* Se ejecuta si la promesa se cumple */
    })
    .catch((error) => {
        console.error("Error:", error); /* Se ejecuta si la promesa es rechazada */
    })
    .finally(() => {
        console.log("Operación completada."); /* Se ejecuta siempre al final */
    });
```

* `doSomething()` es una función que retorna una promesa.
* Dentro de la promesa se realiza una operación asíncrona simulada con `setTimeout`.
* Dependiendo del resultado de la operación, se llama a `resolve()` para cumplir la promesa o a `reject()` para rechazarla.
* Usamos `then()` para manejar el caso de éxito y `catch()` para manejar el error.
* `finally()` se utiliza para realizar alguna acción que debe ocurrir independientemente del resultado de la promesa.

Las promesas en JavaScript son fundamentales para manejar operaciones asíncronas de manera efectiva, evitando el anidamiento excesivo de callbacks y mejorando la legibilidad del código.