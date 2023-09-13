import { Request, Response } from "express";
import { categoriesServices } from "../services";
import { CategorieCreate } from "../interfaces/categories.interface";
import { User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: CategorieCreate = await categoriesServices.create(req.body);

  return res.status(201).json(category);
};
const read = async (req: Request, res: Response): Promise<Response> => {
  const user = await categoriesServices.read();

  return res.status(200).json(user);
};

export default { create, read };
