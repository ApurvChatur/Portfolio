const express = require('express');
const { authenticatedUser } = require('../../cUtils/dAuthenticatedUser');
const { portfolioCardController } = require('../bController/iPortfolioCardController');

const router = express.Router();


router.route("/list").get(portfolioCardController().list);
router.route("/create").post(authenticatedUser, portfolioCardController().create);
router.route("/retrieve/:id").get(authenticatedUser, portfolioCardController().retrieve);
router.route("/update/:id").put(authenticatedUser, portfolioCardController().update);
router.route("/delete/:id").delete(authenticatedUser, portfolioCardController().delete);


module.exports = router
