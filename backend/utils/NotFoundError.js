class NotFoundError extends Error {
    // error 404
    constructor(message) {
      super(message);
      this.name = "NotFoundError";
      this.statusCode = 404;
    }
  }
  
  module.exports = NotFoundError;
  