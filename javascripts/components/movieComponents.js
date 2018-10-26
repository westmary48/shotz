import { loadMovies } from "../data/movieData.js";


const bindEvents = () => {
    $('#morning-button').click(() => {
      $('#morning-page').hide();
      $('#afternoon-page').show();
      $('#evening-page').show();
      $('#afterDark-page').show();

    })
  }

const movieBuilder = (arrayOfLocation) => {
    let domString = '';
    arrayOfLocation.forEach((movie) => {
        domString += `
        <div class="${movie.id} movie-card col-md-6 col-md-offset-3"> 
        <div class="thumbnail">
            <img src="${movie.imgURL}" alt="" width="40%">
            <div class="caption">
                <h3 id="thumbnail-label">${movie.name}</h3>
                <p>$
                    <span class="address">${movie.address}</span>
                </p>
            </div>
        </div>
        </div>`

    })

    $('#morning-shoot').html(domString);
    $('#afternnon-shoot').html(domString);
    $('#evening-shoot').html(domString);
    $('#dark-shoot').html(domString);
}


const initializeMovie = (movie) => {
    loadPinsForBoard(movies)
      .then(data => {
        movieBuilder(data);
        bindEvents();
      })
      .catch(error => {
        console.error('error', error);
      });
  }
  
  export {initializeMovie};