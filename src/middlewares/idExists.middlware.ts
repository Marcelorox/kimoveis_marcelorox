import { NextFunction, Request, Response } from "express";
import { Users } from "../entities/user.entity";
import { userRepo } from "../repositories";
import AppError from "../errors/app.errors";

export const idExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundUser: Users | null = await userRepo.findOneBy({
    id: id,
  });
  if (!foundUser) throw new AppError("User not found", 404);

  res.locals.foundUser = foundUser;

  return next();
};
