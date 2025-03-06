const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  try {
    // Extract token from Authorization header
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    const token = authHeader.split(" ")[1]; // Get the token part
    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to request
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};
