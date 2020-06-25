import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import { initializeDBConnection } from "../db/sequelize";
import { verifyApiKey } from "./middleware/verifyApiKey";
import { newLogManager, newLogManagerStreamer } from "../logger/logger";

import { newUserRepo } from "../../modules/users/infra/repos";
import { newCreateUserController, newCreateUserUseCase } from "../../modules/users/useCases/createUser";
import { newUserRouter } from "../../modules/users/infra/http/routes/v1";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(verifyApiKey);

(async () => {
    // initialize logger
    const logger = await newLogManager();
    const requestLogStreamer = await newLogManagerStreamer(logger);

     // initializing db connection
    await initializeDBConnection();

    // initializing repos 
    const userRepo = newUserRepo();

    // initializing controller
    const userV1Router = await newUserRouter(
        newCreateUserController(
            newCreateUserUseCase(userRepo)
        )
    );

    app.use(morgan("short", { stream: requestLogStreamer }));
    app.use("/api/v1/ddd", userV1Router);
})();

export default app;