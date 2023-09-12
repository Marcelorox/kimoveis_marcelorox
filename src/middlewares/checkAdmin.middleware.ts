import { NextFunction, Request, Response } from "express";
import AppError from "../errors/app.errors";
import { verify } from "jsonwebtoken";

const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
  const bearerToken: string | undefined = req.headers.authorization;

  if (!bearerToken) {
    throw new AppError("Missing bearer token", 401);
  }

  const token = bearerToken.split(" ")[1];

  verify(token, process.env.SECRET_KEY!, (err, decoded) => {
    console.log(err);
    if (err) throw new AppError(err.message, 401);
    res.locals = { ...res.locals, decoded };
  });

  return next();
};

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { admin, sub } = res.locals.decoded;
  const id = req.params.id;

  if (admin) return next();

  if (id !== sub) {
    throw new AppError("Insufficient permission", 403);
  }

  next();
};

export { verifyAdmin, verifyJwt };
