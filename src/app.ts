import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRouter } from "./routes/user.routes";
import { userServices } from "./services";

const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.post("login", userServices.login);

export default app;
