"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVideoSchema = exports.createVideoSchema = void 0;
const zod_1 = require("zod");
exports.createVideoSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    genre: zod_1.z.string().min(1),
    video: zod_1.z.string().min(1).url()
});
exports.updateVideoSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    genre: zod_1.z.string().min(1),
    video: zod_1.z.string().min(1).url()
}).partial();
