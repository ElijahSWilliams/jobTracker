const router = require("express").Router(); 
const {JWT_SECRET} = require("../utils/config");  
const jwt = require("jsonwebtoken");
const { auth } = require("../middlewares/auth")
const {oauth2Client, scopes} = require("../utils/googleApis"); 
const { BadRequestError } = require("../utils/BadRequestError"); 
const { readSheet, listSpreadsheets } = require("../utils/sheetsAPI");
const { redirect } = require("react-router-dom");


/* Global Variables */ 
const isLocal = req.headers.host.includes("localhost"); 
const redirectURI = isLocal ? process.env.GOOGLE_REDIRECT_URI_LOCAL : process.env.GOOGLE_REDIRECT_URI_LIVE;


/* Routes */ 

//route user to Google OAuth URL for authentication (Starts the OAuth flow)
router.get("/google", (req, res) => {   

    //create a JWT token with the user ID and expiration time
    const state = jwt.sign({}, JWT_SECRET, 
    {expiresIn: "10m"}
    ) 

    console.log(`State in /google route: ${state}`)

    //build the Google OAuth URL with the parameters
    const authURL = oauth2Client.generateAuthUrl({
        access_type: "offline", 
        scope: scopes, 
        state,
        redirect_uri: redirectURI
    });  
    /* console.log(authURL) */
    //redirect user to Google OAuth URL
    res.redirect(authURL)
})  

//route back from Google OAuth with code and state parameters (Handles the callback from Google OAuth)
router.get("/google/callback", async (req, res, next) => {
    const { code, state, error, range } = req.query; //get code, state, and error from query parameters sent by Google OAuth
    console.log(`Req.QUery: ${JSON.stringify(req.query)}`); //log query parameters to console
    const frontendUrl = isLocal ? process.env.FRONTEND_URL_LOCAL : process.env.FRONTEND_URL_LIVE; //get frontend URL from environment variable or default to localhost
    
    try {
        
        if (error) { //if error is present in query parameters
            return next(BadRequestError("Google Authentication Error: " + error)); //return error to next middleware
        } 
        
        if (!code || !state) { //if no code or state values 
            
            return next(new BadRequestError(`Missing code or state in callback, code: ${code}, state: ${state}`)); //return error to next middleware
        }
        let payload; 
        
        try {
            payload = jwt.verify(state, JWT_SECRET); //payload contains verified JWT and state
             //call read sheet function from sheetsAPI.js to read data from Google Sheet  
          
           /*  console.log(`payload: ${JSON.stringify(payload)}`); */

    } catch (err) {
        return next(new BadRequestError("Invalid OAuth state"));
    }

    const {tokens} = await oauth2Client.getToken(code);  
        oauth2Client.setCredentials(tokens);  
     
        const spreadsheets = await listSpreadsheets(oauth2Client); //list all spreadsheets in user's Google Drive 
        const data = JSON.parse(JSON.stringify(spreadsheets)); //convert spreadsheets to JSON object 
        /* console.log(`data: ${JSON.stringify(data)}`); */ //log data to console
        const firstSpreadsheetId = data[0].id; //get first spreadsheet ID 
        console.log(`Speadsheet ID line 72: ${firstSpreadsheetId}`)
         

        /* ${process.env.GOOGLE_REDIRECT_URI}/some-path?spreadsheetId=${encodeURIComponent(firstSpreadsheetId)};  */

        return res.redirect(`${frontendUrl}?spreadsheetId=${encodeURIComponent(firstSpreadsheetId)}`);  //redirect to frontend with spreadsheet ID as query parameter
} catch (error) {

    return next(error);
    }
});


module.exports = router;