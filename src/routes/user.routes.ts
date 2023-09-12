import { Router } from "express";
import checkBody from "../middlewares/checkBody.middleware";
import { UserCreateSchemasOmit } from "../schemas/users.schema";
import { usersControllers } from "../controllers";
import { idExists } from "../middlewares/idExists.middlware";
import { verifyAdmin, verifyJwt } from "../middlewares/checkAdmin.middleware";
import { verifyEmailExists } from "../middlewares/verifyEmailExists.middleware";

export const userRouter: Router = Router();
userRouter.post(
  "",
  verifyEmailExists,
  checkBody(UserCreateSchemasOmit),
  usersControllers.create
);

userRouter.get("", verifyJwt, verifyAdmin, usersControllers.read);

userRouter.patch("/:id", verifyJwt, verifyAdmin, usersControllers.patch);

userRouter.delete("/:id", idExists, usersControllers.read);
