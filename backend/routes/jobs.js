const router = require("express").Router(); 
const auth = require("../middlewares/auth");
const { createJob, getJobs } = require("../controllers/jobController");  

///routes
router.get("/", auth, getJobs)
router.post("/", auth, createJob); 
/* router.post("/", auth, updateJob); */


module.exports = router;