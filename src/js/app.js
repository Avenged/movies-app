/*  1.0 Este script se debería ejecutar automaticamente cuando ya esté construida toda la página html */

/*  1.1 En document (DOM) (es una variable que siempre está disponible en el navegador, y representa todo el contenido HTML que hemos escrito) 
    estamos buscando con ayuda de la función getElementById el modal que pusimos en el index.html. Esta función busca un elemento html (cualquiera)
    mediante su id, en este caso, a nuestro modal (revisar en el index.html) le pusimos de id movieDetailModal.

    Finalmente el resultado (que es nuestro elemento html modal) queda guardado en la variable movieDetailModal.
*/
const movieDetailModal = document.getElementById("movieDetailModal");                                                                  

movieDetailModal.addEventListener('show.bs.modal', function (event) { //Aquí 
    const card = event.relatedTarget;
    
    const movieTitle = card.getAttribute('data-bs-title');
    const synopsis = card.getAttribute('data-bs-synopsis');

    const h5 = movieDetailModal.querySelector('.modal-title')
    const p = movieDetailModal.querySelector('.modal-body p')

    h5.textContent = movieTitle;
    p.textContent = synopsis;

});