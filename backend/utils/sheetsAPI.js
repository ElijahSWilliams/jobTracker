const { google } = require('googleapis');


/* https://sheets.googleapis.com */ 

//funcion to list spreadsheets in the user's Google Drive
async function listSpreadsheets(oauth2Client) {
    const drive = google.drive({ version: 'v3', auth: oauth2Client });
    const res =  await drive.files.list({
        q: "mimeType='application/vnd.google-apps.spreadsheet'",
        fields: 'files(id, name)',
        pageSize: 100,
    }) 
    return res.data.files;
}

async function readSheet(oauth2Client, spreadsheetId, range) {
    const sheets = google.sheets({ version: 'v4', auth: oauth2Client });
    const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
    return response.data.values;
} 



module.exports = { readSheet, listSpreadsheets };