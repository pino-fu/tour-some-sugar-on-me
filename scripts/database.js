const database = {
    venues: [
        {
            id: 1,
            name: "The West Room",
            address: "445 West Rd",
            size: 2900,
            maxOccupancy: 85
        },
        {
            id: 2,
            name: "The Basement West",
            address: "788 Pike Pike",
            size: 3000,
            maxOccupancy: 120
        },
        {
            id: 3,
            name: "The Lo-Watt",
            address: "23 Lightbulb Way",
            size: 5000,
            maxOccupancy: 180
        },
        {
            id: 4,
            name: "The Cupery",
            address: "79898 Road Road",
            size: 3500,
            maxOccupancy: 100
        },
        {
            id: 5,
            name: "The Tunnelstone",
            address: "232 Left Right Road",
            size: 3100,
            maxOccupancy: 110
        }
    ],
    bands: [
        {
            id: 1,
            name: "The Rubber Ducks",
            memberCount: 3,
            genre: "Butt Rock",
            yearStarted: 2017
        },
        {
            id: 2,
            name: "The Interpolators",
            memberCount: 4,
            genre: "Math Rock",
            yearStarted: 2019
        },
        {
            id: 3,
            name: "Console.log()",
            memberCount: 5,
            genre: "Rap",
            yearStarted: 2012
        },
        {
            id: 4,
            name: "The Debuggers",
            memberCount: 3,
            genre: "Lo-Fi",
            yearStarted: 2015
        },
        {
            id: 5,
            name: "The Strings",
            memberCount: 4,
            genre: "Acoustic Jam Band",
            yearStarted: 2010
        }
    ],
    bookings: [
        {
            id: 1,
            bandId: 4,
            venueId: 2,
            when: "January 12, 2023"
        },
        {
            id: 2,
            bandId: 1,
            venueId: 5,
            when: "January 29, 2023"
        },
        {
            id: 3,
            bandId: 4,
            venueId: 4,
            when: "February 14, 2023",
        },
        {
            id: 4,
            bandId: 5,
            venueId: 3,
            when: "February 30, 2023"
        },
        {
            id: 5,
            bandId: 2,
            venueId: 1,
            when: "March 12, 2023"
        },
        {
            id: 6,
            bandId: 2,
            venueId: 4,
            when: "April 13, 2023"
        },
        {
            id: 7,
            bandId: 3,
            venueId: 2,
            when: "May 21, 2023"
        }
    ]
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}
export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}
