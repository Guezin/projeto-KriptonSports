import { Request, Response, NextFunction } from 'express';

import AppError from '@shared/errors/AppError';

export default (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ error: error.message });
  }

  return response.status(500).json({ error: 'Internal Server Error' });
};
