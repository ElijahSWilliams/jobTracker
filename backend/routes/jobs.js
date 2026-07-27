const router = require("express").Router(); 
const auth = require("../middlewares/auth");
const { createJob, getJobs, deleteJob } = require("../controllers/jobController");  

///routes
router.get("/", auth, getJobs)
router.post("/", auth, createJob)
router.delete("/:jobID", auth, deleteJob)
/* router.post("/", auth, updateJob); */


module.exports = router;