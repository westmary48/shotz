import { loadMovies } from "../data/movieData.js";
import {locationBuilder} from "./locationComponent.js"


// const bindEvents = () => {
//     $('#morning-button').click(() => {
//       $('#morning-page').hide();
//       $('#afternoon-page').show();
//       $('#evening-page').show();
//       $('#afterDark-page').show();

//     })
//   }

const movieBuilder = (arrayOfLocation) => {
    let domString = '';
    arrayOfLocation.forEach((movie) => {
        domString += `
        <div class="${movie.id} movie-card col-md-6 col-md-offset-3"> 
        <div class="thumbnail">
            <div class ="${movie.name}">
            <div class="caption">
            <h3 class = "${movie.genre}">
            <h3 clss = "${movie.releasedate}">
                <h3 id="thumbnail-label">${movie.description}</h3>
                <p>$
                    <span class="address">${movie.locations}</span>
                </p>
            </div>
        </div>
        </div>`

    })

    $('#movie').html(domString);
    movieBuilder()
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