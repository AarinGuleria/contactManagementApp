const asyncHandler = require("express-async-handler");

//@desc Register a new user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.json({
        message: "Register the user",
    });
});

//@desc login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({
        message: "login user",
    });
});

//@desc current user information
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({
        message: "Current user information",
    });
});


module.exports = {registerUser, loginUser, currentUser};