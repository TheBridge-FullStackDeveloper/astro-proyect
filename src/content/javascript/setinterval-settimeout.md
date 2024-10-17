---
title: setInterval y setTimeOut
description: "esta es la descripcion de setInterval y setTimeOut"
pubDate: '01/03/2024'
collection: javascript
---

## `setInterval()`

La función `setInterval()` en JavaScript se utiliza para ejecutar una función o un fragmento de código repetidamente cada cierto intervalo de tiempo especificado. Su sintaxis básica es la siguiente:

```javascript
let intervalID = setInterval(función, intervalo);
```

* `función`: Es la función que se ejecutará cada vez que pase el intervalo especificado.
* `intervalo`: Es el tiempo en milisegundos que debe transcurrir antes de que se llame nuevamente a la función.

```javascript
/* Ejecutar una función cada 1 segundo (1000 milisegundos) */
let intervalID = setInterval(() => {
    console.log('Ejecutando cada segundo');
}, 1000);
```

### Detener un `setInterval()`:

Puedes detener la ejecución del `setInterval()` usando `clearInterval()` y pasando el `intervalID` devuelto por `setInterval()`:

```javascript
clearInterval(intervalID);
```

## `setTimeout()`

La función `setTimeout()` se utiliza para ejecutar una función o un fragmento de código después de que transcurra un cierto período de tiempo especificado. Su sintaxis básica es la siguiente:

```javascript
let timeoutID = setTimeout(función, tiempo);
```

* `función`: Es la función que se ejecutará después de que pase el tiempo especificado.
* `tiempo`: Es el tiempo en milisegundos que debe transcurrir antes de que se llame a la función.

```javascript
/* Ejecutar una función después de 2 segundos (2000 milisegundos) */
let timeoutID = setTimeout(() => {
    console.log('Han pasado 2 segundos');
}, 2000);
```

### Cancelar un `setTimeout()`:

Puedes cancelar la ejecución de `setTimeout()` usando `clearTimeout()` y pasando el timeoutID devuelto por `setTimeout()`:

```javascript
clearTimeout(timeoutID);
```





