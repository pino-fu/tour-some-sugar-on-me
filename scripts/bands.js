import { Bookings } from "./bookings.js";
import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()


export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }
    html += "</ul>"
    return html
}



const findBandBooking = (band) => {
    let selectedBookingsArr = []

    for (const booking of bookings) {
        if (band.id === booking.bandId)
            selectedBookingsArr.push(booking)
    }
    return selectedBookingsArr // matched booking object bandId with band.id
}

const findVenueBooking = (selectedBookingsArr) => {
    let selectedVenue = ""

    for (const venue of venues) {
        for (const selected of selectedBookingsArr) {
            if (selected.venueId === venue.id)
                selectedVenue += `${venue.name} `
        }
    }
    return selectedVenue // matched venue name venueId with venue.id
}



document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")

            for (const band of bands) { // isolating one band object 
                if (band.id === parseInt(bandId)) {

                    const booked = findBandBooking(band) // finding and isolating one booking object
                    const venue = findVenueBooking(booked) // finding and isolating one band object 

                    window.alert(`${venue}`)

                }
            }
        }
    }
)































// const findBandBooking = (band) => {
//     let selectedBooking = null

//     for (const booking of bookings) {
//         if (band.id === booking.bandId)
//             selectedBooking = booking
//     }
//     return selectedBooking // matched booking object bandId with band.id
// }

// const findVenueBooking = (selectedBooking) => {
//     let selectedVenue = ""

//     for (const venue of venues) {
//         if (selectedBooking.venueId === venue.id)
//             selectedVenue += venue.name
//     }
//     return selectedVenue // matched venue name venueId with venue.id
// }



// document.addEventListener(
//     "click",
//     (clickEvent) => {

//         const itemClicked = clickEvent.target

//         if (itemClicked.id.startsWith("band")) {
//             const [, bandId] = itemClicked.id.split("--")

//             for (const band of bands) { // isolating one band object 
//                 if (band.id === parseInt(bandId)) {

//                     const booked = findBandBooking(band) // finding and isolating one booking object
//                     const venue = findVenueBooking(booked) // finding and isolating one band object 

//                         window.alert(`${venue}`)

//                 }
//             }
//         }
//     }
// )
