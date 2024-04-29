"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoController = void 0;
const video_service_1 = require("../services/video.service");
class VideoController {
    create(request, response) {
        const videoService = new video_service_1.VideoService();
        const video = videoService.create(request.body);
        return response.status(201).json(video);
    }
    getMany(request, response) {
        const videoService = new video_service_1.VideoService();
        const videos = videoService.getMany(request.query.search, request.query.genre);
        return response.status(200).json(videos);
    }
    getOne(request, response) {
        const videoService = new video_service_1.VideoService();
        const video = videoService.getOne(+request.params.id);
        return response.status(200).json(video);
    }
    update(request, response) {
        const videoService = new video_service_1.VideoService();
        const video = videoService.update(+request.params.id, request.body);
        return response.status(200).json(video);
    }
    remove(request, response) {
        const videoService = new video_service_1.VideoService();
        videoService.remove(+request.params.id);
        return response.status(204).json();
    }
}
exports.VideoController = VideoController;
