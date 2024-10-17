---
title: Tablas en HTML
description: "esta es la descripcion a tablas en HTML"
pubDate: '01/12/2024'
collection: html
---

Las tablas en HTML permiten organizar datos en filas y columnas. Se utilizan en casos donde se necesita presentar información tabular como estadísticas, datos financieros, entre otros.

## Estructura básica de una tabla

```html
<table>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>País</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ana</td>
            <td>25</td>
            <td>España</td>
        </tr>
        <tr>
            <td>Juan</td>
            <td>30</td>
            <td>México</td>
        </tr>
    </tbody>
</table>
```

### Descripción de las etiquetas principales

- `<table>`: Define el contenedor de la tabla.
- `<thead>`: Define el encabezado de la tabla.
- `<tr>`: Representa una fila.
- `<th>`: Define una celda de encabezado.
- `<td>`: Define una celda de datos.
- `<tbody>`: Contiene las filas del cuerpo principal de la tabla.

## Combinar celdas

- rowspan: Combina celdas en una columna.
- colspan: Combina celdas en una fila.

```html
<td colspan="2">Esta celda abarca dos columnas</td>
```

## Tablas con bordes

Para agregar bordes a una tabla, puedes usar CSS:

```html
<style>
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
</style>
```

## Conclusión

Las tablas son una herramienta útil para mostrar datos organizados. Aunque su uso ha disminuido en la maquetación de páginas, sigue siendo relevante para presentar información estructurada.