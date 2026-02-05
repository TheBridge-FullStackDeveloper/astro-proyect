---
title: Arquitectura de componentes
description: ""
pubDate: '01/04/2025'
collection: react
---

Una buena arquitectura de componentes facilita el mantenimiento y escalabilidad de una aplicación React.


## Componentes presentacionales y contenedores

- **Presentacionales**: solo UI
- **Contenedores**: lógica y datos


## Ejemplo

```js
function UserView({ user }) {
  return <p>{user.name}</p>;
}
```

```js
function UserContainer() {
  const user = { name: "Sori" };
  return <UserView user={user} />;
}
```


## Organización de carpetas

```markdown
components/
├── User/
│ ├── UserView.jsx
│ └── UserContainer.jsx
```

## Reglas básicas
- Un componente = una responsabilidad
- Evitar componentes demasiado grandes
- Reutilizar antes de duplicar