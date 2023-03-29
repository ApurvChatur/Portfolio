const express = require('express');
const { authenticatedUser } = require('../../cUtils/dAuthenticatedUser');
const { eventController } = require('../bController/jEventController');

const router = express.Router();


router.route("/list").get(eventController().list);
router.route("/create").post(authenticatedUser, eventController().create);
router.route("/retrieve/:id").get(authenticatedUser, eventController().retrieve);
router.route("/update/:id").put(authenticatedUser, eventController().update);
router.route("/delete/:id").delete(authenticatedUser, eventController().delete);


module.exports = router
