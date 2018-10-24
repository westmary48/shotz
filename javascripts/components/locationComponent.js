
const sortLocations = (e) => {
    const shootTime = e.target.id;
    if (shootTime === 'all') {
        LocationBuilder(locations);
    } else if (shootTime === 'Morning') {
        const filteredMorning = locations.filter(x => x.shootTime === shootTime);
        locationsBuilder(filteredMorning);
    } else if (shootTime === 'Afternoon') {
        const filteredAfternoon = locations.filter(x => x.shootTime === shootTime);
        locationsBuilder(filteredAfternoon);
    } else if (shootTime === 'Evening') {
        const filteredEvening = locations.filter(x => x.shootTime === shootTime);
        locationsBuilder(filteredEvening);
    } else if (shootTime === 'After Dark') {
        const filteredAfterDark = locations.filter(x => x.shootTime === shootTime);
        locationsBuilder(filteredAfterDark);
    }
};


const locationBuilder = (arrayOfLocation) => {
    let domString = '';
    arrayOfLocation.forEach((location) => {
        domString += `
        <div class="${location.id} location card col-md-6 col-md-offset-3"> 
        <div class="thumbnail">
            <img src="${location.locationImage}" alt="" width="40%">
            <div class="caption">
                <h3 id="thumbnail-label">${location.name}</h3>
                <p>$
                    <span class="price">${location.address}</span>
                </p>
            </div>
            <div class="caption card-footer">
            <div class="${shootTime}"></div>
        </div>
        </div>`
    })

    }


    const initializeBoardView = () => {
        loadBoards().then((boards) => {
            writeBoards(boards);
            bindEvents();
        }).catch((error) => {
            console.error(error);
        })
    }

    $.get('../db/locations.json')
    .done((data) => {
        writeFishes(data.fishes);
        applySale()
    })
    .fail((error) => {
        console.error({ error });
    });