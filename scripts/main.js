import { Venues } from "./venues.js"
import { Bands } from "./bands.js"
import { Bookings } from "./bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<div class="bookingsParent">
<article class="bookings">
    <h2>Current Bookings</h2>
    ${Bookings()}
</article>
</div>
<div class="venueAndBandList">
    <section class="detail--columnVenues">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="detail--columnBands">
        <h2>Bands</h2>
        ${Bands()}
    </section>
</div>
` 

mainContainer.innerHTML = applicationHTML
