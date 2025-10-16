---
title: Variables
description: ""
pubDate: '01/01/2024'
collection: javascript
---

Una variable es un contenedor para almacenar datos que pueden cambiar durante la ejecución de un programa. Las variables se utilizan para almacenar valores como números, texto, objetos, etc..., y se pueden manipular y utilizar en diversas operaciones dentro de un programa.

En JavaScript, las variables se pueden declarar utilizando las palabras clave **var**, **let**, o **const**.

* **var**: Se utilizaba anteriormente para declarar variables, pero su uso ha sido reemplazado en gran medida por let y const.

```javascript
var nombre = "Juan";
nombre = "Carlos"; /* Esto es válido */
```
* **let**: Se utiliza para declarar variables que pueden ser reasignadas.

```javascript
let edad = 25;
edad = 26; /* Esto es válido */
```
* **const**: Se utiliza para declarar variables con un valor constante que no puede ser reasignado.

```javascript
const pi = 3.14;
pi = 3.1416; /* Esto generará un error */
```


## Tipos de datos en JavaScript:

JavaScript es un lenguaje de programación de tipado dinámico, lo que significa que no necesitas declarar explícitamente el tipo de datos que almacenará una variable. El tipo de datos se determina automáticamente en función del valor asignado a la variable. Los principales tipos de datos en JavaScript son:

* **Number**: Números, ya sean enteros o decimales.

```javascript
let entero = 10;
let decimal = 3.14;
```
* **String**: Cadenas de caracteres, es decir, texto.

```javascript
let saludo = "Hola, mundo!";
```
* **Boolean**: Valores true o false.

```javascript
let esVerdad = true;
let esFalso = false;
```
* **Object**: Un conjunto de propiedades clave-valor.

```javascript
let persona = {
  nombre: "Ana",
  edad: 30
};
```
* **Array**: Una lista ordenada de valores.

```javascript
let frutas = ["manzana", "naranja", "plátano"];
```
* **Null**: Representa la ausencia intencionada de cualquier valor o entidad de objeto.

```javascript
let coche = null;
```
* **Undefined**: Representa una variable que se ha declarado pero aún no se ha asignado ningún valor.

```javascript
let indefinido;
```

Tenemos que tener en cuenta dos conceptos con las variables. Uno es la declaración de la variable y otra es la asignación.

* Las variables "let" se pueden declarar sin asignar un valor de inicio. 

```javascript
let ciudad;
ciudad = "Madrid"; /* Esto es válido */
```
* Las variables "const" se deben declarar y asignar al inicializarlas

```javascript
const pais = "España"; /* Esto es válido */
const continente; /* Esto generará un error */
```

