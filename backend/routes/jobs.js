const router = require("express").Router(); 
const auth = require("../middlewares/auth");
const {createJob} = require("../controllers/jobController"); 

///routes
router.post("/", auth, createJob);
/* router.post("/", auth, updateJob); */


module.exports = router;