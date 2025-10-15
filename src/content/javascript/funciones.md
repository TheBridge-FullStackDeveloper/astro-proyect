---
title: Funciones
description: ""
pubDate: '01/03/2024'
collection: javascript
---

En programación, una función es un bloque de código que realiza una tarea específica o calcula un valor. Las funciones permiten encapsular la lógica en un bloque reutilizable, lo que facilita la organización y el mantenimiento del código. Una función se define con la palabra clave function, seguida de un nombre, una lista de parámetros encerrados entre paréntesis y un bloque de código encerrado entre llaves.

## Tipos de Funciones en JavaScript

### 1.  Funciones Declarativas

Las funciones declarativas son aquellas que se definen con la palabra clave function seguida del nombre de la función. Estas funciones son *"hoisted"*, lo que significa que pueden ser llamadas antes de su definición en el código.

```javascript
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
```

#### Uso
* Se utilizan cuando se necesita declarar una función con nombre que se pueda llamar en cualquier parte del código, incluso antes de su definición.


### 2. Funciones Expresivas

Las funciones expresivas se definen dentro de una expresión. No tienen nombre (son anónimas) y se asignan generalmente a una variable. A diferencia de las funciones declarativas, no son *"hoisted"*.

```javascript
const saludo = function(nombre) {
    return `Hola, ${nombre}`;
};
```

#### Uso

* Se usan cuando queremos definir una función que no será reutilizada en varios lugares, o cuando necesitamos una función en el momento de su definición.

### 3. Arrow Functions (Funciones Flecha)

Las arrow functions, introducidas en ES6, son una forma más concisa de escribir funciones en JavaScript. No tienen su propio contexto `this`, lo que puede ser ventajoso en algunos casos.

```javascript
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
};

/* Si la función solo tiene una expresión, podemos omitir las llaves y el `return` */

const saludar3 = nombre => `Hola, ${nombre}`;
```

#### Diferencias Principales:

* **Sintaxis**: Son más concisas.
* **Contexto `this`**: Las arrow functions no tienen su propio `this`; heredan el `this` del contexto en el que fueron definidas, lo que evita errores comunes con `this` en funciones tradicionales.
* **No "hoisting"**: Al igual que las funciones expresivas, no se pueden llamar antes de su declaración.

#### Uso
 
* Útiles en callbacks o funciones anónimas.
* Cuando se requiere que el contexto `this` se mantenga igual que el del entorno circundante.


## Diferencias y Uso Apropiado

#### Contexto `this`

* **Funciones Declarativas y Expresivas**: Tienen su propio contexto `this`. Esto puede ser confuso cuando se usan dentro de métodos de objetos o callbacks, ya que `this` puede no apuntar al objeto esperado.
* **Arrow Functions**: No tienen su propio contexto `this`, lo cual es útil en métodos de objetos y callbacks, donde se desea que `this` apunte al mismo objeto que en el entorno exterior.

#### Hoisting

* **Funciones Declarativas**: Pueden ser llamadas antes de su definición debido al "hoisting".
* **Funciones Expresivas y Arrow Functions**: No son "hoisted", por lo que deben ser definidas antes de ser llamadas.

#### Sintaxis y Legibilidad

* **Funciones Declarativas**: Son más verbosas y su uso puede ser preferido en funciones que serán reutilizadas y necesitan ser fácilmente identificables.
* **Arrow Functions**: Son más concisas, lo que las hace ideales para funciones cortas y callbacks.


### Ejemplos de uso

#### Función Declarativa

```javascript
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}
console.log(calcularAreaCirculo(5));
```

#### Función Expresiva

```javascript
const calcularAreaCirculo = function(radio) {
    return Math.PI * radio * radio;
};
console.log(calcularAreaCirculo(5));
```

#### Arrow Function

```javascript
const calcularAreaCirculo = radio => Math.PI * radio * radio;
console.log(calcularAreaCirculo(5));
```