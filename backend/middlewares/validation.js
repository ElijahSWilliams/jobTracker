const {Joi, celebrate} = require("celebrate");


const validateUser = celebrate({
    body: Joi.object().keys({
        name: Joi.string().required().min(2).max(30).messages({
            "string.min": 'The minimum length of the "name" field is 2',
            "string.max": 'The maximum length of the "name" field is 30',
            "string.empty": 'The "name" field must be filled in',
        }), 
        email: Joi.string().required().email(),
        password: Joi.string().required()
    })
}) 

const validateJob = celebrate({
    body: Joi.object().keys({
        
    })
})



module.exports = {
    validateUser
}