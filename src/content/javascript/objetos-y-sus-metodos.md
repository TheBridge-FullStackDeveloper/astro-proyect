---
title: Objetos y sus métodos
description: "esta es la descripcion de objetos y sus metodos"
pubDate: '01/03/2024'
collection: javascript
---

En JavaScript, un objeto es una estructura de datos que puede contener propiedades y métodos. Una propiedad es una asociación entre un nombre (una clave) y un valor, mientras que un método es una función asociada al objeto. Los objetos permiten organizar y manipular datos de manera estructurada y eficiente.

## Creación de Objetos

### Sintaxis de Objeto Literal

La forma más sencilla de crear un objeto es utilizando la sintaxis de objeto literal:

```javascript!
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, me llamo " + this.nombre);
    }
};
```

### Uso del Constructor `Object`

Otra manera de crear objetos es utilizando el constructor Object:

```javascript!
let persona = new Object();
persona.nombre = "Juan";
persona.edad = 30;
persona.saludar = function() {
    console.log("Hola, me llamo " + this.nombre);
};
```

### Constructores Personalizados

También puedes crear funciones constructoras para crear múltiples objetos del mismo tipo:

```javascript!
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log("Hola, me llamo " + this.nombre);
    };
}

let juan = new Persona("Juan", 30);
let maria = new Persona("María", 25);
```

## Propiedades de los Objetos

Las propiedades de un objeto son variables que están ligadas al objeto. Puedes acceder a las propiedades usando la notación de punto o la notación de corchetes.

### Acceso a las Propiedades

```javascript
let nombre = persona.nombre;  Notación de punto
let edad = persona["edad"]; /* Notación de corchetes */
```

### Modificación de las Propiedades

```javascript
persona.nombre = "Carlos"; /* Notación de punto */
persona["edad"] = 35; /* Notación de corchetes */
```

### Propiedades Calculadas

Desde ES6, es posible utilizar propiedades calculadas en objetos:

```javascript
let propiedad = "nombre";
let persona = {
    [propiedad]: "Juan"
};
console.log(persona.nombre); /* "Juan" */
```

## Métodos en los Objetos

Los métodos son funciones que pertenecen a un objeto. Se definen de la misma manera que las propiedades, pero su valor es una función.

### Definición y Uso de Métodos

```javascript
let persona = {
    nombre: "Juan",
    saludar: function() {
        console.log("Hola, me llamo " + this.nombre);
    }
};

persona.saludar(); /* "Hola, me llamo Juan" */
```

### Métodos Acortados (ES6)

A partir de ES6, es posible definir métodos de una manera más concisa:

```javascript
let persona = {
    nombre: "Juan",
    saludar() {
        console.log("Hola, me llamo " + this.nombre);
    }
};

persona.saludar(); /* "Hola, me llamo Juan" */
```

## Métodos Comunes de los Objetos

* **Object.keys()**

    Devuelve un array con los nombres de las propiedades de un objeto:

    ```javascript
    let keys = Object.keys(persona);
    console.log(keys); /* ["nombre", "saludar"] */
    ```
    
* **Object.values()**

    Devuelve un array con los valores de las propiedades de un objeto:

    ```javascript
    let values = Object.values(persona);
    console.log(values); /* ["Juan", function saludar() { ... }] */
    ```
    
* **Object.entries()**


    Devuelve un array de arrays, donde cada sub-array es un par clave-valor de las propiedades del objeto:

    ```javascript
    let entries = Object.entries(persona);
    console.log(entries); /* [["nombre", "Juan"], ["saludar", function saludar() { ... }]] */
    ```
    
* **Object.assign()**

    Copia las propiedades de uno o más objetos a un objeto destino:

    ```javascript
    let destino = {};
    let fuente = {a: 1, b: 2};
    Object.assign(destino, fuente);
    console.log(destino); /* {a: 1, b: 2} */
    ```
    
* **Object.freeze()**

    Congela un objeto, impidiendo que se añadan, eliminen o modifiquen sus propiedades:
    
    ```javascript
    let obj = {prop: 42};
    Object.freeze(obj);
    obj.prop = 33; /* No tiene efecto */
    console.log(obj.prop); /* 42 */

    ```
    
* **Object.seal()**

    Sella un objeto, permitiendo modificar las propiedades existentes, pero impidiendo añadir o eliminar propiedades:
    
    ```javascript
    let obj = {prop: 42};
    Object.seal(obj);
    obj.prop = 33; /* Modificación permitida */
    delete obj.prop; /* No tiene efecto */
    console.log(obj.prop); /* 33 */
    ```
    
## Conclusión

Los objetos son una parte fundamental de JavaScript y proporcionan una manera flexible de organizar y manipular datos. Comprender cómo crear y usar objetos y sus métodos es esencial para desarrollar aplicaciones efectivas en JavaScript.