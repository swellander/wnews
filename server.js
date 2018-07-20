const app = require('./app');
const seed = require('./db').syncAndSeed;

const port = process.env.port || 3000;

seed();

app.listen(port, () => console.log(`Now listening on port ${port}`));



