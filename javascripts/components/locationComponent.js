const locationStringBuilder = (arrayOfLocation) => {
    let domString = '';
    arrayOfLocation.forEach((location) => {
        domString += `
        <div class="${location.shooTtime} location card col-md-6 col-md-offset-3"> 
        <div class="thumbnail">
            <img src="${location.locationImage}" alt="" width="40%">
            <div class="caption">
                <h3 id="thumbnail-label">${location.name}</h3>
                <p>$
                    <span class="price">${location.locationAddresa}</span>
                </p>
            </div>
        </div>
        </div>`

    })
}