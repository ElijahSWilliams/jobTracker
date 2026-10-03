const router = require("express").Router(); 
const {oauth2client, scopes} = require("../utils/googleApis"); 

/* Routes */
router.get("/google", (req, res) => {
    const authURL = oauth2client.generateAuthUrl({
        access_type: "offline", 
        scope: scopes
    }); 

    res.redirect(authURL)
}) 

module.exports = router;