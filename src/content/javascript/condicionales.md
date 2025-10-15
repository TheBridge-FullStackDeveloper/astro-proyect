---
title: Condicionales
description: ""
pubDate: '01/03/2024'
collection: javascript
---

Las estructuras condicionales en JavaScript permiten controlar el flujo de ejecución del programa basándose en ciertas condiciones. Los condicionales se utilizan para ejecutar un bloque de código si una condición es verdadera (true) o para ejecutar un bloque de código alternativo si la condición es falsa (false).

## Tipos de condicionales

### 1. **if** declaración

Permite ejecutar un bloque de código si la condición especificada es verdadera.

Sintaxis:

```javascript
if (condición) {
    // bloque de código a ejecutar si la condición es verdadera
}
```

Ejemplo:

```javascript
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
}
```
En este ejemplo, si la variable edad es mayor o igual a 18, se imprimirá en la consola "Eres mayor de edad".

### 2. **if...else** declaración 

Ejecuta un bloque de código si la condición es verdadera y otro bloque si la condición es falsa.

Sintaxis:
```javascript
if (condición) {
    // bloque de código a ejecutar si la condición es verdadera
} else {
    // bloque de código a ejecutar si la condición es falsa
}
```

Ejemplo:

```javascript
let hora = 20;

if (hora < 12) {
    console.log("Buenos días");
} else {
    console.log("Buenas tardes");
}
```
En este ejemplo, si la variable hora es menor a 12, se imprimirá en la consola "Buenos días". De lo contrario, se imprimirá "Buenas tardes".

### 3. **else if** declaración

Permite encadenar múltiples condiciones a comprobar.

Sintaxis:

```javascript
if (condición1) {
    // bloque de código a ejecutar si la condición1 es verdadera
} else if (condición2) {
    // bloque de código a ejecutar si la condición2 es verdadera
} else {
    // bloque de código a ejecutar si ninguna de las condiciones anteriores es verdadera
}
```

Ejemplo:

```javascript
let nota = 85;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Bueno");
} else {
    console.log("Necesitas mejorar");
}
```
En este ejemplo, si la variable `nota` es mayor o igual a 90, se imprimirá en la consola "Excelente". Si `nota` es mayor o igual a 70 pero menor a 90, se imprimirá "Bueno". De lo contrario, se imprimirá "Necesitas mejorar".
    
### 4. **Operador ternario**

Ofrece una forma concisa de expresar una estructura if...else.
    
Sintaxis:

```javascript
condición ? valorSiVerdadero : valorSiFalso;
```

Ejemplo:

```javascript
let esAdulto = (edad >= 18) ? "Sí, es adulto" : "No, es menor de edad";
console.log(esAdulto);
```

En este ejemplo, si la variable `edad` es mayor o igual a 18, se asignará "Sí, es adulto" a la variable `esAdulto`. De lo contrario, se asignará "No, es menor de edad".


## Ejemplos Adicionales

### 1. **Anidación de `if` y `else`**

```javascript
let temperatura = 30;

if (temperatura > 30) {
    console.log("Hace calor");
} else {
    if (temperatura < 10) {
        console.log("Hace frío");
    } else {
        console.log("El clima es templado");
    }
}
```

En este ejemplo, se verifican múltiples condiciones de temperatura utilizando estructuras condicionales anidadas.
    
### 2. **Uso de múltiples `else if`**

```javascript
let dia = "martes";

if (dia === "lunes") {
    console.log("Hoy es lunes");
} else if (dia === "martes") {
    console.log("Hoy es martes");
} else if (dia === "miércoles") {
    console.log("Hoy es miércoles");
} else {
    console.log("Hoy no es ni lunes, ni martes, ni miércoles");
}
```
En este ejemplo, se utilizan múltiples `else if` para verificar el valor de la variable `dia` y ejecutar el bloque de código correspondiente.
    
## Conclusión

Las estructuras condicionales en JavaScript son fundamentales para controlar el flujo del programa basándose en condiciones específicas. Usar `if`, `if...else`, `else if`, y el operador ternario permite manejar decisiones lógicas de manera eficiente y flexible en el código.