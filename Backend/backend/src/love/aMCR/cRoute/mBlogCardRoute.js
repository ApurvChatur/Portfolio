const express = require('express');
const { authenticatedUser } = require('../../cUtils/dAuthenticatedUser');
const { blogCardController } = require('../bController/mBlogCardController');

const router = express.Router();


router.route("/list").get(blogCardController().list);
router.route("/create").post(authenticatedUser, blogCardController().create);
router.route("/retrieve/:id").get(authenticatedUser, blogCardController().retrieve);
router.route("/update/:id").put(authenticatedUser, blogCardController().update);
router.route("/delete/:id").delete(authenticatedUser, blogCardController().delete);


module.exports = router
