const database = {
    venues: [
        {
            id: Number,
            name: String,
            address: String,
            size: Number,
            maxOccupancy: Number
        }
    ],
    bands: [
        {
            id: Number,
            name: String,
            memberCount: Number,
            genre: String,
            yearStarted: Number
        }
    ],
    bookings: [
        {
            name: String,
            date: Number,
            bandName: String
        }
    ]
}