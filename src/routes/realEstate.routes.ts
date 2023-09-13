import { Router } from "express";
import checkBody from "../middlewares/checkBody.middleware";
import { idExists } from "../middlewares/idExists.middlware";
import { verifyAdmin, verifyJwt } from "../middlewares/checkAdmin.middleware";
import { RealEstateSchemaOmit } from "../schemas/realEstate.schema";
import realEstatesControllers from "../controllers/realEstates.controllers";

export const RealEstateRouter: Router = Router();
RealEstateRouter.post(
  "",
  verifyJwt,
  verifyAdmin,
  checkBody(RealEstateSchemaOmit),
  realEstatesControllers.create
);

RealEstateRouter.get("", realEstatesControllers.read);
