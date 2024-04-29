"use strict";
/*
Deve ser possível cadastrar, atualizar, excluir, ler de forma múltipla e individual

Deverão existir filtros por gênero e busca por título
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
const database_1 = require("../database/database");
class VideoService {
    create(data) {
        const now = new Date();
        const newVideo = Object.assign(Object.assign({ id: (0, database_1.generateId)() }, data), { createdAt: now, updatedAt: now });
        database_1.videoDatabase.push(newVideo);
        return newVideo;
    }
    getMany(search, genre) {
        const results = search || genre
            ? database_1.videoDatabase.filter((video) => {
                return (search ? video.title.toLowerCase().includes(search.toLowerCase()) : false ||
                    video.genre === genre);
            })
            : database_1.videoDatabase;
        return results;
    }
    getOne(id) {
        const video = database_1.videoDatabase.find((video) => video.id === id);
        return video;
    }
    update(id, data) {
        const currentVideo = database_1.videoDatabase.find((video) => video.id === id);
        const now = new Date();
        const updateVideo = Object.assign(Object.assign(Object.assign({}, currentVideo), data), { updatedAt: now });
        const index = database_1.videoDatabase.findIndex((video) => video.id === id);
        database_1.videoDatabase.splice(index, 1, updateVideo);
        return updateVideo;
    }
    remove(id) {
        const index = database_1.videoDatabase.findIndex((video) => video.id === id);
        database_1.videoDatabase.splice(index, 1);
    }
}
exports.VideoService = VideoService;
