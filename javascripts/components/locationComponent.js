import {loadLocations} from "../data/locationsData.js";
import { loadMovies } from "../data/movieData.js";

// const sortLocations = (e) => {
//     const shootTime = e.target.id;
//     if (shootTime === 'all') {
//         LocationBuilder(locations);
//     } else if (shootTime === 'Morning') {
//         const filteredMorning = locations.filter(x => x.shootTime === shootTime);
//         locationsBuilder(filteredMorning);
//     } else if (shootTime === 'Afternoon') {
//         const filteredAfternoon = locations.filter(x => x.shootTime === shootTime);
//         locationsBuilder(filteredAfternoon);
//     } else if (shootTime === 'Evening') {
//         const filteredEvening = locations.filter(x => x.shootTime === shootTime);
//         locationsBuilder(filteredEvening);
//     } else if (shootTime === 'After Dark') {
//         const filteredAfterDark = locations.filter(x => x.shootTime === shootTime);
//         locationsBuilder(filteredAfterDark);
//     }
// // };
// $('#afternoon-button').click(function(){
    // $( document ).ready(function() {
    //     $('#morning-button').on('click', function() { $("#morning-page").show(); });
    //     $('#afternoon-button').on('click', function() { $("#afternoon-page").hide(); });
    //     $('#evening-button').on('click', function() { $("#evening-page").hide(); });
    //     $('#dark-button').on('click', function() { $("#afterDark-page").hide(); });
    });
// $('#morning-button').click(function(){
// });
// $('#evening-button').click(function(){
// });
// $('#dark-button').click(function(){
// });




$(document).ready(function(){
    $("#search-bar").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".location-container #location-card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


// const bindEvents = () => {
//     $('#morning-shoot').on('click', '.', (e) => {
//       const clickedLocationId = $(e.target).closest('.location-card').attr('id');
//       $('#morning-page').hide();
//       $('#afternoon-page').show();
//       $('#evening-page').show();
//       $('#afterDark-page').show();
//       initializeMovie(clickedLocationId);
//     })
//   }


const locationBuilder = (arrayOfLocation) => {
    let domString = '';
    arrayOfLocation.forEach((location) => {
        domString += `
         <div class="${location.id} location-container d-flex border-success mb-3" style= "width: 18rem"> 
        <div class="thumbnail" id="location-card">
            <img src="${location.imageUrl}" alt="" width="40%">
            <div class="caption">
                <h3 id="thumbnail-label">${location.name}</h3>
                <p>$
                    <span class="price">${location.address}</span>
                </p>
            </div>
            <div class="caption card-footer">
            <div class="${location.shootTime}"></div>
        </div>
        </div>
        </div>`
    })
    $('#shoot-times').html(domString);
}



    // const initializeLocations = () => {
    //     loadLocations().then((locations) => {
    //         return loadMovies(locations);
    //         locationBuilder();
    //         bindEvents();
    //     }).catch((error) => {
    //         console.error(error);
    //     })
    // }

    // export {initializeLocations};

        $.get('../db/locations.json')
        .done((data) => {
            locationBuilder(data.locations);
        })
        .fail((error) => {
            console.error({ error });
        });
        

        export {locationBuilder};
        