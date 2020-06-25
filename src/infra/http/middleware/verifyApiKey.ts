import { NextFunction, Request, Response } from "express";
import config from "../../../config/config";


export const verifyApiKey = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const apiKey = req.query.API_KEY;

    if (!apiKey) {
        return res.status(401).send({
            code: "UNAUTHORIZED",
            message: "Please provide a valid api key",
            data: null,
            errors: []
        });
    }

    if (apiKey !== config.API_KEY) {
        return res.status(401).send({
            code: "UNAUTHORIZED",
            message: "Please provide a valid api key",
            data: null,
            errors: []
        });
    }
    next();
};