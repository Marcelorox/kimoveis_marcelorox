import { Request, Response } from "express";
import realEstateServices from "../services/realEstate.services";
import { RealEstateReturn } from "../interfaces/realEstates.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
  const schedules: RealEstateReturn = await realEstateServices.create(req.body);

  return res.status(201).json(schedules);
};

export default { create };
