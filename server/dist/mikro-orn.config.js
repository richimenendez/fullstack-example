"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
exports.default = {
    dbName: 'lireddit',
    type: 'postgresql',
    debug: !constants_1.__prod__,
    entities: [Post_1.Post]
};
//# sourceMappingURL=mikro-orn.config.js.map