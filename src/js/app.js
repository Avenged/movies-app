(function() {
    const moviesContainer = document.getElementById("movies_container");
    const row = moviesContainer.querySelector(".row");
    
    movies_data.forEach(movie => {
        const col = document.createElement("div");
        col.classList.add("mx-auto", "col-xs-12", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-2");
    
        const card = document.createElement("div");
        card.classList.add("shadow", "movie-card", "card");
        card.setAttribute("data-bs-toggle", "modal");
        card.setAttribute("data-bs-target", "#movieDetailModal");
        card.setAttribute("movie-id", movie.id);
    
        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = movie.image;
        card.appendChild(img);
    
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
    
        const a = document.createElement("a");
        a.textContent = movie.title;
        a.href = "#";
        cardBody.appendChild(a);
        card.appendChild(cardBody);
    
        col.appendChild(card);
        row.appendChild(col);
    });

    const movieDetailModal = document.getElementById("movieDetailModal");                                                                  

    movieDetailModal.addEventListener('show.bs.modal', function (event) { //Aquí 
        const card = event.relatedTarget;
        
        const movieId = card.getAttribute('movie-id');
        const movie = movies_data.find(x => x.id == movieId);

        const movieTitle = movie.title;
        const synopsis = movie.synopsis;
        const rating = movie.rating;
        const year = movie.year;
        const cast = movie.cast;

        const h5 = movieDetailModal.querySelector('.modal-title');
        const h50 = movieDetailModal.querySelector('.modal-year');
        const p = movieDetailModal.querySelector('.modal-body p');
        const span = movieDetailModal.querySelector('.modal-cast');
        const h6 = movieDetailModal.querySelector('.modal-rating');
        const img = movieDetailModal.querySelector('.modal-body img');
        
        img.src = movie.image;
        h5.textContent = movieTitle;
        h50.textContent = `(${year})`;
        p.textContent = synopsis;
        span.textContent = cast;
        h6.textContent = `${rating} / 10`;
    });
}())