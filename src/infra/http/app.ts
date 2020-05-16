import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import { initializeDBConnection } from "../db/sequelize";

import { newProductRepo } from "../../modules/product/infra/repos";
import { newProductController } from "../../modules/product/delivery/controller";
import { newProductUseCase } from "../../modules/product/application/useCases";
import { newProductRouter } from "../../modules/product/infra/http/routes/v1";

import { verifyApiKey } from "./middleware/verifyApiKey";

import config from "../../config/config";
import { newLogManager, newLogManagerStreamer } from "../logger/logger";
const app = express();

// registering app level middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(verifyApiKey);


// bootstrapping the application
(async () => {
    // initialize logger
    const logger = await newLogManager();
    const requestLogStreamer = await newLogManagerStreamer(logger);

    // initializing db connection
    await initializeDBConnection();

    // initializing repos
    const productRepo = newProductRepo();

    // initializing controller
    const wheelV1Router = await newProductRouter(
        newProductController(
            newProductUseCase(
                productRepo
            )
        )
    );

    app.use(morgan("short", { stream: requestLogStreamer }));
    app.use("/api/v1/wheel", wheelV1Router);

})();

export default app;

