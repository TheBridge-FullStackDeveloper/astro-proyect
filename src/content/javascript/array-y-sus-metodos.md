---
title: Array y sus métodos
---

Un array en JavaScript es una estructura de datos utilizada para almacenar una colección de elementos. Estos elementos pueden ser de cualquier tipo de datos, como números, cadenas, objetos u otros arrays. Los arrays en JavaScript son dinámicos, lo que significa que pueden cambiar de tamaño y pueden contener elementos de diferentes tipos. Los elementos en un array están indexados numéricamente y el índice comienza desde 0.

## Creación de un Array

Para crear un array en JavaScript, puedes usar la sintaxis de corchetes [] o el constructor Array.

```javascript
/* Usando corchetes */
let numeros = [1, 2, 3, 4, 5];

/* Usando el constructor Array */
let frutas = new Array("Manzana", "Banana", "Cereza");
```

## Métodos de Arrays

### Métodos de Adición y Eliminación

#### 1. **push**
Agrega uno o más elementos al final del array y devuelve la nueva longitud del array

```javascript
let colores = ["rojo", "verde", "azul"];
let nuevaLongitud = colores.push("amarillo", "naranja");
console.log(colores); /* ["rojo", "verde", "azul", "amarillo", "naranja"] */
console.log(nuevaLongitud); /* 5 */
```

#### 2. **pop**

Elimina el último elemento del array y lo devuelve.

```javascript
let colores = ["rojo", "verde", "azul", "amarillo", "naranja"];
let ultimoColor = colores.pop();
console.log(colores); /* ["rojo", "verde", "azul", "amarillo"] */
console.log(ultimoColor); /* "naranja" */
```
#### 3. **shift**

Elimina el primer elemento del array y lo devuelve, ajustando el índice de los otros elementos.

```javascript
let colores = ["rojo", "verde", "azul", "amarillo"];
let primerColor = colores.shift();
console.log(colores); /* ["verde", "azul", "amarillo"] */
console.log(primerColor); /* "rojo" */
```

#### 4. **unshift**

Agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array.

```javascript
let colores = ["verde", "azul", "amarillo"];
nuevaLongitud = colores.unshift("negro", "blanco");
console.log(colores); /* ["negro", "blanco", "verde", "azul", "amarillo"] */
console.log(nuevaLongitud); /* 5 */
```

#### 5. **splice**

Cambia el contenido de un array eliminando, reemplazando o agregando elementos.

```javascript
/* Eliminar 2 elementos desde el índice 1 */
let colores = ["negro", "blanco", "verde", "azul", "amarillo"];
let eliminados = colores.splice(1, 2);
console.log(colores); /* ["negro", "azul", "amarillo"] */
console.log(eliminados); /* ["blanco", "verde"]*/

/* Agregar elementos en el índice 2 */
colores.splice(2, 0, "violeta", "cian");
console.log(colores); /* ["negro", "azul", "violeta", "cian", "amarillo"] */
```

### Métodos de Iteración

#### 6. **forEach**

Ejecuta una función proporcionada una vez por cada elemento del array.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
colores.forEach(function(color) {
    console.log(color);
});
/* Salida: negro, azul, violeta, cian, amarillo */
```

#### 7. **map**

Crea un nuevo array con los resultados de la llamada a una función aplicada a cada elemento.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
let mayusculas = colores.map(function(color) {
    return color.toUpperCase();
});
console.log(mayusculas); /* ["NEGRO", "AZUL", "VIOLETA", "CIAN", "AMARILLO"] */
```

#### 8. **filter**

Crea un nuevo array con todos los elementos que pasen la prueba implementada por la función proporcionada.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
let coloresConA = colores.filter(function(color) {
    return color.includes("a");
});
console.log(coloresConA); /* ["azul","violeta","cian","amarillo"] */
```

#### 9. **reduce**

Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.

```javascript
let colores = ["negro", "azul", "cian", "amarillo"];
let totalCaracteres = colores.reduce(function(total, color) {
    return total + color.length;
}, 0);
console.log(totalCaracteres); /* 21 */
```

#### 10. **reduceRight**

Aplica una función a un acumulador y a cada elemento del array (de derecha a izquierda) para reducirlo a un solo valor.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
let concatenacion = colores.reduceRight(function(total, color) {
    return total + color;
}, "");
console.log(concatenacion); /* "amarillocianvioletaazulnegro" */
```

### Métodos de Búsqueda y Comprobación

#### 11. **find**

Devuelve el primer elemento del array que cumpla con la función de prueba proporcionada.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
let encontrado = colores.find(function(color) {
    return color.length > 5;
});
console.log(encontrado); /* "violeta" */
```

#### 12. **findIndex**

Devuelve el índice del primer elemento del array que cumpla con la función de prueba proporcionada.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
let indiceEncontrado = colores.findIndex(function(color) {
    return color.length > 5;
});
console.log(indiceEncontrado); /* 2 */
```
#### 13. **indexOf**

Devuelve el primer índice en el que un cierto elemento puede ser encontrado en el array, o -1 si el elemento no está presente.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
let indiceAzul = colores.indexOf("azul");
console.log(indiceAzul); /* 1 */
```

#### 14. **lastIndexOf**

Devuelve el último índice en el que un cierto elemento puede ser encontrado en el array, o -1 si el elemento no está presente.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
let indiceUltimoAzul = colores.lastIndexOf("azul");
console.log(indiceUltimoAzul); /* 1 */
```

### 15. **includes**

Determina si un array contiene un cierto elemento, devolviendo true o false según corresponda.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
let contieneNegro = colores.includes("negro");
console.log(contieneNegro); /* true */
```

### Métodos de Transformación y Ordenación

#### 16. **concat**

Combina dos o más arrays y devuelve un nuevo array.

```javascript
let colores = ["negro", "blanco", "verde", "azul", "amarillo"];
let masColores = ["morado", "rosa"];
let todosLosColores = colores.concat(masColores);
console.log(todosLosColores); /* ["negro", "blanco", "verde", "azul", "amarillo", "morado", "rosa"] */

```
#### 17. **join**

Convierte los elementos de un array en una cadena, unidos por el separador especificado.

```javascript
let colores = ["negro", "blanco", "verde", "azul", "amarillo"];
let cadenaColores = colores.join(", ");
console.log(cadenaColores); /* "negro, blanco, verde, azul, amarillo" */

```
#### 18. **slice**

Devuelve una copia superficial de una porción del array en un nuevo array. El array original no se modifica.

```javascript
let colores = ["negro", "blanco", "verde", "azul", "amarillo"];
let algunosColores = colores.slice(1, 3);
console.log(algunosColores); /* ["blanco", "verde"] */
console.log(colores); /* ["negro", "blanco", "verde", "azul", "amarillo"] */
```
#### 19. **reverse**

Invierte el orden de los elementos de un array in situ.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
colores.reverse();
console.log(colores); /* ["amarillo", "cian", "violeta", "azul", "negro"] */
```

#### 20. **sort**

Ordena los elementos de un array in situ y devuelve el array.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
colores.sort();
console.log(colores); /* ["amarillo", "azul", "cian", "negro", "violeta"] */
```

#### 21. **flat**

Devuelve un nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

```javascript
let arraysAnidados = [1, [2, [3, [4]], 5]];
let arrayPlano = arraysAnidados.flat(2);
console.log(arrayPlano); /* [1, 2, 3, [4], 5] */
```

#### 22. **flatMap**

Primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en un nuevo array.

```javascript
let arrayMap = [1, 2, 3, 4];
let resultado = arrayMap.flatMap(x => [x * 2]);
console.log(resultado); /* [2, 4, 6, 8] */
```

### Otros Métodos Útiles

#### 23. **from**

Crea un nuevo array a partir de un objeto similar a un array o iterable.

```javascript
let arrayLike = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
let nuevoArray = Array.from(arrayLike);
console.log(nuevoArray); /* ['a', 'b', 'c'] */
```

#### 24. **of**

Crea una nueva instancia de array con un número variable de elementos.

```javascript
let arrayDeValores = Array.of(1, 2, 3, 4);
console.log(arrayDeValores); /* [1, 2, 3, 4] */
```

#### 25. **isArray**

Determina si el valor pasado es un array.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
console.log(Array.isArray(colores)); /* true */
console.log(Array.isArray({})); /* false */
```

#### 26. **every**

Prueba si todos los elementos en el array pasan la prueba implementada por la función proporcionada.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
let todosTienenA = colores.every(function(color) {
    return color.includes("a");
});
console.log(todosTienenA); /* false */
```

#### 27. **some**

Prueba si al menos un elemento en el array pasa la prueba implementada por la función proporcionada.

```javascript
let colores = ["negro", "azul", "violeta", "cian", "amarillo"];
let algunoTieneA = colores.some(function(color) {
    return color.includes("a");
});
console.log(algunoTieneA); /* true */
```

#### 28. **fill**

Cambia todos los elementos en un array por un valor estático, desde el índice de inicio hasta el de fin.

```javascript
let colores = ["amarillo", "azul", "cian", "negro", "violeta"];
colores.fill("gris", 1, 3);
console.log(colores); /* ["amarillo", "gris", "gris", "negro", "violeta"] */
```

