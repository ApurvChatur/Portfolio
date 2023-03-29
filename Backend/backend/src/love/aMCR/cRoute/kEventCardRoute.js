const express = require('express');
const { authenticatedUser } = require('../../cUtils/dAuthenticatedUser');
const { eventCardController } = require('../bController/kEventCardController');

const router = express.Router();


router.route("/list").get(eventCardController().list);
router.route("/create").post(authenticatedUser, eventCardController().create);
router.route("/retrieve/:id").get(authenticatedUser, eventCardController().retrieve);
router.route("/update/:id").put(authenticatedUser, eventCardController().update);
router.route("/delete/:id").delete(authenticatedUser, eventCardController().delete);


module.exports = router
