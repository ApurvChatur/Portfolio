const express = require('express');
const { authenticatedUser } = require('../../cUtils/dAuthenticatedUser');
const { portfolioController } = require('../bController/hProtfolioController');

const router = express.Router();


router.route("/list").get(portfolioController().list);
router.route("/create").post(authenticatedUser, portfolioController().create);
router.route("/retrieve/:id").get(authenticatedUser, portfolioController().retrieve);
router.route("/update/:id").put(authenticatedUser, portfolioController().update);
router.route("/delete/:id").delete(authenticatedUser, portfolioController().delete);


module.exports = router
