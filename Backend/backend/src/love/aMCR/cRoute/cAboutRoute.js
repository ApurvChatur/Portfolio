const express = require('express');
const { authenticatedUser } = require('../../cUtils/dAuthenticatedUser');
const { aboutController } = require('../bController/cAboutController');

const router = express.Router();


router.route("/list").get(aboutController().list);
router.route("/create").post(authenticatedUser, aboutController().create);
router.route("/retrieve/:id").get(authenticatedUser, aboutController().retrieve);
router.route("/update/:id").put(authenticatedUser, aboutController().update);
router.route("/delete/:id").delete(authenticatedUser, aboutController().delete);


module.exports = router
