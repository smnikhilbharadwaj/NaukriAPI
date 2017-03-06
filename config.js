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
config.host = process.env.HOST || "https://chromeplugin.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "wTbXPqSTaQ7wW6NJmydEumxVvVxtMxgkUAi09Jfepi2LXQsuoWar9NGAX4KVDIiP42ttuaZ0MOq5kmIKTHIPhg==";
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