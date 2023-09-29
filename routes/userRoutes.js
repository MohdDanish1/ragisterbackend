import express from "express";
import { userRegister } from "../controller/user.js";

const routes = express.Router();

routes.post("/registration", userRegister);

export default routes;
