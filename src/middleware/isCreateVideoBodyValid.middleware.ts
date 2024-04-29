import { NextFunction, Request, Response } from "express";
import { createVideoSchema } from "../schemas/video.schema";
import { AppError } from "../error/AppError";

/*
    title: string;
    description: string;
    genre: string;
    video: string;
*/    

export class IsCreateVideoBodyValid{
    static execute(request: Request, response: Response, next: NextFunction){
        // todas as chaves necessárias estão definadas
        request.body = createVideoSchema.parse(request.body);
       
        /*
        if(!request.body.title || !request.body.description || !request.body.genre || !request.body.video  ){
            throw new AppError("Missing body key");
        }

        request.body = {
            title: request.body.title,
            description: request.body.description,
            genre: request.body.genre,
            video: request.body.video
        }
        */

        next();
    }
}