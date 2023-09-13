import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRouter } from "./routes/user.routes";
import { userServices } from "./services";
import { catergoriesRouter } from "./routes/categories.routes";
import { RealEstateRouter } from "./routes/realEstate.routes";

const app = express();
app.use(express.json());
app.use("/users", userRouter);

app.use("/categories", catergoriesRouter);
app.use("/realEstate", RealEstateRouter);
app.post("login", userServices.login);

export default app;
