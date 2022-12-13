import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()


export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }
    html += "</ul>"
    return html
}


const findVenueBooking = (venue) => {
    let selectedBookingsArr = []

    for (const booking of bookings) {
        if (venue.id === booking.venueId)
            selectedBookingsArr.push(booking)
    }
    return selectedBookingsArr // matched booking object venueId with venue.id 
}


const findBandBooking = (selectedBookingsArr) => {
    let selectedBand = ""

    for (const band of bands) {
        for (const selected of selectedBookingsArr)
        if (selected.bandId === band.id)
            selectedBand += `${band.name} `
    }
    return selectedBand // matched band name bandId with band.id
}



document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("venue")) {
            const [, venueId] = itemClicked.id.split("--")

            for (const venue of venues) { // isolating one venue object 
                if (venue.id === parseInt(venueId)) {
                    
                        const booked = findVenueBooking(venue) // finding and isolating one booking object
                        const band = findBandBooking(booked) // finding and isolating one band object 

                        window.alert(`${band}`)
                    
                }
            }
        }
    }
)
//iterate through bookings to access specific booking
//iterate through venues to find matching id
//iterate through bands to find matching id
//