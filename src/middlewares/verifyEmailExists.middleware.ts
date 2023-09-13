import { NextFunction, Request, Response } from "express";
import { User } from "../entities/user.entity";
import { userRepo } from "../repositories";
import AppError from "../errors/app.errors";

export const verifyEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;

  const foundEmail: User | null = await userRepo.findOneBy({
    email: email,
  });

  if (foundEmail) throw new AppError("Email already found", 401);

  return next();
};
