# API de una lista de súperheroe
<img src='image/heroes.png' alt="Heroes" width="230" height="190">

### Autor: Marianny Márquez
### Prográmate Academy
<img src='image/programate.png' alt='Logo Prográmate' width="180" height="70">

## Descripción

Este proyecto está pensado para realizar una lista de súperheroes con su súperpoder, nivel y nombre del mismo, utilizando la base de datos de MongoDB Atlas.

## Funcionalidades
- Obtener y actualizar los súperheroes.
- Obtener tarsúperheroeseas por ID.
- Crear nuevos súperheroes.
- Eliminar un súperheroes.

## Tecnologías utilizadas
- JavaScript.
- Node.
- Expresss.
- Nodemon.
- MongoDB y Mongoose.

## Instalación
1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Instala las dependencias necesarias para poder usar la API:
    npm i express mongoose cors nodemon

## Uso
1. Inicia la aplicación, se deben abrir dos termianles
node index.js ó npm run dev
2. Accede a la ruta http://localhost:3005/api/heroes y así podrás consumir la API desde tu servidor local.

Puedes acceder a los endpoints desde Postman y de esta manera consumir la Api desde allí:

1. http://localhost:3005/api/heroes -Obtener todos los súperheroes-
2. http://localhost:3005/api/heroes/'id' -Obtener los súperheroes por ID-
3. http://localhost:3005/api/heroes/delete/'id' -Eliminar súperheroes-
4. http://localhost:3005/api/heroes'id' -Editar/actualizar los súperheroes y sus características-
5. http://localhost:3005/api/heroes/create -Crear nuevas súperheroes-

Nota: Para crear y actualizar tareas debes hacerlo con el siguiente formato en JSON

``` 

{
    "task" : "Asignarle género a los libros",
    "task_responsable" : "Pepito Perez",
    "deadline" : "09-30-2023",
    "status" : "64a600bda2472a22f78cf5b4",
    "update" : "Falta enumerar todos los libros"
}

```

