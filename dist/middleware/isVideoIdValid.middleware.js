"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsVideoIdValid = void 0;
const database_1 = require("../database/database");
const AppError_1 = require("../error/AppError");
class IsVideoIdValid {
    static execute(request, response, next) {
        const id = +request.params.id;
        if (!database_1.videoDatabase.some(video => video.id === id)) {
            throw new AppError_1.AppError("Video not found.", 404);
        }
        next();
    }
}
exports.IsVideoIdValid = IsVideoIdValid;
