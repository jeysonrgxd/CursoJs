# Titulo
   Archivo de expecificacion del curso
   https://augdiaugus.gitbook.io/recoleccion-de-notas-publicas/escuela-de-javascript/curso-profesional-de-javascript

## Ambitos de variable 
  **Scope** es el tiempo de vida y uso de una variable.
   Existen distintos tipos:
   - Globales: Disponible en todo el código, alto riesgo de sobre-escritura con el Var.
   - Function Scope: va dentro de una función. Var, puede sobre escribirse en esa función, hay que    tener cuidado con esta.
   - Block Scope: Let y const, te ayudan a que solo sea útil en un bloque especifico.
   - Module Scope: Modulares se limita a su archivo y no sale de ahí.
   - **Recuerda:** En la consola puedes leer las variables locales con la palabra `window.nombre-de-la-variable`

## TypeScript

recordar que en el package.json en 

` "scripts": {"test": "echo \"Error: no test specified\" && exit 1", "start": "parcel index.html"} `

devemos cambiar el valor del start: "parcel typescript/*.html" para probar las bases del lenguaje y para correr el proyecto de video cambiar a start: "parcel index.html", rrecordar tambien que si queremos correr la carpeta de  temas_avanzado con las clases de js tenemos que ver toquetear el start: "parce ....." o sino no utilizarlo ya que hay ciertos errores