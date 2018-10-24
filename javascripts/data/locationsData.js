$.get('../db/locations.json')
        .done((data) => {
            writeFishes(data.fishes);
            applySale()
        })
        .fail((error) => {
            console.error({ error });
        });