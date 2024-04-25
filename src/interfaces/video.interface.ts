export interface IVideo{
    id: number;
    title: string;
    description: string;
    genre: string;
    video: string;
    createdAt: Date;
    updatedAt: Date;
}

export type TCreateVideoData = Pick<IVideo, "title" | "description" | "genre" | "video">;
export type TUpdateVideoData = Partial<TCreateVideoData>;