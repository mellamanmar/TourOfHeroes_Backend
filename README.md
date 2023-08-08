# Introducción a Express.js

<img src="img/programate-academy.png" alt="Logo Programate">

## Objetivo

Vamos a desarrollar una API conectada a MongoDB, para complementar el tutorial de [Angular](https://angular.io/tutorial/tour-of-heroes) y poder tener un proyecto fullstack usando el stack MEAN

## primeros pasos
Recuerda debes tener instalado [Node.js](https://nodejs.org/en/download), despues crea y entra a la carpeta donde vas a guardar el proyecto. Una vez clones el repositorio recuerda entrar a la carpeta con

```
cd node-basic-c9
```
y instala los paquetes usando el comando:

```
npm i
```


## Levantar el Servidor


Para levantar el servidor vamos a correr el siguiente comando en una consola al nivel del index.js
```
node index.js
```

## Documentación de MongoDB

Van a crear la cuenta, esta es la documentación recomendada para MongoDB, aunque pueden encontrar más en línea.

* [Quick Start](https://www.mongodb.com/docs/drivers/node/current/quick-start/#quick-start) 
* [Download and Install](https://www.mongodb.com/docs/drivers/node/current/quick-start/download-and-install/)

* [Create a MongoDB Deployment](https://www.mongodb.com/docs/drivers/node/current/quick-start/create-a-deployment/)

* [Create a Connection String](https://www.mongodb.com/docs/drivers/node/current/quick-start/create-a-connection-string/#create-a-connection-string)
* [Connect to MongoDB](https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/)

* [Express Tutorial Part 3: Using a Database (with Mongoose)]c

## Variables de entorno

Las variables de entorno son valores que se configuran en el sistema operativo y que pueden ser accedidos por las aplicaciones en tiempo de ejecución. En Node.js, puedes acceder a estas variables a través del objeto 'dotenv'.

1. Crea un archivo .env en el directorio raíz de tu proyecto.

2. Dentro de .env, define tus variables de entorno por ejemplo:

```
MONGO_DB_URI = `12lkjefoaih1209`
```
## Endpoints disponibles


Finalmente probamos los endpoints:
#### Postman Get Authors
```
localhost:3005/api/hero/
```

#### Get AutorFor Id
```
localhost:3005/api/hero/:id
```

#### Update Author
Verbo patch
```
localhost:3005/api/hero/update/:id
```
con el siguiente esquema de json:
```
{
    "first_name":"Capitan Python",
    "faction":"Python",
    "hp":50,
}
```

#### Create Author
```
localhost:3005/api/hero/create
```
con el siguiente esquema de json:
```
{
    "first_name":"Capitan Python",
    "faction":"Python",
    "hp":50,
}
```

#### Delete Author
```
localhost:3005/api/hero/delete/:id
```

## Contacto

Si tienes alguna pregunta, sugerencia o deseas obtener el workbook para desarrollar este proyecto, no dudes en contactarme a través de: [jsanchez@educamas.com.co](jsanchez@educamas.com.co).


