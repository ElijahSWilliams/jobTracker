const { JWT_SECRET = "superdupersecret21" } = process.env; // if process.env does not have any value, then set default value to 'superdupersecret21'

module.exports = { JWT_SECRET };