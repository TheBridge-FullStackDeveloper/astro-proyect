---
title: Bucles
description: "esta es la descripcion de Bucles"
pubDate: '01/03/2024'
collection: javascript
---

Los bucles en JavaScript permiten ejecutar repetidamente un bloque de código mientras se cumpla una condición específica o durante un número definido de veces. Son una herramienta fundamental para realizar tareas repetitivas de manera eficiente

<hr>  

En JavaScript, hay varios tipos de bucles, pero los más comunes son:

* **for**: Un bucle que se ejecuta un número específico de veces, controlado por una variable de control.

    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log(i);  /* Imprime los números del 0 al 4 */
    }
    ```
* **while**: Un bucle que se ejecuta mientras una condición sea verdadera.
    ```javascript
    let count = 0;
    while (count < 5) {
      console.log(count);  /* Imprime los números del 0 al 4 */
      count++;
    }
    ```
* **do-while**: Un bucle similar al while, pero garantiza que se ejecute al menos una vez antes de verificar la condición.

    ```javascript
    let count = 0;
    do {
      console.log(count);  /* Imprime los números del 0 al 4 */
      count++;
    } while (count < 5);
    ```
* **for...of**: Un bucle que itera sobre elementos de cualquier objeto iterable (como arrays, cadenas, etc.).

    ```javascript
    let arr = ['a', 'b', 'c'];
    for (let element of arr) {
      console.log(element);  /* Imprime 'a', 'b', 'c' */
    }
    ```
* **for...in**: Un bucle que itera sobre las propiedades enumerables de un objeto.

    ```javascript
    let obj = {a: 1, b: 2, c: 3};
    for (let key in obj) {
      console.log(key, obj[key]);  /* Imprime 'a 1', 'b 2', 'c 3' */
    }
    ```






