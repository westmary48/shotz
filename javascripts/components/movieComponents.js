

const movieBuilder = (arrayOfLocation) => {
    let domString = '';
    arrayOfLocation.forEach((movie) => {
        domString += `
        <div class="${movie.id} location card col-md-6 col-md-offset-3"> 
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