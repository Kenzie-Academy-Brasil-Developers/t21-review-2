import { z } from "zod";
import { videoSchema } from "../schemas/video.schema";

export type TVideo = z.infer<typeof videoSchema>;

export type TCreateVideoData = Pick<TVideo, "title" | "description" | "genre" | "video">;
export type TUpdateVideoData = Partial<TCreateVideoData>;