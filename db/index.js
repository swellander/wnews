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
    const sql = `
    SELECT *
    FROM 
      users
      inner JOIN
      posts 
      on users.id = posts.userid
      left join
    
        (
          select count(postid) as upvotes, postid
          from upvotes
          group by postid
        ) as upvotes
    
      on posts.id = upvotes.postid`;
    const data = await client.query(sql);
    return data.rows;
  } catch(err) {
    throw err;
  }
}

const getPostById = async (id) => {
  try {
    const sql = `
    SELECT *
    FROM 
      users
      inner JOIN
      posts 
      on users.id = posts.userid
      left join
    
        (
          select count(postid) as upvotes, postid
          from upvotes
          group by postid
        ) as upvotes
    
      on posts.id = upvotes.postid
      WHERE posts.id = $1`;
    const data = await client.query(sql, [id]);
    return data.rows[0];
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
  getPostById,
  getAllPostsByUserId
}