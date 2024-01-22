const jwt = require("jsonwebtoken");

function getJwtToken(user) {
  return jwt.sign(
    {
      user,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRESIN,
    }
  );
}

module.exports = getJwtToken;
