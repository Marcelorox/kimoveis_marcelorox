import { Request, Response } from "express";
import { userServices } from "../services";
import { UserReturn } from "../interfaces/users.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userServices.create(req.body);

  return res.status(201).json(user);
};
const read = async (req: Request, res: Response): Promise<Response> => {
  const user = await userServices.read();

  return res.status(200).json(user);
};
const patch = async (req: Request, res: Response): Promise<Response> => {
  const { foundUser } = res.locals;

  await userServices.patch(foundUser, req.body);

  return res.status(204).json();
};
const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userServices.destroy(res.locals.foundUser);

  return res.status(204).json();
};

export default { create, read, destroy, patch };
