"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCreateVideoBodyValid = void 0;
const video_schema_1 = require("../schemas/video.schema");
/*
    title: string;
    description: string;
    genre: string;
    video: string;
*/
class IsCreateVideoBodyValid {
    static execute(request, response, next) {
        // todas as chaves necessárias estão definadas
        request.body = video_schema_1.createVideoSchema.parse(request.body);
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
exports.IsCreateVideoBodyValid = IsCreateVideoBodyValid;
