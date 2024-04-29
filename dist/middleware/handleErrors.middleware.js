"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleErrors = void 0;
const AppError_1 = require("../error/AppError");
const zod_1 = require("zod");
class HandleErrors {
    static execute(error, request, response, next) {
        if (error instanceof AppError_1.AppError) {
            return response.status(error.statusCode).json({ message: error.message });
        }
        if (error instanceof zod_1.ZodError) {
            return response.status(422).json(error);
        }
        console.log(error);
        return response.status(500).json({ message: "Internal server error." });
    }
}
exports.HandleErrors = HandleErrors;
