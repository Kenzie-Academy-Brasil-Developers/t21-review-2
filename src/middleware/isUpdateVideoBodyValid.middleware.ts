import { NextFunction, Request, Response } from "express";
import { updateVideoSchema } from "../schemas/video.schema";

export class IsUpdateVideoBodyValid{
    static execute(request: Request, response: Response, next: NextFunction){
        request.body = updateVideoSchema.parse(request.body);

        next();
    }
}