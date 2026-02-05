---
title: Hooks
description: ""
pubDate: '05/03/2025'
collection: react
---

Los **hooks** permiten usar funcionalidades de React (estado, ciclo de vida, contexto…) en componentes funcionales.

Antes de los hooks, estas funcionalidades solo existían en componentes de clase.


## Reglas de los hooks

Los hooks deben cumplir estas reglas:
- Solo se usan en componentes o custom hooks
- No se usan dentro de condicionales
- No se usan dentro de bucles

Incorrecto:
```js
if (condition) {
  useState(0);
}
```


## Hooks más comunes
- useState
- useEffect
- useContext
- useRef

Cada hook resuelve un problema específico.


## ¿Por qué usar hooks?

- Código más simple
- Menos duplicación
- Mejor reutilización
- Componentes más pequeños


## Ejemplo combinando hooks

```js
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicks: ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Click
    </button>
  );
}
```


## Hooks nativos vs custom

- **Nativos**: vienen con React
- **Custom**: creados por el desarrollador

Los custom hooks permiten reutilizar lógica.
