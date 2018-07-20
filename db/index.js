const pg = require('pg');
const seed = require('./seed');
const { Client } = pg;
const client = new Client(process.env.DATA_BASE_URL);

client.connect();



const getAllUsers = async () => {
  try {
    const data = await client.query('SELECT * FROM users')
    return data.rows;
  } catch(err) {
    throw err;
  }
}

const syncAndSeed = async () => {
  try {
    await client.query(seed);
  } catch(err) {
    throw err;
  }
}

const getUserById = async (userId) => {
  try {
    const data = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
    return data.rows[0];
  } catch(err) {
    throw err;
  }
}

const getAllPosts = async () => {
  try {
    const data = await client.query('SELECT * FROM posts');
    return data.rows;
  } catch(err) {
    throw err;
  }
}

const getAllPostsByUserId = async (userId) => {
  try {
    const data = await client.query('SELECT * FROM posts WHERE userid = $1', [userId]);
    return data.rows;
  } catch(err) {
    throw err;
  }
}

module.exports = {
  syncAndSeed,
  getAllUsers,
  getUserById,
  getAllPosts,
  getAllPostsByUserId
}