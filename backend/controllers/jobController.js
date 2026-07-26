const jwt = require("jsonwebtoken"); 
const Job = require("../models/job"); //import user schema 
const { JWT_SECRET } = require("../utils/config");
const bcrypt = require("bcryptjs");
const ServerError = require("../utils/ServerError");
const BadRequestError = require("../utils/BadRequestError");
const NotFoundError = require("../utils/NotFoundError");
const ConflictError = require("../utils/ConflictError");
const UnauthorizedError = require("../utils/UnauthorizedError"); 

const createJob = (req, res, next) => {
    //get job info from req body
    const {company, position, dateAdded, status } = req.body;  

    //create job
    Job.create({
        company,
        position,
        dateAdded,
        status, 
        owner: req.user._id //Add user id to job
    }).then((job) => {
        res.status(201).send(job) //send job
    }).catch(next);
} 


module.exports = {
    createJob,
}