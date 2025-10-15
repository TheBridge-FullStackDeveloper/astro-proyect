---
title: Métodos de número
description: ""
pubDate: '01/03/2024'
collection: javascript
---

JavaScript proporciona varios métodos para trabajar con números, lo que facilita realizar operaciones matemáticas, validar valores numéricos y formatear números. A continuación, se presentan algunos de estos métodos esenciales con una descripción ampliada y ejemplos de uso.

### 1. Number.parseFloat(cadena)

El método `Number.parseFloat()` convierte una cadena en un número de punto flotante. Es útil cuando necesitamos convertir cadenas que representan números decimales a su forma numérica correspondiente.

```javascript
let cadena1 = "3.14";
let cadena2 = "123.456";
let cadena3 = "Texto no numérico";

let numero1 = Number.parseFloat(cadena1);
let numero2 = Number.parseFloat(cadena2);
let numero3 = Number.parseFloat(cadena3);

console.log(numero1); /* Salida: 3.14 */
console.log(numero2); /* Salida: 123.45 */
console.log(numero3); /* Salida: NaN (Not a Number) */
```

En este ejemplo, `Number.parseFloat` convierte correctamente las cadenas "3.14" y "123.456" en números de punto flotante. Sin embargo, la cadena "Texto no numérico" no puede convertirse en un número válido, por lo que devuelve `NaN`.

### 2. Number.isNaN(valor)

El método `Number.isNaN()` verifica si el valor proporcionado es `NaN` (Not a Number). Es una forma confiable de comprobar si un valor es `NaN`, ya que la comparación directa (`=== NaN`) no funciona como se espera debido a la naturaleza única de `NaN`.

```javascript
let valor1 = NaN;
let valor2 = 123;
let valor3 = "texto";

console.log(Number.isNaN(valor1)); /* Salida: true */
console.log(Number.isNaN(valor2)); /* Salida: false */
console.log(Number.isNaN(valor3)); /* Salida: false */

/* Ejemplo con parseFloat */
let valor4 = Number.parseFloat("Texto no numérico");
console.log(Number.isNaN(valor4)); /* Salida: true */
```

En este ejemplo, `Number.isNaN` devuelve `true` solo cuando el valor proporcionado es `NaN`. En el último caso, al intentar convertir "Texto no numérico" a un número, el resultado es `NaN`, por lo que `Number.isNaN(valor4)` devuelve `true`.

### 3. Number.toFixed(decimales)

El método `Number.toFixed()` devuelve una cadena que representa el número con un número fijo de decimales. Es especialmente útil cuando necesitamos formatear números para mostrar una cantidad específica de decimales, por ejemplo, en cálculos financieros o al mostrar porcentajes.

```javascript
let numero1 = 3.14159;
let numero2 = 123.456789;

let formato1 = numero1.toFixed(2);
let formato2 = numero2.toFixed(3);

console.log(formato1); /* Salida: "3.14" */
console.log(formato2); /* Salida: "123.457" */

/* Ejemplo con 0 decimales */
let formato3 = numero2.toFixed(0);
console.log(formato3); /* Salida: "123" */
```

En este ejemplo, `toFixed(2)` formatea el número `3.14159` a "3.14" (con 2 decimales) y `toFixed(3)` formatea `123.456789` a "123.457" (con 3 decimales, redondeando el último dígito). También podemos usar `toFixed(0)` para redondear al número entero más cercano.

### 4. Number.isInteger(valor)

Este método determina si el valor proporcionado es un número entero.

```javascript
let valor1 = 4;
let valor2 = 4.5;
let valor3 = "texto";

console.log(Number.isInteger(valor1)); /* Salida: true */
console.log(Number.isInteger(valor2)); /* Salida: false */
console.log(Number.isInteger(valor3)); /* Salida: false */
```

En este ejemplo, `Number.isInteger` devuelve `true` solo para el valor `4`, que es un número entero.

### 5. Number.isFinite(valor)

Este método determina si el valor proporcionado es un número finito.

```javascript
let valor1 = 10;
let valor2 = Infinity;
let valor3 = -Infinity;
let valor4 = NaN;

console.log(Number.isFinite(valor1)); /* Salida: true */
console.log(Number.isFinite(valor2)); /* Salida: false */
console.log(Number.isFinite(valor3)); /* Salida: false */
console.log(Number.isFinite(valor4)); /* Salida: false */
```

En este ejemplo, `Number.isFinite` devuelve `true` solo para el número `10`, ya que `Infinity`, `-Infinity` y `NaN` no son números finitos.


### 6. Number.parseInt(cadena, [radix])

Este método analiza una cadena y la convierte en un número entero de la base especificada. El parámetro `radix` es opcional y especifica la base de los números en la cadena.

```javascript
let cadena1 = "42";
let cadena2 = "1010";
let cadena3 = "7E4";
let cadena4 = "texto";

let numero1 = Number.parseInt(cadena1);
let numero2 = Number.parseInt(cadena2, 2); /* Binario */
let numero3 = Number.parseInt(cadena3, 16); /* Hexadecimal */
let numero4 = Number.parseInt(cadena4);

console.log(numero1); /* Salida: 42 */
console.log(numero2); /* Salida: 10 */
console.log(numero3); /* Salida: 2020 */
console.log(numero4); /* Salida: NaN */
```

En este ejemplo, `Number.parseInt` convierte correctamente las cadenas en números enteros según la base especificada.

### 7. Number.isSafeInteger(valor)

Este método determina si el valor proporcionado es un entero seguro. Un entero seguro es un entero que se puede representar exactamente en el formato de números de punto flotante de doble precisión.

```javascript
let valor1 = 42;
let valor2 = Math.pow(2, 53) - 1;
let valor3 = Math.pow(2, 53);

console.log(Number.isSafeInteger(valor1)); /* Salida: true */
console.log(Number.isSafeInteger(valor2)); /* Salida: true */
console.log(Number.isSafeInteger(valor3)); /* Salida: false */
```

En este ejemplo, `Number.isSafeInteger` devuelve `true` para los valores que son enteros seguros.

### 8. Number.prototype.toExponential(fracciones)

Este método devuelve una cadena que representa el número en notación exponencial.

```javascript
let numero = 123456;

let exponencial1 = numero.toExponential();
let exponencial2 = numero.toExponential(2);
let exponencial3 = numero.toExponential(4);

console.log(exponencial1); /* Salida: "1.23456e+5" */
console.log(exponencial2); /* Salida: "1.23e+5" */
console.log(exponencial3); /* Salida: "1.2346e+5" */
```

En este ejemplo, `toExponential` formatea el número en notación exponencial con diferentes números de fracciones decimales.

### 9. Number.prototype.toPrecision(precisión)

Este método devuelve una cadena que representa el número con la precisión especificada.

```javascript
let numero = 123.456;

let precision1 = numero.toPrecision(4);
let precision2 = numero.toPrecision(6);

console.log(precision1); /* Salida: "123.5" */
console.log(precision2); /* Salida: "123.456" */
```

En este ejemplo, `toPrecision` formatea el número con la precisión especificada en términos de dígitos totales.



## Conclusión

JavaScript proporciona una gama completa de métodos para manipular y trabajar con números, lo que permite realizar operaciones numéricas de manera eficiente y precisa. Los métodos `Number.parseFloat`, `Number.isNaN`, y `Number.toFixed` son herramientas poderosas para convertir cadenas a números de punto flotante, verificar si un valor es `NaN`, y formatear números con un número específico de decimales, respectivamente. Además, métodos como `Number.isInteger`, `Number.isFinite`, `Number.parseInt`, `Number.isSafeInteger`, `Number.prototype.toExponential`, y `Number.prototype.toPrecision` permiten validar valores numéricos, convertir cadenas a números enteros, determinar si un número es un entero seguro, y formatear números en notación exponencial o con una precisión específica. Comprender y utilizar estos métodos adecuadamente simplifica muchas operaciones numéricas en el desarrollo de aplicaciones web y scripts, facilitando la validación, conversión y formateo de números en diversas aplicaciones.
