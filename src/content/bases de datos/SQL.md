---
title: SQL
---

## ¿Qué es SQL?

**SQL** (Structured Query Language) es un lenguaje de consulta estructurado que se utiliza para gestionar y manipular bases de datos relacionales. Permite realizar tareas como la consulta, inserción, actualización y eliminación de datos, así como la creación y gestión de esquemas de bases de datos.

## Conceptos Clave

### 1. **Base de Datos Relacional**
Una base de datos relacional almacena los datos en tablas compuestas por filas y columnas. Cada tabla está relacionada con otras mediante **claves**.

### 2. **Tablas**
Las tablas son el componente principal de las bases de datos relacionales. Una tabla se compone de:
- **Filas**: Cada fila representa un registro.
- **Columnas**: Cada columna representa un atributo o campo del registro.

### 3. **Llave Primaria (Primary Key)**
Es un campo (o combinación de campos) que identifica de manera única cada registro en una tabla. No puede haber valores duplicados o nulos en una llave primaria.

### 4. **Llave Foránea (Foreign Key)**
Es un campo que crea una relación entre dos tablas. Apunta a la llave primaria de otra tabla, creando una conexión entre los datos.

## Operaciones Básicas en SQL

### 1. **SELECT**: Consultar Datos

La instrucción `SELECT` se utiliza para recuperar datos de una tabla.

```sql
SELECT columna1, columna2
FROM tabla
WHERE condición;
```

**Ejemplo**:

```sql
SELECT nombre, edad
FROM empleados
WHERE edad > 30;
```

### 2. **INSERT INTO**: Insertar Datos

La instrucción `INSERT INTO` se utiliza para agregar nuevos registros en una tabla.

```sql
INSERT INTO tabla (columna1, columna2)
VALUES (valor1, valor2);
```

**Ejemplo**:
```sql
INSERT INTO empleados (nombre, edad)
VALUES ('Juan', 35);
```

### 3. **UPDATE**: Actualizar Datos

La instrucción `UPDATE` modifica registros existentes en una tabla.

```sql
UPDATE tabla
SET columna1 = valor1
WHERE condición;
```

**Ejemplo**:

```sql
UPDATE empleados
SET edad = 36
WHERE nombre = 'Juan';
```

### 4. **DELETE**: Eliminar Datos

La instrucción `DELETE` elimina registros de una tabla.

```sql
DELETE FROM tabla
WHERE condición;
```

**Ejemplo**:

```sql
DELETE FROM empleados
WHERE nombre = 'Juan';
```

## Funciones de Agregación

SQL también incluye funciones para realizar operaciones sobre grupos de registros. Algunas funciones comunes son:

* `COUNT()`: Cuenta el número de filas.
* `SUM()`: Calcula la suma de valores numéricos.
* `AVG()`: Calcula el promedio.
* `MAX()`: Devuelve el valor máximo.
* `MIN()`: Devuelve el valor mínimo.

**Ejemplo**:

```sql
SELECT COUNT(*), AVG(edad)
FROM empleados;
```

## Joins: Unir Tablas

Los **joins** se utilizan para combinar filas de dos o más tablas, basándose en una relación entre ellas.

### 1. **INNER JOIN**

Devuelve las filas que tienen coincidencias en ambas tablas.

```sql
SELECT columnas
FROM tabla1
INNER JOIN tabla2 ON tabla1.columna = tabla2.columna;
```

**Ejemplo**:

```sql
SELECT empleados.nombre, departamentos.nombre
FROM empleados
INNER JOIN departamentos ON empleados.departamento_id = departamentos.id;
```

### 2. **LEFT JOIN**

Devuelve todas las filas de la tabla izquierda y las coincidencias de la tabla derecha. Si no hay coincidencias, los resultados de la tabla derecha serán `NULL`.

```sql
SELECT columnas
FROM tabla1
LEFT JOIN tabla2 ON tabla1.columna = tabla2.columna;
```

### 3. **RIGHT JOIN**

Es el opuesto de `LEFT JOIN`. Devuelve todas las filas de la tabla derecha y las coincidencias de la tabla izquierda.

### 4. **FULL OUTER JOIN**

Devuelve todas las filas cuando hay coincidencias en cualquiera de las tablas o en ambas.

```sql
SELECT columnas
FROM tabla1
FULL OUTER JOIN tabla2 ON tabla1.columna = tabla2.columna;
```

## Creación y Gestión de Tablas

### 1. **CREATE TABLE**: Crear una tabla

```sql
CREATE TABLE tabla (
    columna1 tipo_dato restricción,
    columna2 tipo_dato restricción,
    ...
);
```

**Ejemplo**:

```sql
CREATE TABLE empleados (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    edad INT,
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
);
```

### 2. **ALTER TABLE**: Modificar una Tabla

Se utiliza para añadir, modificar o eliminar columnas en una tabla existente.

* Añadir una columna:

```sql
ALTER TABLE tabla
ADD columna tipo_dato;
```

* Modificar una columna:

```sql
ALTER TABLE tabla
MODIFY columna tipo_dato;
```

* Eliminar una columna:

```sql
ALTER TABLE tabla
DROP COLUMN columna;
```

### 3. **DROP TABLE**: Eliminar una Tabla

Este comando elimina una tabla y todos sus datos.


```sql
DROP TABLE tabla;
```

## Índices

Un índice mejora la velocidad de las consultas a la base de datos. Los índices pueden crearse en una o varias columnas.

```sql
CREATE INDEX nombre_indice
ON tabla (columna);
```

**Ejemplo**:

```sql
CREATE INDEX idx_nombre
ON empleados (nombre);
```

## Cláusulas Útiles

### 1. **GROUP BY**

Agrupa filas que tienen los mismos valores en columnas especificadas.

```sql
SELECT columna, COUNT(*)
FROM tabla
GROUP BY columna;
```

**Ejemplo**:

```sql
SELECT departamento_id, COUNT(*)
FROM empleados
GROUP BY departamento_id;
```

### 2. **ORDER BY**

Ordena los resultados de la consulta en un orden específico, ya sea ascendente (`ASC`) o descendente (`DESC`).

```sql
SELECT columna1, columna2
FROM tabla
ORDER BY columna1 ASC;
```

**Ejemplo**:

```sql
SELECT nombre, edad
FROM empleados
ORDER BY edad DESC;
```

### 3. **HAVING**

Filtra los grupos creados por `GROUP BY`.

```sql
SELECT columna, COUNT(*)
FROM tabla
GROUP BY columna
HAVING COUNT(*) > valor;
```

**Ejemplo**:

```sql
SELECT departamento_id, COUNT(*)
FROM empleados
GROUP BY departamento_id
HAVING COUNT(*) > 5;
```

## Conclusión

SQL es una herramienta poderosa para gestionar bases de datos relacionales. Permite realizar una gran variedad de operaciones, desde la creación de tablas hasta consultas complejas que involucran múltiples tablas. Dominar SQL es esencial para trabajar con grandes volúmenes de datos de manera eficiente.