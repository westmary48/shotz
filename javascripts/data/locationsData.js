const loadLocations = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
        .done((data) => {
            console.log(data);
            resolve(data.locations);
        })
        .fail((error) => {
            reject(error);
        })
    });
}

export{loadLocations};