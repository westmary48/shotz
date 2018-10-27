// const loadLocations = () => {
//     return new Promise((resolve, reject) => {
//         $.get('../db/locations.json')
//         .done((data) => {
//             console.log(data);
//             resolve(data.locations);
//         })
//         .fail((error) => {
//             reject(error);
//         })
//     });
// }

const loadLocations = () => {
$.get('../db/locations.json')
.done((data) => {
    locationBuilder(data.locations);
})
.fail((error) => {
    console.error({ error });
});

}

export{loadLocations};