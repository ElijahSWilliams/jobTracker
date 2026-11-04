const { google } = require('googleapis');


/* https://sheets.googleapis.com */

async function readSheet(oauth2Client, spreadsheetId, range) {
    const sheets = google.sheets({ version: 'v4', auth: oauth2Client });
    const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
    return response.data.values;
} 



module.exports = { readSheet };