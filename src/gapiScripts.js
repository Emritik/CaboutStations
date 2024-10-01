import axios from 'axios';

const googleSheetsApiUrl = 'https://sheets.googleapis.com/v4/spreadsheets';


export const addBooking = async (accessToken, spreadsheetId, bookingDetails) => {
    const response = await axios.post(
        `${googleSheetsApiUrl}/${spreadsheetId}/values/Sheet1!A1:append`,
        {
            range: 'Sheet1!A1',
            majorDimension: 'ROWS',
            values: [
                [
                    bookingDetails.destination,
                    bookingDetails.pickup,
                    bookingDetails.tripType,
                    bookingDetails.service,
                    bookingDetails.phone,
                    bookingDetails.locationType,
                    bookingDetails.carId,
                    bookingDetails.carModel,
                    bookingDetails.carPrice,
                    bookingDetails.carDistance,
                    bookingDetails.carDriver,
                    bookingDetails.carRating,
                    bookingDetails.status,
                    bookingDetails.userName,
                    bookingDetails.userEmail,
                    bookingDetails.bookingId,
                    bookingDetails.pickupDate,
                    bookingDetails.pickupTime
                    
                    
                    
                ]
            ],
        },
        {
            params: {
                valueInputOption: 'USER_ENTERED',
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    return response.data;
};


export const updateBooking = async (accessToken, spreadsheetId, bookingId, updatedDetails) => {
    const rows = await getBookings(accessToken, spreadsheetId, 'Sheet1!A1:R');
   // console.log("Rows:", rows);
    
    const rowIndex = rows.findIndex(row => row[15] === bookingId);

   // console.log("Row index:", rowIndex);
    
     

    if (rowIndex === -1) {
        throw new Error('Booking not found');
    }

    
    const range = `Sheet1!A${rowIndex + 1}:R${rowIndex + 1}`; 

   // console.log("Range:", range);
    

    const response = await axios.post(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchUpdate`,
        {
            valueInputOption: 'USER_ENTERED',
            data: [
                {
                    range,
                    majorDimension: 'ROWS',
                    values: [updatedDetails]
                }
            ]
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    return response.data;
};


export const getBookingsByEmail = async (accessToken, spreadsheetId, email) => {
    const rows = await getBookings(accessToken, spreadsheetId, 'Sheet1!A1:Z'); // Fetch all rows
    
    const matchingBookings = rows.filter(row => row[14] === email);
    return matchingBookings;
};


export const deleteBooking = async (accessToken, spreadsheetId, email) => {
    // First, get all bookings to find the row with the matching email
    const rows = await getBookings(accessToken, spreadsheetId, 'Sheet1!A1:D');
    const rowIndex = rows.findIndex(row => row[14] === email);

    if (rowIndex === -1) {
        throw new Error('Booking not found');
    }

    const range = `Sheet1!A${rowIndex + 1}:D${rowIndex + 1}`; // Target the specific row

    // Clear the content of the row
    const response = await axios.post(
        `${googleSheetsApiUrl}/${spreadsheetId}/values/${range}:clear`,
        {},
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    return response.data;
};


const getBookings = async (accessToken, spreadsheetId, range) => {
    const response = await axios.get(`${googleSheetsApiUrl}/${spreadsheetId}/values/${range}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data.values;
};
