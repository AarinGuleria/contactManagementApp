const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({
    titlr: "Not Found",
    message: err.message,
    stackTrace: err.stack,
  });
  res.json({
    titlr: "Validation Failed",
    message: err.message,
    stackTrace: err.stack,
  });
};

module.exports = errorHandler;
// The errorHandler.js file exports a function that takes four arguments: err, req, res, and next. The function sends a JSON response with the error message and stack trace. The function is then exported as a module.
// The errorHandler function is used as middleware in the server.js file. It is added to the Express app using the app.use method. When an error occurs in the application, the errorHandler function is called and sends a JSON response with the error details.
