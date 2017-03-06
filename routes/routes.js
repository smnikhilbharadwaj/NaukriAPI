/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();

/**
 * Import Handler Object containing business logics.
 */
var Handler = require('./handler');

/**
 * Define all the necessary routes.
 */
router.get('/scrape', Handler.getScrapedData);

router.get('/collections', Handler.getCollections)

router.get('/candidates', Handler.getCandidates);

router.get('/candidate-by-id', Handler.getCandidateById);

router.post('/add-candidate', Handler.addCandidate);

/**
 * Export Routes Object
 */
module.exports = router;