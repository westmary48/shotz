$.get('../db/movies.json')
        .done((data) => {
            writeFishes(data.fishes);
            applySale()
        })
        .fail((error) => {
            console.error({ error });
        });