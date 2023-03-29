const express = require('express');
const { authenticatedUser } = require('../../cUtils/dAuthenticatedUser');
const { homeController } = require('../bController/bHomeController');

const router = express.Router();


router.route("/list").get(homeController().list);
router.route("/create").post(authenticatedUser, homeController().create);
router.route("/retrieve/:id").get(authenticatedUser, homeController().retrieve);
router.route("/update/:id").put(authenticatedUser, homeController().update);
router.route("/delete/:id").delete(authenticatedUser, homeController().delete);


module.exports = router
