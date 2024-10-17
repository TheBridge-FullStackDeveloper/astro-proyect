---
title: Jest
description: "esta es la descripcion de Jest"
pubDate: '01/03/2024'
collection: nodejs
---

## ¿Qué es Jest?

<a href="https://jestjs.io/" target="_blank">Jest</a> es un framework de pruebas en JavaScript desarrollado por Facebook. Es ampliamente utilizado para probar aplicaciones escritas en **JavaScript** y **React**. Jest es ideal para realizar pruebas unitarias, pruebas de integración, y pruebas de instantáneas (snapshots).

## Características Principales

- **Sencillo**: Configuración fácil, con una API intuitiva.
- **Aislado**: Los tests son ejecutados en entornos separados para evitar interferencias.
- **Cobertura de Código**: Genera informes de cobertura sin configuración adicional.
- **Pruebas Asíncronas**: Soporta promesas, async/await y callbacks.
- **Mocks**: Mocking de módulos, funciones y temporizadores.
- **Snapshots**: Verifica que la interfaz de usuario o los datos de salida no cambien de forma inesperada.

## Instalación

Puedes instalar Jest fácilmente a través de npm o yarn.

```bash
# usando npm
npm install --save-dev jest

# usando yarn
yarn add --dev jest
```

## Configuración

Por defecto, Jest no necesita configuración. Si quieres personalizar la configuración, puedes añadir un archivo `jest.config.js` o configurarlo en el campo `jest` en `package.json`.

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Si ejecutas `npm test`, Jest buscará archivos con las siguientes extensiones para ejecutar las pruebas:

* `.js`
* `.jsx`
* `.ts`
* `.tsx`

## Primer Test

Crea un archivo de prueba, por ejemplo `sum.test.js`:


```javascript
const sum = (a, b) => a + b;

test('suma de 1 + 2 debe ser igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Luego ejecuta:

```bash
npm test
```

### Explicación

* **test(nombre, callback)**: Define un caso de prueba. `nombre` describe la prueba, y el `callback` contiene la lógica de la prueba.
* **expect(valor)**: Es una aserción. Se espera que el valor cumpla con una condición, que en este caso es `.toBe(3)`.

## Pruebas Asíncronas

Jest maneja pruebas asíncronas fácilmente con promesas o `async/await`.

### Usando Promesas

```javascript
test('el fetch de datos debe tener un nombre de usuario', () => {
  return fetchUser().then(data => {
    expect(data.username).toBeDefined();
  });
});
```

### Usando `async/await`

```javascript
test('el fetch de datos debe tener un nombre de usuario', async () => {
  const data = await fetchUser();
  expect(data.username).toBeDefined();
});
```

## Mocking en Jest

Jest permite hacer "mock" de funciones, módulos y temporizadores. Esto es útil para aislar la lógica de las pruebas.

### Mock de Funciones

```javascript
const myMock = jest.fn();
myMock('foo');

expect(myMock).toHaveBeenCalledWith('foo');
```

### Mock de Módulos

Si deseas simular un módulo completo:

```javascript
jest.mock('./miModulo');
const miModulo = require('./miModulo');

miModulo.miFuncion.mockReturnValue('valor simulado');
```

## Pruebas de Instantáneas (Snapshots)

Las pruebas de instantáneas permiten capturar la salida de una función o componente y compararla con ejecuciones futuras.

### Creación de un Snapshot

```javascript
test('componente renderiza correctamente', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
```
Esto generará un archivo de snapshot que contendrá la representación de la interfaz en ese momento. Si la salida cambia en futuras ejecuciones, Jest te advertirá.

## Cobertura de Código

Para generar un informe de cobertura de código:

```bash
jest --coverage
```
Esto generará un informe detallado en la consola y también en un formato HTML dentro de la carpeta `coverage`.

## Configuración Avanzada

### Configuración del archivo jest.config.js

```javascript
module.exports = {
  verbose: true,
  collectCoverage: true,
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
};
```

### Otros comandos útiles

* `jest --watch`: Ejecuta pruebas continuamente mientras desarrollas.
* `jest --bail`: Detiene la ejecución en la primera prueba fallida.
* `jest --runInBand`: Ejecuta las pruebas en serie en lugar de en paralelo.

## Conclusión

Jest es una herramienta poderosa y versátil para realizar pruebas en proyectos de JavaScript. Con características como pruebas de instantáneas, cobertura de código y soporte para pruebas asíncronas, es una excelente opción para proyectos grandes y pequeños.

## Recursos adicionales

* <a href="https://jestjs.io/docs/getting-started" target="_blank">Documentación Oficial de Jest</a>
* <a href="https://jestjs.io/docs/mock-functions" target="_blank">Guía de Mocking en Jest</a>