# Simple Twitter API

Este ejercicio consiste en crear una API que simule el funcionamiento de una aplicación similar a Twitter.

## Entidades

- User:
  - id
  - email
  - password
  - created_at
- Tweet:
  - id
  - user
  - text
  - image (opcional)
  - created_at
  
## Endpoints

- **POST /user**  Registro de usuario ✅
- **GET /user/:id** Devuelve información de usuario ✅
- **POST /login**  Login de usuario (devuelve token) ✅
- **POST /**  Permite crear un tweet (necesita cabecera con token) ✅
- **GET /**  Lista todos los tweets ✅
- **GET /tweet/:id**  Deveuelve un tweet ✅
- **DELETE /tweet/:id**  Borra un tweet sólo si eres quien lo creó ✅
