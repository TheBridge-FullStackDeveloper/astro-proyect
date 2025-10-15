---
title: Mongoose
description: ""
pubDate: '01/03/2024'
collection: nodejs
---

## ¿Qué es Mongoose?

Mongoose es una biblioteca de JavaScript que proporciona una solución basada en esquemas para modelar los datos de una aplicación en MongoDB. Actúa como un intermediario entre la base de datos y la aplicación, facilitando la interacción con MongoDB a través de un conjunto de características que permiten definir modelos de datos, realizar validaciones, y realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de manera eficiente.

## Características Principales

1. **Modelado de Datos**: Permite definir modelos de datos utilizando esquemas que estructuran la forma de los documentos en la base de datos.
2. **Validación**: Mongoose proporciona capacidades de validación de datos en el lado del servidor.
3. **Middleware**: Soporta middleware, lo que permite definir funciones que se ejecutan en ciertos puntos del ciclo de vida de un documento.
4. **Consultas Ricas**: Ofrece un sistema de consultas que facilita la obtención de documentos basados en criterios específicos.
5. **Indexación**: Permite definir índices en campos específicos para mejorar el rendimiento de las consultas.
6. **Plugins**: Mongoose soporta la extensión de su funcionalidad a través de plugins.

## Instalación

Para instalar Mongoose, asegúrate de tener Node.js y npm instalados. Luego, ejecuta el siguiente comando en la terminal:

```bash
npm install mongoose
```

## Conexión a MongoDB

Para conectarte a una base de datos MongoDB, utiliza el siguiente código:

//no-try-code
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('No se pudo conectar a MongoDB', err));
```

## Definición de un Esquema y Modelo

Un esquema se define utilizando `mongoose.Schema`, y a partir de un esquema, se puede crear un modelo:

```javascript
const esquemaUsuario = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, min: 0 },
    email: { type: String, required: true, unique: true }
});

const Usuario = mongoose.model('Usuario', esquemaUsuario);
```

## Operaciones CRUD

### Crear un Documento

//no-try-code
```javascript
const nuevoUsuario = new Usuario({
    nombre: 'Juan',
    edad: 30,
    email: 'juan@example.com'
});

nuevoUsuario.save()
    .then(() => console.log('Usuario creado'))
    .catch(err => console.error('Error al crear el usuario', err));
```

### Leer Documentos

//no-try-code
```javascript
Usuario.find()
    .then(usuarios => console.log(usuarios))
    .catch(err => console.error('Error al obtener usuarios', err));
```

### Actualizar un Documento

//no-try-code
```javascript
Usuario.updateOne({ email: 'juan@example.com' }, { edad: 31 })
    .then(() => console.log('Usuario actualizado'))
    .catch(err => console.error('Error al actualizar el usuario', err));
```

### Eliminar un Documento

//no-try-code
```javascript
Usuario.deleteOne({ email: 'juan@example.com' })
    .then(() => console.log('Usuario eliminado'))
    .catch(err => console.error('Error al eliminar el usuario', err));
```

## Métodos

### 1. Métodos de instancia

Estos métodos se utilizan en instancias individuales de documentos. Algunos de los más comunes incluyen:

* `save()`: Guarda el documento en la base de datos. Si el documento ya existe, se actualizará. Si no, se creará uno nuevo.

//no-try-code
```javascript
const usuario = new Usuario({ nombre: 'Juan' });
usuario.save()
    .then(() => console.log('Usuario guardado'))
    .catch(err => console.error(err));
```

* `remove()`: Elimina el documento actual de la base de datos.

//no-try-code
```javascript
usuario.remove()
    .then(() => console.log('Usuario eliminado'))
    .catch(err => console.error(err));
```

* `update()`: Actualiza los campos del documento actual.

//no-try-code
```javascript
usuario.update({ edad: 31 })
    .then(() => console.log('Usuario actualizado'))
    .catch(err => console.error(err));
```

### 2. Métodos de Modelo

Estos métodos se utilizan en el modelo y afectan a múltiples documentos. Aquí hay algunos ejemplos:

* `create()`: Crea y guarda uno o más documentos en la base de datos.

//no-try-code
```javascript
Usuario.create([{ nombre: 'Ana' }, { nombre: 'Luis' }])
    .then(() => console.log('Usuarios creados'))
    .catch(err => console.error(err));
```

* `find()`: Busca documentos que coincidan con los criterios dados.

//no-try-code
```javascript
Usuario.find({ nombre: 'Juan' })
    .then(usuarios => console.log(usuarios))
    .catch(err => console.error(err));
```

* `findOne()`: Busca el primer documento que coincida con los criterios dados.

//no-try-code
```javascript
Usuario.findOne({ email: 'juan@example.com' })
    .then(usuario => console.log(usuario))
    .catch(err => console.error(err));
```

* `updateOne()`: Actualiza el primer documento que coincide con los criterios dados.

//no-try-code
```javascript
Usuario.updateOne({ nombre: 'Juan' }, { edad: 31 })
    .then(() => console.log('Usuario actualizado'))
    .catch(err => console.error(err));
```

* `deleteOne()`: Elimina el primer documento que coincide con los criterios dados.

//no-try-code
```javascript
Usuario.deleteOne({ nombre: 'Juan' })
    .then(() => console.log('Usuario eliminado'))
    .catch(err => console.error(err));
```

### 3. Métodos de Consulta

Mongoose proporciona un conjunto robusto de métodos de consulta que permiten realizar operaciones avanzadas de búsqueda y manipulación de datos:

* `sort()`: Ordena los resultados de la consulta.

//no-try-code
```javascript
Usuario.find().sort({ edad: -1 }) // Ordenar por edad descendente
    .then(usuarios => console.log(usuarios))
    .catch(err => console.error(err));
```

* `limit()`: Limita el número de documentos devueltos.

//no-try-code
```javascript
Usuario.find().limit(5)
    .then(usuarios => console.log(usuarios))
    .catch(err => console.error(err));
```

* `skip()`: Omite un número específico de documentos en el resultado.

//no-try-code
```javascript
Usuario.find().skip(10).limit(5) // Salta los primeros 10
    .then(usuarios => console.log(usuarios))
    .catch(err => console.error(err));
```

* `countDocuments()`: Devuelve el número de documentos que coinciden con la consulta.

//no-try-code
```javascript
Usuario.countDocuments({ edad: { $gte: 18 } })
    .then(count => console.log(`Hay ${count} usuarios mayores de 18`))
    .catch(err => console.error(err));
```

* `aggregate()`: Permite realizar operaciones de agregación en los documentos.

//no-try-code
```javascript
Usuario.aggregate([
    { $group: { _id: "$edad", total: { $sum: 1 } } } // Agrupar por edad
])
.then(result => console.log(result))
.catch(err => console.error(err));
```

### 4. Middleware

Mongoose permite utilizar middleware para realizar acciones antes o después de ciertas operaciones. Los tipos de middleware incluyen:

* `pre`: Se ejecuta antes de una operación (por ejemplo, `save`, `remove`).

//no-try-code
```javascript
esquemaUsuario.pre('save', function(next) {
    console.log('Antes de guardar el usuario');
    next();
});
```

* `post`: Se ejecuta después de una operación.

//no-try-code
```javascript
esquemaUsuario.post('save', function(doc) {
    console.log(`Usuario guardado: ${doc}`);
});
```

## Conclusión

Mongoose ofrece una amplia variedad de métodos para trabajar con datos en MongoDB, proporcionando una forma estructurada y fácil de manejar operaciones CRUD. La combinación de métodos de instancia, de modelo y de consulta, junto con las capacidades de middleware, hace de Mongoose una herramienta poderosa para desarrolladores que trabajan con aplicaciones basadas en Node.js.

## Recursos Adicionales

* <a href="https://mongoosejs.com/docs/guide.html" target="_blank">Documentación oficial de Mongoose</a>