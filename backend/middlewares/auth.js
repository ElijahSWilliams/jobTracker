const jwt = required("jsonwebtoken");
const {JWT_SECRET} = require("../utils/config"); 
const UnauthorizedError = require("../utils/UnauthorizedError")


const auth = (req, res, next ) => {
    const { authorization } = req.headers; 

      // handle no authorization or incorrect authorization
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(new UnauthorizedError("Authorization Error!!"));
  }

   // extract token from header
   const token = authorization.replace("Bearer ", "");
   let payload;
 
   try {
     // verify token using secret key
     payload = jwt.verify(token, JWT_SECRET);
   } catch (err) {
     console.error(err);
     return next(new UnauthorizedError("Authorization Required"));
   }
 
   req.user = payload; // assign payload to req obj
 
   return next(); // send request to next middleware

}