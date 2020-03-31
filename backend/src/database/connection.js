const knex = require('knex');
const configution = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configution.test : configution.development;

const connection = knex(config);

module.exports = connection;