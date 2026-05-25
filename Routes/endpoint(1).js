import express from "express";
import { addUserData } from "../Handlers/validators.js";

const routes = express.Router();

routes.post("/addRequest", addUserData);

export default routes;