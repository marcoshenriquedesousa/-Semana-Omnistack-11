const knex = require('knex');
const configution = require('../../knexfile');

const connection = knex(configution.development);

module.exports = connection;