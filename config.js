/**
 * Module dependencies.
 */
var DocumentDBClient = require('documentdb').DocumentClient;

/**
 * Initializing Config Object.
 */
var config = {}

/**
 * Add Host, AuthKey, Database ID and Collection ID to connect to DocumentDB.
 */
config.host = process.env.HOST || "https://social.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "y2VfDic1j4yqLcW2Ga3dsbB7VXBlOrF7RIlvtOqqZaH3anxmNZidKXiS0WUGhsC75z6KkwzpcKg9TqUFhweg7w==";
config.databaseId = "ChromePlugin";
config.collectionId = "Candidate";

/**
 * Define a Client Object to establish a connection to DocumentDB.
 */
config.client = new DocumentDBClient(config.host, {masterKey: config.authKey});

/**
 * Keep the Collection Link Ready to query DocumentDB
 */
// config.collLink = 'dbs/' + config.databaseId + '/colls/' + config.collectionId;
config.dbLink = 'dbs/' + config.databaseId;

/**
 * Export Config Object
 */
 module.exports = config;
