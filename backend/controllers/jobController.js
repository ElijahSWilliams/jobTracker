const jwt = require("jsonwebtoken"); 
const Job = require("../models/jobs"); //import user schema 
const { JWT_SECRET } = require("../utils/config");
const bcrypt = require("bcryptjs");
const ServerError = require("../utils/ServerError");
const BadRequestError = require("../utils/BadRequestError");
const NotFoundError = require("../utils/NotFoundError");
const ConflictError = require("../utils/ConflictError");
const UnauthorizedError = require("../utils/UnauthorizedError"); 

const createJob = (req, res, next) => {
    //get job info from req body
    const {company, position, status } = req.body;  
    console.log("REQ BODY:", req.body)

    //create job
    Job.create({
        company,
        position,
        status, 
        user: req.user._id //Add user id to job
    }).then((job) => {
        res.status(201).send(job) //send job
    }).catch(next);
}  

const getJobs = (req, res, next) => {
    Job.find({user: req.user._id}) //find jobs that contain current users id
    .then((jobs) => {
        res.status(200).send(jobs);
    })
    .catch((err) => {
        console.error(err);
    })
}



module.exports = {
    createJob,
    getJobs,
}