const router = require("express").Router(); 
const userRouter = require("./users"); 
const { createUser, login } = require("../controllers/userController")



/* router.use("/users", userRouter);  */

 
router.post("/signup", createUser);
router.post("/signin", login);  

module.exports = router;