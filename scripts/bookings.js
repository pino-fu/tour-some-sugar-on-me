import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()


const findBand = (booking) => { //checks booking object for bandId
    let bookedBandName = null

    for (const band of bands) {
            if (booking.bandId === band.id) {
                bookedBandName = band.name
            }
        }
        return bookedBandName
    }


const findVenue = (booking) => { //checks booking for venueId
    let bookedVenue = null
    
        for (const venue of venues) {
            if (booking.venueId === venue.id) {
                bookedVenue = venue.name
            }
        }
        return bookedVenue
    }


export const Bookings = () => { 
    let html = "<ul>"
    
    for (const booking of bookings) {
        const band = findBand(booking)
        const venue = findVenue(booking)

        html += `<li id="booking--${booking.id}">${band} is playing at ${venue} on ${booking.when}`

    }
    html += "</ul>"
    return html
}


//for each booking, compare bandId with band.id
//if there is a match, display information in window alert


const findBookedBand = (booking) => {
    let bookedBand = null

    for (const band of bands) {
        if (booking.bandId === band.id) {
        bookedBand = band        
        }
    }
    
    return bookedBand
}




document.addEventListener(
    "click",
    (clickEvent) => {
        
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("booking")) {
        const [, bookingId] = itemClicked.id.split("--")

        for (const booking of bookings) {
            if (booking.id === parseInt(bookingId)) {

                const bookedBand = findBookedBand(booking)

                window.alert(`${bookedBand.name}
                Genre: ${bookedBand.genre}
                Formed in ${bookedBand.yearStarted}
                ${bookedBand.memberCount} band members`)
            }
        }
        }
    }
)

