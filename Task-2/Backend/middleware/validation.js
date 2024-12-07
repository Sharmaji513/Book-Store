const validator = require("validator");

// Middleware for validating sign-up data
const validate = (req, res, next) => {
  const { username, password } = req.body;

  if (!username) {
    console.log("Validation Error: username is invalid.");
    return res.status(400).json({ message: "Username is not valid!" });
  }

  if (!validator.isStrongPassword(password)) {
    console.log("Validation Error: Password is weak.");
    return res.status(400).json({ message: "Please enter a strong password!" });
  }

  next();
};

module.exports = {
  validate,
};
