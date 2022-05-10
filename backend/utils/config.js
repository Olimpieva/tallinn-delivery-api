require('dotenv').config();

const {
  PORT = 3001,
  DB_URL = 'mongodb://mongo:27017/tallinndb',
  NODE_ENV,
  JWT_SECRET,
} = process.env;

module.exports = {
  PORT,
  DB_URL,
  NODE_ENV,
  JWT_SECRET,
};
