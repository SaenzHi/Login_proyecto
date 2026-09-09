# Sistema de Login

Este proyecto consiste en una interfaz web de autenticación desarrollada utilizando HTML, CSS y JavaScript. Su propósito es servir como base para un sistema de registro e inicio de sesión, incorporando también opciones para recuperar y cambiar la contraseña.

## Propósito

El proyecto busca implementar la parte visual e interactiva de un sistema de autenticación. Actualmente permite al usuario navegar entre diferentes formularios sin necesidad de recargar la página.

La interfaz incluye:

- Inicio de sesión.
- Registro de nuevos usuarios.
- Recuperación de contraseña.
- Cambio de contraseña.
- Opciones de inicio de sesión mediante Google, Facebook y GitHub.

Por el momento, los formularios funcionan únicamente en el lado del cliente. No existe una conexión con una base de datos ni un sistema de autenticación real, por lo que los datos introducidos no se almacenan ni se utilizan para iniciar sesión.

## Estructura del proyecto

El proyecto está compuesto principalmente por tres archivos:

### `index.html`

Contiene la estructura de la página y los diferentes formularios de autenticación.

Dentro del archivo se encuentran cuatro formularios principales:

- `login-form`: permite introducir el correo y la contraseña para iniciar sesión.
- `register-form`: permite introducir los datos necesarios para registrar una cuenta.
- `forgot-form`: permite solicitar la recuperación de una contraseña mediante el correo electrónico.
- `change-form`: permite introducir una nueva contraseña y repetirla.

Los formularios utilizan los atributos `required` y diferentes tipos de `input`, como `email` y `password`, para aprovechar las validaciones básicas proporcionadas por el navegador.

### `style.css`

Contiene todos los estilos visuales de la interfaz.

Se encarga de aspectos como:

- Distribución y posición de los elementos.
- Colores y fondo.
- Tamaño y apariencia de los formularios.
- Botones e inputs.
- Efectos al pasar el cursor sobre los elementos.
- Diseño adaptable para pantallas pequeñas.

También utiliza la fuente Poppins mediante Google Fonts.

### `script.js`

Contiene la lógica necesaria para hacer interactiva la interfaz.

El sistema obtiene todos los elementos que representan formularios mediante `querySelectorAll()` y utiliza la clase `active` para determinar qué formulario debe mostrarse.

La función `showForm()` recibe el identificador de un formulario, oculta todos los formularios y posteriormente muestra el formulario seleccionado.

Los enlaces que contienen el atributo `data-form` se utilizan para cambiar entre formularios. Por ejemplo:

```html
<a href="#" data-form="register-form">Registrar</a>
