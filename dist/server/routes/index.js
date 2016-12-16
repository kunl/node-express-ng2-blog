"use strict";
const express_1 = require('express');
const user_1 = require('./user');
const post_1 = require('./post');
const tag_1 = require('./tag');
let router = express_1.Router();
// router.use(home);
router.use(user_1.user);
router.use(post_1.post);
router.use(tag_1.tag);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map