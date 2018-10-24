$.get('../db/movies.json')
        .done((data) => {
        })
        .fail((error) => {
            console.error({ error });
        });