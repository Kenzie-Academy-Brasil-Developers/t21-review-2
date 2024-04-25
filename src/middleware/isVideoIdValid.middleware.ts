import { NextFunction, Request, Response } from "express";
import { videoDatabase } from "../database/database";
import { AppError } from "../error/AppError";

export class IsVideoIdValid{
    static execute(request: Request, response: Response, next: NextFunction){
        const id = +request.params.id;

        if(!videoDatabase.some(video => video.id === id)){
            throw new AppError("Video not found.", 404);
        }

        next();
    }
}