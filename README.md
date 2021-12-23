# Proyecto Simulacro Tienda Boca Juniors

## Creado por Lautaro Bustos

  
  

El Proyecto está basado en productos extraídos del sitio oficial de Adidas, de la sección de Boca Juniors específicamente.

  ![enter image description here](https://i.ibb.co/Fb88JRN/Sin-t-tulo.png)`Imagen de la HomePage del sitio`

### Herramientas utilizadas

  

- REACT.JS (JSX): Para generar los componentes y contenedores necesarios para llevar a cabo la estructura del sitio.
- JAVASCRIPT: Para realizar funciones de lógica dentro de los componentes hechos.
- SASS: Preprocesador de CSS para dar estilos al sitio web.
- React Router Dom: Herramienta para generar las rutas para navegar dentro del sitio web.
- Styled Component: A través de Styled Component se puede generar un componente aparte el cual puede recibir una propiedad para que sus estilos varien.
- Formik: Es una libreria creada para el manejo de formularios.
- Yup: Trabaja a la par de Formik con el objetivo de validar los campos del formulario.
- SweetAlert: Crea alertas en el sitio más agradables a la vista del usuario.
- Email.js: Utilizado para el envío de mails.
- Firebase.js: Lo utilizamos para generar una base de datos.

  

### Progreso actual
##### Routing
La Home Page, la búsqueda de productos por categoría y la visualización de los detalles de los productos tiene su propia dirección.
##### Loader
En aquellos momentos donde se esta realizando la solicitud de datos aparecerá en la pantalla un Loader para no desviar la atención del sitio y para que este no aparezca en blanco.
##### Navbar
El Navbar se mostrará a lo largo de todo el sitio y está dividido en dos partes.
En la parte superior aparecen tres beneficios del sitio web que abren Modals con texto diferente cada uno.
En el inferior a la izquierda hay un logo que nos redirige al Home. En el centro un pequeño menú de navegación que nos permiten navegar entre el Home, el catálogo de productos y una sección de contacto. Y a la derecha la opción de iniciar sesión.
Si hay elementos en el carrito aparece el logo del carrito con la cantidad de productos, haciendo clic en el número se abre una lista de los productos.
##### Footer
El footer contiene un pequeño banner para suscribirse a la tienda cuyo link nos envía a registrarnos. Y al final de todo el logo que nuevamente nos redirige a Home, una lista de productos divididos por categoría, una lista que nos envía a la sección de contactos y una de redes sociales.
##### Home
En el home hay un banner con un enlace que nos envía al catálogo y los productos populares.
##### Sección de productos
En esta sección aparecen los productos traídos de Firebase.
Clickeando en las distintas categorías accedemos a los productos que se encuentren dentro de cada categoría.
##### Detalle de productos
Para visualizar los detalles de los productos hace falta tan sólo hacer clic en la card del producto deseado y a través de un HandleClick podemos observar los detalles del producto, si este aplica o no a descuentos, el precio, una imagen más amplia y se puede añadir al carrito de compras. 
Primero hay que elegir un talle, elegir la cantidad que deseamos comprar que no puede exceder los 5 elementos. Al agregar al carrito se puede seguir comprando o ver el carrito.
Por debajo aparece una lista de descripciones del producto y productos similares que en este caso son de la misma categoría.
##### Registrarse
Al registrarse se agrega el usuario a Firebase y aparece una alerta confirmando el registro existoso.
Si se prueba con el registro, se envía un mail al usuario ya diseñado.
![](https://i.ibb.co/r409BB0/Sin-t-tulo2.png)
Imagen del mail que llega al registrarse

##### Iniciar sesión
Al iniciar sesión, si el usuario existe en el Navbar aparece un logo de perfil y una alerta que confirma el ingreso.
##### Logo de perfil y sus opciones
Haciendo clic en el logo se puede navegar a tres sitios:

 1. Al perfil: Se puede agregar los datos los cuales se guardan en un documento en Firebase y también se puede eliminar el usuario.
 2. Mis órdenes: Si el usuario realizo compras se pueden ver las órdenes.
 3. Cerrar sesión: Se puede cerrar la sesión del usuario.
 
**¡ESTO FUE TODO Y A SEGUIR APRENDIENDO!**