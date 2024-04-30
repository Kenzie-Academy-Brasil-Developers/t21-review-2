"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRouter = void 0;
const express_1 = require("express");
const video_controller_1 = require("../controllers/video.controller");
const isVideoIdValid_middleware_1 = require("../middleware/isVideoIdValid.middleware");
const isCreateVideoBodyValid_middleware_1 = require("../middleware/isCreateVideoBodyValid.middleware");
const isUpdateVideoBodyValid_middleware_1 = require("../middleware/isUpdateVideoBodyValid.middleware");
exports.videoRouter = (0, express_1.Router)();
const videoController = new video_controller_1.VideoController();
exports.videoRouter.post("/", isCreateVideoBodyValid_middleware_1.IsCreateVideoBodyValid.execute, videoController.create);
exports.videoRouter.get("/", videoController.getMany);
exports.videoRouter.get("/:id", videoController.getOne);
exports.videoRouter.patch("/:id", isVideoIdValid_middleware_1.IsVideoIdValid.execute, isUpdateVideoBodyValid_middleware_1.IsUpdateVideoBodyValid.execute, videoController.update);
exports.videoRouter.delete("/:id", isVideoIdValid_middleware_1.IsVideoIdValid.execute, videoController.remove);