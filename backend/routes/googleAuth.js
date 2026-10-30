const router = require("express").Router(); 
const {JWT_SECRET} = require("../utils/config");  
const jwt = require("jsonwebtoken");
const { auth } = require("../middlewares/auth")
const {oauth2Client, scopes} = require("../utils/googleApis"); 
const {BadRequestError} = require("../utils/BadRequestError")

/* Routes */
router.get("/google", auth, (req, res) => { 
    const state = jwt.sign({userId: req.user._id.toString()}, JWT_SECRET, 
    {expiresIn: "10m"}
    )

    const authURL = oauth2Client.generateAuthUrl({
        access_type: "offline", 
        scope: scopes, 
        state,
    }); 

    res.redirect(authURL)
})  

router.get("/google/callback", async (req, res, next) => {
    try {
        const { code, state, error } = req.query;
    

    if (error) {
        return next(BadRequestError("Google Authentication Error: " + error));
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

    if (!payload.userId) { //if no userID in payload
        return next(new BadRequestError("Invalid OAuth state"));
    } 

    const {tokens} = await oauth2Client.getToken(code);  
    oauth2Client.setCredentials(tokens);

/*     res.status(200).json({message: "Google Authentication Successful"})  */
    
    return res.redirect('http://localhost:2001/jobTracker/auth/google');



} catch (error) {
    return next(error);
}
    
    })


module.exports = router;