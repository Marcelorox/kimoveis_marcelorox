import { Router } from "express";
import checkBody from "../middlewares/checkBody.middleware";
import { UserCreateSchemasOmit } from "../schemas/users.schema";
import { usersControllers } from "../controllers";
import { idExists } from "../middlewares/idExists.middlware";
import { verifyAdmin, verifyJwt } from "../middlewares/checkAdmin.middleware";
import { verifyEmailExists } from "../middlewares/verifyEmailExists.middleware";
import { RealEstateSchemaOmit } from "../schemas/realEstate.schema";
import realEstatesControllers from "../controllers/realEstates.controllers";

export const EschedulesRouter: Router = Router();
EschedulesRouter.post(
  "",
  verifyJwt,
  verifyAdmin,
  checkBody(RealEstateSchemaOmit),
  realEstatesControllers.create
);
