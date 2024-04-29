"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUpdateVideoBodyValid = void 0;
const video_schema_1 = require("../schemas/video.schema");
class IsUpdateVideoBodyValid {
    static execute(request, response, next) {
        request.body = video_schema_1.updateVideoSchema.parse(request.body);
        next();
    }
}
exports.IsUpdateVideoBodyValid = IsUpdateVideoBodyValid;
