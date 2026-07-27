//centralized routes
const router = require("express").Router();
const userRouter = require("./users");
const jobRouter = require("./jobs");
const { createUser, login } = require("../controllers/userController");
const { validateUser, validateLogin } = require("../middlewares/validation");


router.use("/users", userRouter);   
router.use("/jobs", jobRouter);

router.post("/signup", validateUser, createUser);
router.post("/signin", validateLogin, login); 

module.exports = router;
