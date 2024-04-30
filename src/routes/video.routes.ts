import { Router } from "express";
import { VideoController } from "../controllers/video.controller";
import { IsVideoIdValid } from "../middleware/isVideoIdValid.middleware";
import { ValidateBody } from "../middleware/validateBody.middleware";
import { createVideoSchema, updateVideoSchema } from "../schemas/video.schema";

export const videoRouter = Router();

const videoController = new VideoController();

videoRouter.post("/", ValidateBody.execute(createVideoSchema), videoController.create);
videoRouter.get("/", videoController.getMany);
videoRouter.get("/:id", videoController.getOne);
videoRouter.patch(
   "/:id",
   IsVideoIdValid.execute,
   ValidateBody.execute(updateVideoSchema),
   videoController.update
);
videoRouter.delete("/:id", IsVideoIdValid.execute, videoController.remove);
