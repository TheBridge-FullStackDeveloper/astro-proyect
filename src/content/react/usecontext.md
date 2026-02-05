---
title: useContext
description: ""
pubDate: '06/03/2025'
collection: react
---

`useContext` permite compartir **estado global** entre componentes sin necesidad de pasar props manualmente.

Es la solución nativa de React para evitar el **prop drilling**.


## ¿Qué es prop drilling?

Ocurre cuando una prop debe pasar por muchos componentes intermedios.

```js
<App>
  <Layout>
    <Header user={user} />
  </Layout>
</App>
```

useContext evita este problema.


## Crear un contexto

```js
import { createContext } from "react";

export const UserContext = createContext();
```


## Proveer el contexto

```js
<UserContext.Provider value={{ user }}>
  <App />
</UserContext.Provider>
```

El `Provider` envuelve los componentes que necesitan acceso.


## Consumir el contexto

```js
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return <p>{user.name}</p>;
};
```


## Casos de uso habituales
- Usuario autenticado
- Tema (dark / light)
- Idioma
- Configuración global

## Buenas prácticas

- No usar context para todo
- Separar contextos por responsabilidad
- Evitar contextos demasiado grandes
