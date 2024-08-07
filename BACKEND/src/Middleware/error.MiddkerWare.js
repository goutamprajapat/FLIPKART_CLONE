const errorHandler = (statusCode, msg, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  const statusNum = statusCode || 500;
  const message = msg || "Internal Server Error";

  return res.status(statusNum).json({
    status: false,
    errorMessage: message,
  });
};

module.exports = errorHandler;
