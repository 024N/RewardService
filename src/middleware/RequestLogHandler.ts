import { NextFunction, Request, Response } from 'express';

export async function requestLogHandler(req: Request, res: Response, next: NextFunction) {
  console.log(`###### CALLED ENDPOINT: ${req.method} ${req.path} ######`);
  next();
}