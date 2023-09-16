import { Request, Response } from "express";
import { schedulesServices } from "../services";
import { ScheduleReturn } from "../interfaces/schedules.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
  const userId = res.locals.decoded.id!;
  const schedules: ScheduleReturn = await schedulesServices.create({
    ...req.body,
    userId: userId,
  });

  return res.status(201).json(schedules);
};

export default { create };
