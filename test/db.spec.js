const expect = require('chai').expect;
const db = require('../db');

// it('im awake!!!', () => {
//   expect('hey').to.equal('wwwaaat');
// })

  
// beforeEach( async () => {
//   try {
//     await db.syncAndSeed();
//   } catch(err) {
//     throw err;
//   }
// })

describe('getAllUsers', () => {
  it('returns an array', async () => {
    const users = await db.getAllUsers();
    expect(Array.isArray(users)).to.be.true;
  });
  it('returns all users', async () => {
    const users = await db.getAllUsers();
    expect(users.length).to.equal(14);
  });
});

describe('getUserByIdById', () => {

  it('returns an object', async () => {
    const user = await db.getUserById(1);
    expect(typeof user).to.equal('object');
  });
  it('returns the specified user', async () => {
    const user = await db.getUserById(1);
    expect(user.name).to.equal('RubeusH');
  });
});

describe('getAllPosts', () => {
  it ('returns an array of all posts', async () => {
    const posts = await db.getAllPosts();
    expect(posts.length).to.equal(14);
  });
});

describe('getAllPostsByUserId', () => {
  it('returns posts from specified user', async () => {
    const posts = await db.getAllPostsByUserId(2);
    expect(posts).to.be.an('array');
  })
})

