const express = require('express');
const { authenticatedUser } = require('../../cUtils/dAuthenticatedUser');
const { serviceController } = require('../bController/fServiceController');

const router = express.Router();


router.route("/list").get(serviceController().list);
router.route("/create").post(authenticatedUser, serviceController().create);
router.route("/retrieve/:id").get(authenticatedUser, serviceController().retrieve);
router.route("/update/:id").put(authenticatedUser, serviceController().update);
router.route("/delete/:id").delete(authenticatedUser, serviceController().delete);


module.exports = router
