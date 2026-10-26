const router = require("express").Router(); 
const {JWT_SECRET} = require("../utils/config"); 
const {auth} = require("../middlewares/auth")
const {oauth2Client, scopes} = require("../utils/googleApis"); 

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

module.exports = router;