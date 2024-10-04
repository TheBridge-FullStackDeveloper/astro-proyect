---
title: addEventListener
---

El método *addEventListener* en JavaScript se utiliza para asociar un evento a un elemento específico del DOM (Document Object Model). Este método permite que una función (llamada "event listener" o "manejador de eventos") sea ejecutada cada vez que ocurre un evento particular en ese elemento.

### HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de addEventListener</title>
</head>
<body>
  <button id="miBoton">Haz clic aquí</button>

  <script>
    /* Obtener referencia al botón por su ID*/
    const boton = document.getElementById('miBoton');

    /* Definir la función que se ejecutará cuando se haga clic en el botón*/
    function handleClick() {
      alert('¡Has hecho clic en el botón!');
    }

    /* Agregar un event listener al botón que escuche el evento 'click' y llame a la función handleClick*/
    boton.addEventListener('click', handleClick);
  </script>
</body>
</html>
```

### Explicación del código:

1. **HTML**: En el archivo HTML, tienes un botón con el ID "miBoton".
2. **JavaScript**:
    * `document.getElementById('miBoton')`: Esto selecciona el botón del DOM y lo almacena en la variable boton.
    * `function handleClick() { ... }`: Define una función handleClick que muestra un mensaje de alerta cuando se llama.
    * `boton.addEventListener('click', handleClick)`: Aquí es donde ocurre la magia. Este código agrega un event listener al botón (*`boton`*). Está configurado para escuchar el evento `'click'`, lo que significa que la función *`handleClick`* será invocada cada vez que alguien haga clic en el botón.

### Funcionamiento:

Cuando un usuario visita la página y hace clic en el botón "Haz clic aquí", el navegador ejecutará la función *`handleClick`*. En este caso, simplemente muestra una alerta, pero puedes hacer cualquier otra cosa dentro de esa función, como cambiar el contenido de la página, enviar datos al servidor, etc.

El método *`addEventListener`* es flexible y puede ser utilizado para muchos otros eventos como algunos de los siguientes:

1. Eventos de ratón:
    * `click`: Se activa cuando se hace clic en el elemento.
    * `dblclick`: Se activa cuando se hace doble clic en el elemento.
    * `mouseover`: Se activa cuando el puntero del ratón se mueve sobre el elemento.
    * `mouseout`: Se activa cuando el puntero del ratón sale del elemento.
    * `mousedown`: Se activa cuando se presiona un botón del ratón mientras el puntero está sobre el elemento.
    * `mouseup`: Se activa cuando se suelta un botón del ratón que previamente estaba presionado sobre el elemento.

2. Eventos de teclado:
    * `keydown`: Se activa cuando se presiona una tecla.
    * `keypress`: Se activa cuando se presiona una tecla que genera un carácter.
    * `keyup`: Se activa cuando se suelta una tecla que estaba previamente presionada.

3. Eventos de formulario:
    * `submit`: Se activa cuando se envía un formulario.
    * `reset`: Se activa cuando se restablece un formulario.

4. Eventos de ventana:
    * `load`: Se activa cuando se ha cargado completamente la ventana.
    * `resize`: Se activa cuando se cambia el tamaño de la ventana del navegador.
    * `scroll`: Se activa cuando se desplaza la barra de desplazamiento de la ventana.

5. Otros eventos comunes:
    * `focus`: Se activa cuando el elemento recibe el foco.
    * `blur`: Se activa cuando el elemento pierde el foco.
    * `change`: Se activa cuando el valor de un elemento cambia, como en los campos de entrada (input) o select.

Estos son solo algunos ejemplos de eventos que puedes manejar con *`addEventListener`*. Puedes utilizar este método para una amplia variedad de eventos en los elementos del DOM, lo que te permite crear interacciones dinámicas y responder a las acciones del usuario de manera efectiva en tus aplicaciones web.