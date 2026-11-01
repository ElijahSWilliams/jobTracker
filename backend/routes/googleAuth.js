const router = require("express").Router(); 
const {JWT_SECRET} = require("../utils/config");  
const jwt = require("jsonwebtoken");
const { auth } = require("../middlewares/auth")
const {oauth2Client, scopes} = require("../utils/googleApis"); 
const { BadRequestError } = require("../utils/BadRequestError");

/* Routes */
router.get("/google", (req, res) => {  
    console.log("GOOGLEEEE AUTH TEST")
    //create a JWT token with the user ID and expiration time
    const state = jwt.sign({}, JWT_SECRET, 
    {expiresIn: "10m"}
    )

    //build the Google OAuth URL with the state parameter
    const authURL = oauth2Client.generateAuthUrl({
        access_type: "offline", 
        scope: scopes, 
        state,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI
    });  


    console.log(authURL)
    //redirect user to Google OAuth URL
    res.redirect(authURL)
})  

router.get("/google/callback", async (req, res, next) => {
    try {
        const { code, state, error } = req.query; //get code, state, and error from query parameters
    
    if (error) { //if error is present in query parameters
        return next(BadRequestError("Google Authentication Error: " + error)); //return error to next middleware
    } 

    if (!code || !state) { //if no code or state values
        return next(new BadRequestError("Missing code or state in callback"));
    }
    let payload; 

    try {
     payload = jwt.verify(state, JWT_SECRET); //payload contains verified JWT and state
    } catch (err) {
        return next(new BadRequestError("Invalid OAuth state"));
    }

  /*   if (!payload.userId) { //if no userID in payload
        return next(new BadRequestError("Invalid OAuth state"));
    } 
 */
    const {tokens} = await oauth2Client.getToken(code);  
    oauth2Client.setCredentials(tokens);

/*     res.status(200).json({message: "Google Authentication Successful"})  */
    
    return res.redirect('http://localhost:2001/jobTracker/auth/google');



} catch (error) {
    return next(error);
}
    
    })


module.exports = router;