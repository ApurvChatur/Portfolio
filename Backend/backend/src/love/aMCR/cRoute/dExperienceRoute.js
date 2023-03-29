const express = require('express');
const { authenticatedUser } = require('../../cUtils/dAuthenticatedUser');
const { experienceController } = require('../bController/dExperienceController');

const router = express.Router();


router.route("/list").get(experienceController().list);
router.route("/create").post(authenticatedUser, experienceController().create);
router.route("/retrieve/:id").get(authenticatedUser, experienceController().retrieve);
router.route("/update/:id").put(authenticatedUser, experienceController().update);
router.route("/delete/:id").delete(authenticatedUser, experienceController().delete);


module.exports = router
