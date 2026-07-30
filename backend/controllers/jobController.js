const jwt = require("jsonwebtoken"); 
/* const User = require("../model/user"); */
const Job = require("../models/jobs"); //import job schema 
const { JWT_SECRET } = require("../utils/config");
const bcrypt = require("bcryptjs");
const ServerError = require("../utils/ServerError");
const BadRequestError = require("../utils/BadRequestError");
const NotFoundError = require("../utils/NotFoundError");
const ConflictError = require("../utils/ConflictError");
const UnauthorizedError = require("../utils/UnauthorizedError"); 
const { join } = require("path");

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

const deleteJob = (req, res, next) => {
    Job.findById(req.params.jobID)
    .then((job) => {
        if (!job) {
            throw new NotFoundError("Job Not Found")
        } 

        if (job.user.toString() !== req.user._id) {
            throw new UnauthorizedError("You cannot delete this job")
        }  

        //return 
        return Job.findByIdAndDelete(req.params.jobID)
    
    }).then((deletedJob) => {
        res.status(200).send(deletedJob);
    })
    .catch((err) => {
        console.error(err);
    }) 
}

    const updateJob = (req, res, next) => {
        Job.findById(req.params.jobID) 
        .then((job) => {
            //if no job
        if (!job) {
            throw new NotFoundError("Job not found");
        }

        if (job.user.toString() !== req.user._id) {
            throw new UnauthorizedError("You cannot delete this job")
        }

        return Job.findByIdAndUpdate(req.params.jobID)
        })
        .then((updatedJob) => {
            res.status(200).send(updatedJob);
        })
        .catch((err) => {
            console.log(err)
        })
    }




module.exports = {
    createJob,
    getJobs,
    deleteJob, 
    updateJob
}