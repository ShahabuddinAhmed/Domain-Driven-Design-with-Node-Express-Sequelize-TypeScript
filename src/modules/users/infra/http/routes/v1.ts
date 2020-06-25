import express, { Router } from "express";
import { CreateUserController } from "../../../useCases/createUser/createUserController";


export const newUserRouter = (
    createUserController: CreateUserController,
): Router => {
    const userRouter = express.Router();

    userRouter.post("/create-user", (req, res) => createUserController.execute(req, res));

    return userRouter;
};