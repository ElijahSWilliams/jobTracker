const router = require("express").Router(); 
const {JWT_SECRET} = require("../utils/config");  
const jwt = require("jsonwebtoken");
const {auth} = require("../middlewares/auth")
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
        return BadRequestError ("Google Authentication Error: " + error);
    } 

    if (!code || !state) {
        return next(new BadRequestError("Missing code or state in callback"));
    }

    const payload = jwt.verify(state, JWT_SECRET); 

    if (!payload.userId) {
        return next(new BadRequestError("Invalid OAuth state"));
    } 

    const {tokens} = await oauth2Client.getToken(code); 

    //temporarily store tokens in memory for demonstration purposes
    oauth2Client.setCredentials(tokens);


    return res.status(200).json({message: "Google Authentication Successful"}) 

} catch (error) {
    return next(error);
}
} 

module.exports = router;