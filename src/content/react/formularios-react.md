---
title: Control de formularios
description: ""
pubDate: '11/03/2025'
collection: react
---

Los formularios son una parte fundamental de cualquier aplicación web.  
En React, los formularios se gestionan normalmente mediante **inputs controlados**.


## Inputs controlados

Un input controlado es aquel cuyo valor depende del **estado**.

```js
const [name, setName] = useState("");
```

```js
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

React controla en todo momento el valor del input.


## Manejo de formularios completos

```js
function Form() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
}
```


## Validaciones básicas

```js
if (!email.includes("@")) {
  alert("Email inválido");
}
```


## Buenas prácticas
- Usar inputs controlados
- Prevenir el submit por defecto
- Validar antes de enviar
