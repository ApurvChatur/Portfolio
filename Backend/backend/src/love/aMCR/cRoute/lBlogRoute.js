const express = require('express');
const { authenticatedUser } = require('../../cUtils/dAuthenticatedUser');
const { blogController } = require('../bController/lBlogController');

const router = express.Router();


router.route("/list").get(blogController().list);
router.route("/create").post(authenticatedUser, blogController().create);
router.route("/retrieve/:id").get(authenticatedUser, blogController().retrieve);
router.route("/update/:id").put(authenticatedUser, blogController().update);
router.route("/delete/:id").delete(authenticatedUser, blogController().delete);


module.exports = router
