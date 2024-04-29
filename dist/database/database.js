"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.videoDatabase = void 0;
exports.videoDatabase = [];
let id = 0;
function generateId() {
    id++;
    return id;
}
exports.generateId = generateId;
