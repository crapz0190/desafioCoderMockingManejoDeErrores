export const errorMiddleware = (err, req, res, next) => {
  let statusCode = err.code || 500;
  let errorMessage = err.message;
  let errorName = err.name;

  switch (statusCode) {
    case 400:
      errorMessage;
      break;
    case 401:
      errorMessage;
      break;
    case 403:
      errorMessage;
      break;
    case 404:
      errorMessage;
      errorName;
      break;
    case 500:
      errorMessage;
      break;
  }

  res.status(statusCode).json({
    error: {
      status: statusCode,
      message: { errorMessage, errorName },
    },
  });
};
