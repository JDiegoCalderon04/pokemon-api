# PokemonAPI

Este es mi repositorio del proyecto de PokemonAPI de React.

Este proyecto consiste en una aplicación que permite buscar cualquier Pokemon mediante un formulario en un cuadro de texto, ya sea con el nombre o número del Pokemon, y muestra cada Pokemon como una ficha o "carta", la cual contiene su foto e información sobre algunas estadisiticas del Pokemon como: Nombre, Peso, Altura, etc. Esta informacion fue extraida con el uso de la API: https://pokeapi.co/.

##### En esta aplicación se hace uso de Hooks de React como:
- useState: El cual permite realizar un seguimiento del estado de datos o propiedades en un componente.
- useEffect: El cual permite llevar a cabo efectos secundarios en un componente.
- localStorage: El cual permite que los datos almacenados se guarden en las sesiones del navegador, por lo que persisten aunque actualicemos la página.
1. Además, se hace uso de CSS para el diseño y presentación de las página.
2. Igualmente, se hace uso de un plugin de jQuery para dar un mejor aspecto a los mensajes mostrados al hacer uso de ciertos botones.

##### Entre sus principales funcionalidades se encuentran:  

- Botón "Añadir Favorito": Este botón mediante el uso de localStorage, permite agregar cualquier Pokemon de nuestra elección a una lista de favoritos que permanecerá guardada aunque se actualice el navegador.
- Botón "Ver Favoritos": Este botón mediante el uso de localStorage, permite que la lista de todas las cartas de los Pokemones agregados a favoritos se muestre en pantalla. 
- Botón "Eliminar Favorito": Este botón mediante el uso de localStorage, permite borrar un Pokemon específico de la lista de favoritos.
- Boton "Limpiar Favoritos": Este botón mediante el uso de localStorage, permite borrar por completo todos los favoritos guardados previamente.
- Botón "Ver historial": Este botón permite volver a la búsqueda previa y dejar de ver la lista de favoritos.  
- Botón "Limpiar historial":  Este botón permite borrar por completo el historial generado previamente con las búsquedas.

### Para tener en cuenta:
1. Al iniciar la aplicacion siempre se mostrara por defecto la carta del Pokemon #1, es decir "Bulbasaur", también aplica cuando se borra el historial.
2. Al presionar el botón "Añadir Favorito" dentro de la carta de un Pokemon, se esconderá y en su defecto se mostrará el botón "Eliminar Favorito".
3. Al presionar el botón "Ver Favoritos", se esconderá y en su defecto se mostrará el botón "Volver al historial".
