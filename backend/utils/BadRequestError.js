class BadRequestError extends Error {
    // invalidData 400
    constructor(message) {
      super(message);
      this.name = "BadRequestError";
      this.statusCode = 400;
    }
  }
  
  module.exports = BadRequestError;
  