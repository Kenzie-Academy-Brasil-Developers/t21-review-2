import { Request, Response } from "express";
import { VideoService } from "../services/video.service";

export class VideoController {
   create(request: Request, response: Response) {
      const videoService = new VideoService();

      const video = videoService.create(request.body);

      return response.status(201).json(video);
   }

   getMany(request: Request, response: Response) {
      const videoService = new VideoService();

      const videos = videoService.getMany(
         request.query.search as string,
         request.query.genre as string
      );

      return response.status(200).json(videos);
   }

   getOne(request: Request, response: Response) {
      const videoService = new VideoService();
      
      const video = videoService.getOne(+request.params.id);

      return response.status(200).json(video);
   }

   update(request: Request, response: Response) {
      const videoService = new VideoService();

      const video = videoService.update(+request.params.id, request.body);

      return response.status(200).json(video);
   }

   remove(request: Request, response: Response) {
      const videoService = new VideoService();

      videoService.remove(+request.params.id);

      return response.status(204).json();
   }
}
