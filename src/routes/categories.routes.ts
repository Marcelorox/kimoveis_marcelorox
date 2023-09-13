import { Router } from "express";
import { verifyAdmin, verifyJwt } from "../middlewares/checkAdmin.middleware";
import { categoriesControllers } from "../controllers";
import checkBody from "../middlewares/checkBody.middleware";
import { CategorySchema } from "../schemas/category.schema";
import { idExists } from "../middlewares/idExists.middlware";

export const catergoriesRouter: Router = Router();

catergoriesRouter.post(
  "",
  idExists,
  verifyJwt,
  verifyAdmin,
  checkBody(CategorySchema),
  categoriesControllers.create
);

catergoriesRouter.get("", verifyJwt, verifyAdmin, categoriesControllers.read);

// catergoriesRoute.get(
//   "/:id/realEstate",
//   verifyJwt,
//   verifyAdmin,
//   categoriesControllers.read
// );
