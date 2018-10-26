const loadMovies = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/movie.json')
        .done((data) => {
            console.log(data);
            const blank = data.movies.filter(movie => movie.location_id == locationId)
            resolve(filterMovieLocations)
            resolve(data.movies);
        })
        .fail((error) => {
            reject(error);
        })
    });
}

const filterMovieLocations = (locations) => {
    return new Promise((resolve, reject) => {
        $get('../db/movies.json')
        .done((data => {
            const blank = locations.map(location => {
            const blank = data.movies.filter(movie => movie.locations_id === location.id);
            board.movies = blank;
            return location
            })
            resolve(blank);
        }))
        .fail((error) => {
            reject('error filterMovieLocations', error);
        })
    })
}

export{loadMovies, filterMovieLocations};



// const loadPinsForBoard = (boardId) => {
//     return new Promise((resolve, reject) => {
//       $.get('../db/pins.json')
//         .done((data) => {
//           const pinsForBoards = data.pins.filter(pin => pin.board_id == boardId)
//           resolve(pinsForBoards);
//         })
//         .fail((error) => {
//           reject(error);
//         })
//     })
//   }
  
//   const loadPinsOnBoards = (boards) => {
//     return new Promise((resolve, reject) => {
//       $.get('../db/pins.json')
//         .done((data) => {
//           /// var x = [1,2,3].map(num => num * 2) // [2,4,6]
//           const boardsWithPins = boards.map(board => {
//             const matchingPins = data.pins.filter(pin => pin.board_id === board.id);
//             board.pins = matchingPins;
//             return board;
//           })
//           resolve(boardsWithPins);
//         })
//         .fail((error) => {
//           reject('error loadPinsOnBoards', error);
//         })
//     })
//   }
  
//   export {loadPinsForBoard, loadPinsOnBoards};


