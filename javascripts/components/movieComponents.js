import { loadMovies } from "../data/movieData.js";
import { locationBuilder } from "./locationComponent.js"


// const bindEvents = () => {
//     $('#morning-button').click(() => {
//       $('#morning-page').hide();
//       $('#afternoon-page').show();
//       $('#evening-page').show();
//       $('#afterDark-page').show();

//     })
//   }

$(document).ready(function () {
    $("#search-bar").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".movie-container #movie-card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

const movieBuilder = (arrayOfMovie) => {
    let domString = '';
    arrayOfMovie.forEach((movie) => {
        domString += `
        <div class="${movie.id} movie-container d-flex border-success mb-3 " style= "width: 18rem"> 
            <div class="thumbnail" id="movie-card">
        <h3 clsss = "releaseDate">${movie.name}</h3>
            <div class="caption">
            <h5 clsss = "releaseDate">${movie.genre}</h5>
            <h5 clsss = "releaseDate">${movie.releaseDate}</h5>
                <h5 id="thumbnail-label">${movie.description}</h5>
                <p><span class="address">${movie.locations}</span></p>
            </div>
            </div>
        </div>`

    })

    $('#movie').html(domString);
}


// const initializeMovie = (movie) => {
//     loadPinsForBoard(movies)
//       .then(data => {
//         movieBuilder(data);
//         bindEvents();
//       })
//       .catch(error => {
//         console.error('error', error);
//       });
//   }

//   export {initializeMovie};

$.get('../db/movie.json')
    .done((data) => {
        movieBuilder(data.movies);
    })
    .fail((error) => {
        console.error({ error });
    });


export { movieBuilder };