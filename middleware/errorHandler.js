const {constants} = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode){
    case constants.VALIDATION_ERROR:
      res.json({
        titlr: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND_ERROR:
      res.json({
        titlr: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.UNAUTHORIZED_ERROR:
      res.json({
        titlr: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN_ERROR:
      res.json({
        titlr: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        titlr: "Internal Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:  
      break;  
  }

};

module.exports = errorHandler;
// The errorHandler.js file exports a function that takes four arguments: err, req, res, and next. The function sends a JSON response with the error message and stack trace. The function is then exported as a module.
// The errorHandler function is used as middleware in the server.js file. It is added to the Express app using the app.use method. When an error occurs in the application, the errorHandler function is called and sends a JSON response with the error details.
