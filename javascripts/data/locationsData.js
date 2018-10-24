$.get('../db/locations.json')
        .done((data) => {
        })
        .fail((error) => {
            console.error({ error });
        });