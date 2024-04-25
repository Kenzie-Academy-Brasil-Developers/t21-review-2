import express, { json } from "express";
import { videoRouter } from "./routes/video.routes";
import { HandleErrors } from "./middleware/handleErrors.middleware";

export const app = express();

app.use(json());

app.use("/movies", videoRouter);

app.use(HandleErrors.execute);