import { Request, Response } from "express";
import realEstateServices from "../services/realEstate.services";
import { RealEstateReturn } from "../interfaces/realEstates.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
  const realEstate: RealEstateReturn = await realEstateServices.create(
    req.body
  );
  return res.status(201).json(realEstate);
};
const read = async (req: Request, res: Response): Promise<Response> => {
  const user = await realEstateServices.read();

  return res.status(200).json(user);
};

export default { create, read };
