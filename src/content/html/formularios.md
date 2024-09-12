---
title: Formularios en HTML
---

Los formularios en HTML permiten a los usuarios enviar datos a un servidor. Están formados por una serie de controles como campos de texto, botones, casillas de verificación, entre otros.

## Estructura básica de un formulario

```html
<form action="/enviar-datos" method="POST">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>

    <label for="email">Correo Electrónico:</label>
    <input type="email" id="email" name="email" required>

    <input type="submit" value="Enviar">
</form>
```

### Atributos importantes en la etiqueta *`<form>`*
1. action: La URL donde se enviarán los datos.
2. method: El método de envío, que puede ser GET o POST.
3. id, name: Sirven para identificar el formulario o los elementos dentro de él.


## Controles de formulario más comunes
- `<input type="text">`: Campo de texto de una sola línea.
- `<input type="email">`: Campo para ingresar correos electrónicos.
- `<input type="password">`: Campo para ingresar contraseñas.
- `<input type="checkbox">`: Casilla de verificación.
- `<input type="radio">`: Botón de opción.
- `<textarea>`: Campo de texto de varias líneas.
- `<select>`: Menú desplegable.

```html
<label for="opciones">Opciones:</label>
<select id="opciones" name="opciones">
    <option value="1">Opción 1</option>
    <option value="2">Opción 2</option>
</select>
```

## Botones en formularios

```html
<button type="submit">Enviar</button>
<button type="reset">Restablecer</button>
```

## Validación de formularios

HTML5 permite la validación básica de formularios utilizando atributos como *required*, *min*, *max*, y *pattern*.

```html
<input type="text" name="nombre" required pattern="[A-Za-z]+">
```

### Conclusión

Los formularios son fundamentales para la interacción con el usuario y permiten recoger información que puede ser procesada en el servidor. Ofrecen una amplia gama de controles y métodos de validación.