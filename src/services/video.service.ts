/*
Deve ser possível cadastrar, atualizar, excluir, ler de forma múltipla e individual

Deverão existir filtros por gênero e busca por título
*/

import { generateId, videoDatabase } from "../database/database";
import { TCreateVideoData, TUpdateVideoData, TVideo } from "../interfaces/video.interface";

export class VideoService {
   create(data: TCreateVideoData) {
      const now = new Date();

      const newVideo: TVideo = {
         id: generateId(),
         ...data,
         createdAt: now,
         updatedAt: now,
      };

      videoDatabase.push(newVideo);

      return newVideo;
   }

   getMany(search?: string, genre?: string) {
      const results =
         search || genre
            ? videoDatabase.filter((video) => {
                 return (
                    search ? video.title.toLowerCase().includes(search!.toLowerCase()) : false ||
                    video.genre === genre
                 );
              })
            : videoDatabase;

      return results;
   }

   getOne(id: number) {
      const video = videoDatabase.find((video) => video.id === id);

      return video;
   }

   update(id: number, data: TUpdateVideoData) {
      const currentVideo = videoDatabase.find((video) => video.id === id) as TVideo;

      const now = new Date();

      const updateVideo: TVideo = {
         ...currentVideo,
         ...data,
         updatedAt: now,
      };

      const index = videoDatabase.findIndex((video) => video.id === id);

      videoDatabase.splice(index, 1, updateVideo);

      return updateVideo;
   }

   remove(id: number) {
      const index = videoDatabase.findIndex((video) => video.id === id);

      videoDatabase.splice(index, 1);
   }
}
