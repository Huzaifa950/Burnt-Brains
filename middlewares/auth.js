const simpleMiddleware = (req, res, next) => {
  console.log("Middleware is triggered!");
  console.log("req.headers", req.headers);
  if (req.headers.token !== "1") {
    res.status(401).send({ message: "Not authorized for this action" });
  }
};

// Export the middleware function
module.exports = simpleMiddleware;
