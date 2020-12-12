import { NextFunction, Request, Response } from 'express';

export async function invalidUrlHandler(req: Request, res: Response, next: NextFunction) {
  console.error(`Invalid path or url was entered`);
  res.status(400).send({ error: 'Invalid Endpoint' });
}
