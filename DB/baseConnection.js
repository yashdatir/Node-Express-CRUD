const { createConnection } = require('typeorm');
require('dotenv').config();

baseConnection = async () => {
  return await createConnection({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [require('./entitySchema')],
  });
};

module.exports = baseConnection();
