import { Request, Response, NextFunction } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import redis from 'redis';

import AppError from '@shared/errors/AppError';

const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
  password: undefined,
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'rateLimit',
  points: 5,
  duration: 1,
});

const rateLimiter = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await limiter.consume(request.ip);

    return next();
  } catch {
    throw new AppError('Too many request', 429);
  }
};

export default rateLimiter;
