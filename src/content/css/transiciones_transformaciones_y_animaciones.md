---
title: Transiciones, transformaciones y animaciones 
description: ""
pubDate: '09/03/2024'
collection: css
---

Las animaciones en CSS permiten agregar movimiento y dinamismo a los elementos de una web sin necesidad de JavaScript.  
Usadas correctamente, mejoran la experiencia del usuario y hacen las interfaces más atractivas y fluidas.

## Transiciones

Una **transición** define cómo cambia una propiedad de un estado a otro de forma gradual.

**Sintaxis básica:**

```css
.elemento {
  transition: propiedad duración tipo_de_tiempo retardo;
}
```

**Ejemplo:**
```css
.boton {
  background-color: #4a90e2;
  color: white;
  transition: background-color 0.3s ease;
}

.boton:hover {
  background-color: #357ab7;
}
```

Al pasar el ratón sobre el botón, el color cambia suavemente en 0.3 segundos.

**Propiedades más comunes que pueden animarse:**
- `color`
- `background-color`
- `opacity`
- `transform`
- `width`, `height`
- `margin`, `padding`
- `border`, `border-radius`

**Parámetros de transition**
- `transition-property`: qué propiedad se anima.
- `transition-duration`: tiempo total del efecto (ej. `0.5s`).
- `transition-timing-function`: ritmo del cambio (ej. `ease`, `linear`, `ease-in-out`).
- `transition-delay`: retraso antes de comenzar (ej. `0.2s`).

**Ejemplo con varios efectos:**
```css
.caja {
  width: 100px;
  height: 100px;
  background: coral;
  transition: width 0.4s ease-in-out, background 0.4s;
}

.caja:hover {
  width: 200px;
  background: tomato;
}
```

## Transformaciones

La propiedad `transform` modifica la posición o forma de un elemento en el espacio sin alterar su flujo en el documento.

**Funciones más utilizadas:**
- `translate(x, y)` → mueve el elemento.
- `scale(x, y)` → cambia su tamaño.
- `rotate(deg)` → rota en grados.
- `skew(x, y)` → inclina el elemento.
- `matrix()` → combina transformaciones (avanzado).

**Ejemplo:**
```css
.caja {
  width: 100px;
  height: 100px;
  background: lightseagreen;
  transition: transform 0.3s ease;
}

.caja:hover {
  transform: scale(1.2) rotate(10deg);
}
```

También puedes combinar varias funciones:
```css
transform: translateX(50px) scale(1.1) rotate(5deg);
```

**Importante:** usa `transform` en lugar de `top`, `left` o `margin` para animaciones, ya que es mucho más eficiente y utiliza la GPU.

## Animaciones con @keyframes

Las animaciones permiten definir una secuencia de cambios controlados a lo largo del tiempo mediante **fotogramas clave** (`@keyframes`).

**Sintaxis básica:**
```css
@keyframes nombre_animacion {
  from { propiedad: valor_inicial; }
  to { propiedad: valor_final; }
}
```

O con porcentajes:
```css
@keyframes mover {
  0% { transform: translateX(0); }
  50% { transform: translateX(50px); }
  100% { transform: translateX(0); }
}
```

**Uso en un elemento:**
```css
.elemento {
  animation-name: mover;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
```

Esto crea un movimiento horizontal continuo.

## Parámetros de animation

- `animation-name`: nombre del bloque `@keyframes`.
- `animation-duration`: duración total de la animación.
- `animation-timing-function`: curva de aceleración (`linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier()`).
- `animation-delay`: retraso antes de empezar.
- `animation-iteration-count`: número de repeticiones (`1`, `infinite`).
- `animation-direction`: dirección (`normal`, `reverse`, `alternate`, `alternate-reverse`).
- `animation-fill-mode`: comportamiento antes/después de la animación (`none`, `forwards`, `backwards`, `both`).
- `animation-play-state`: permite pausar o reanudar (`running`, `paused`).

**Ejemplo completo:**
```css
@keyframes girar {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.logo {
  animation: girar 3s linear infinite;
}
```

Esto hace que un logotipo gire constantemente.

## Combinar varias animaciones

```css
@keyframes subir {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes parpadear {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.elemento {
  animation:
    subir 0.8s ease-out,
    parpadear 1.5s linear infinite;
}
```

La primera animación ejecuta un movimiento de entrada y la segunda parpadea indefinidamente.

## Control con clases dinámicas

Las animaciones pueden activarse o detenerse añadiendo o quitando clases mediante JavaScript.

html:
```html
<button onclick="document.querySelector('.caja').classList.toggle('fade-in')">Animar</button>
<div class="caja"></div>
```

css:
```css
@keyframes aparecer {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: aparecer 0.5s forwards;
}
```

## Buenas prácticas

- Usa `transform` y `opacity` para animaciones suaves (GPU-friendly).  
- Evita animar `width`, `height` o `top` con frecuencia: son costosas para el renderizado.  
- Define una duración coherente: entre 0.2s y 1s suele ser suficiente.  
- Evita abusar de animaciones infinitas que distraigan al usuario.  
- Usa `will-change: transform` o `opacity` para mejorar el rendimiento si el elemento se animará frecuentemente.  
- Respeta la accesibilidad: evita parpadeos rápidos (pueden afectar a usuarios con epilepsia fotosensible).

**Ejemplo de optimización:**
```css
.boton {
  will-change: transform;
  transition: transform 0.2s ease;
}
```
