"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Post = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: false }
});
exports.default = mongoose_1.default.model('Post', Post);
//# sourceMappingURL=Post.js.map